// api-server/server.js
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "corenet_cms",
  port: Number(process.env.DB_PORT) || 3306,
};

const pool = mysql.createPool(dbConfig);

// Test DB connection
pool
  .getConnection()
  .then((connection) => {
    console.log("✅ Database connected successfully");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });

// Helper: slug
function generateSlug(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseJsonArray(value) {
  if (value === null || value === undefined) return [];
  if (Array.isArray(value)) return value;

  const str = String(value).trim();
  if (!str) return [];

  // CSV fallback: "a,b,c"
  if (!str.startsWith("[") && str.includes(",")) {
    return str
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  // Convert single-quote array "['a','b']" -> ["a","b"]
  if (str.startsWith("[") && str.includes("'") && !str.includes('"')) {
    const fixed = str.replace(/'/g, '"');
    try {
      return JSON.parse(fixed);
    } catch {}
  }

  // Normal JSON
  try {
    return JSON.parse(str);
  } catch {
    // last fallback: treat as single tag string
    return [str];
  }
}

// Helper: blog row -> response
function formatBlog(row) {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt || "",
    content: row.content,
    author: row.author,
    authorRole: row.author_role || "",
    category: row.category,
    tags: parseJsonArray(row.tags),
    image: row.image || null,
    readTime: row.read_time || 0,
    featured: Boolean(row.featured),
    status: row.status,
    views: row.views || 0,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
  };
}




function parseJsonObject(value) {
  if (value === null || value === undefined) return null;
  if (typeof value === "object") return value;

  const str = String(value).trim();
  if (!str) return null;

  if (str === "[object Object]") return null;

  // single-quote object "{'a':1}" -> {"a":1}
  if (str.startsWith("{") && str.includes("'") && !str.includes('"')) {
    const fixed = str.replace(/'/g, '"');
    try {
      return JSON.parse(fixed);
    } catch {}
  }

  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}




// Helper: case row -> response
function formatCaseStudy(row) {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    client: row.client,
    industry: row.industry,
    challenge: row.challenge,
    solution: row.solution,
    implementation: row.implementation || "",
    results: row.results,
    metrics: parseJsonArray(row.metrics),
    technologies: parseJsonArray(row.technologies),
    duration: row.duration || "",
    teamSize: row.team_size || 0,
    author: row.author,
    category: row.category,
    image: row.image || null,
    gallery: parseJsonArray(row.gallery),
    featured: Boolean(row.featured),
    status: row.status,
    testimonial: parseJsonObject(row.testimonial),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
  };
}

/* =========================
   BLOGS API
========================= */

// List blogs (filters: status, featured)
app.get("/api/blogs", async (req, res) => {
  try {
    const { status, featured } = req.query;
    let query = "SELECT * FROM blogs";
    const params = [];

    const conditions = [];
    if (status) {
      conditions.push("status = ?");
      params.push(status);
    }
    if (featured === "true") {
      conditions.push("featured = 1");
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    const [rows] = await pool.execute(
      query + " ORDER BY created_at DESC",
      params,
    );
    res.json(rows.map(formatBlog));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get blog by ID
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [rows] = await pool.execute(
      "SELECT * FROM blogs WHERE id = ? LIMIT 1",
      [id],
    );

    if (!rows.length) return res.status(404).json({ error: "Blog not found" });
    res.json(formatBlog(rows[0]));
  } catch (error) {
    console.error("Error fetching blog by id:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get blog by slug
app.get("/api/blogs/slug/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const [rows] = await pool.execute(
      "SELECT * FROM blogs WHERE slug = ? LIMIT 1",
      [slug],
    );

    if (!rows.length) return res.status(404).json({ error: "Blog not found" });
    res.json(formatBlog(rows[0]));
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    res.status(500).json({ error: error.message });
  }
});

// Create blog
app.post("/api/blogs", async (req, res) => {
  try {
    const {
      title,
      excerpt,
      content,
      author,
      authorRole,
      category,
      tags,
      image,
      readTime,
      featured,
      status,
      slug: slugFromBody,
    } = req.body;

    if (!title || !author || !category) {
      return res
        .status(400)
        .json({ error: "title, author, category are required" });
    }
    if (!content) {
      return res.status(400).json({ error: "content is required" });
    }

    const slug = slugFromBody || generateSlug(title);

    const publishedAt =
      status === "published"
        ? new Date().toISOString().slice(0, 19).replace("T", " ")
        : null;

    const [result] = await pool.execute(
      `INSERT INTO blogs (title, slug, excerpt, content, author, author_role,
        category, tags, image, read_time, featured, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        slug,
        excerpt || "",
        content,
        author,
        authorRole || "",
        category,
        JSON.stringify(
          Array.isArray(tags)
            ? tags
            : tags
              ? String(tags)
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
              : [],
        ),
        image || null,
        Number(readTime) || 0,
        featured ? 1 : 0,
        status || "draft",
        publishedAt,
      ],
    );

    res.json({
      id: result.insertId,
      success: true,
      message: "Blog created successfully",
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: error.message });
  }
});

// Update blog
app.put("/api/blogs/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = req.body || {};

    // Fetch current (so we can merge safely)
    const [rows] = await pool.execute(
      "SELECT * FROM blogs WHERE id = ? LIMIT 1",
      [id],
    );
    if (!rows.length) return res.status(404).json({ error: "Blog not found" });

    const current = formatBlog(rows[0]);

    const merged = {
      ...current,
      ...data,
      tags: Array.isArray(data.tags) ? data.tags : current.tags,
      readTime:
        data.readTime !== undefined
          ? Number(data.readTime) || 0
          : current.readTime,
      featured:
        data.featured !== undefined ? Boolean(data.featured) : current.featured,
      status: data.status || current.status,
    };

    const slug = merged.slug || generateSlug(merged.title);

    const publishedAt =
      merged.status === "published"
        ? current.publishedAt ||
          new Date().toISOString().slice(0, 19).replace("T", " ")
        : null;

    await pool.execute(
      `UPDATE blogs SET title=?, slug=?, excerpt=?, content=?, author=?, author_role=?,
       category=?, tags=?, image=?, read_time=?, featured=?, status=?, published_at=?
       WHERE id=?`,
      [
        merged.title,
        slug,
        merged.excerpt || "",
        merged.content,
        merged.author,
        merged.authorRole || "",
        merged.category,
        JSON.stringify(merged.tags || []),
        merged.image || null,
        merged.readTime || 0,
        merged.featured ? 1 : 0,
        merged.status || "draft",
        publishedAt,
        id,
      ],
    );

    // return updated
    const [after] = await pool.execute(
      "SELECT * FROM blogs WHERE id=? LIMIT 1",
      [id],
    );
    res.json({ success: true, data: formatBlog(after[0]) });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: error.message });
  }
});

// Delete blog
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    await pool.execute("DELETE FROM blogs WHERE id = ?", [id]);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: error.message });
  }
});

/* =========================
   CASE STUDIES API
========================= */

// List case studies
app.get("/api/case-studies", async (req, res) => {
  try {
    const { status, featured } = req.query;
    let query = "SELECT * FROM case_studies";
    const params = [];

    const conditions = [];
    if (status) {
      conditions.push("status = ?");
      params.push(status);
    }
    if (featured === "true") {
      conditions.push("featured = 1");
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    const [rows] = await pool.execute(
      query + " ORDER BY created_at DESC",
      params,
    );
    res.json(rows.map(formatCaseStudy));
  } catch (error) {
    console.error("Error fetching case studies:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get case study by ID
app.get("/api/case-studies/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [rows] = await pool.execute(
      "SELECT * FROM case_studies WHERE id = ? LIMIT 1",
      [id],
    );
    if (!rows.length)
      return res.status(404).json({ error: "Case study not found" });
    res.json(formatCaseStudy(rows[0]));
  } catch (error) {
    console.error("Error fetching case study by id:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get case study by slug
app.get("/api/case-studies/slug/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const [rows] = await pool.execute(
      "SELECT * FROM case_studies WHERE slug = ? LIMIT 1",
      [slug],
    );
    if (!rows.length)
      return res.status(404).json({ error: "Case study not found" });
    res.json(formatCaseStudy(rows[0]));
  } catch (error) {
    console.error("Error fetching case study by slug:", error);
    res.status(500).json({ error: error.message });
  }
});

// Create case study
app.post("/api/case-studies", async (req, res) => {
  try {
    const data = req.body || {};
    if (
      !data.title ||
      !data.client ||
      !data.industry ||
      !data.challenge ||
      !data.solution ||
      !data.results ||
      !data.author ||
      !data.category
    ) {
      return res
        .status(400)
        .json({ error: "Missing required fields for case study" });
    }

    const slug = data.slug || generateSlug(data.title);

    const publishedAt =
      data.status === "published"
        ? new Date().toISOString().slice(0, 19).replace("T", " ")
        : null;

    const [result] = await pool.execute(
      `INSERT INTO case_studies (title, slug, client, industry, challenge, solution,
       implementation, results, metrics, technologies, duration, team_size,
       author, category, image, gallery, featured, status, testimonial, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.title,
        slug,
        data.client,
        data.industry,
        data.challenge,
        data.solution,
        data.implementation || "",
        data.results,
        JSON.stringify(data.metrics || []),
        JSON.stringify(data.technologies || []),
        data.duration || "",
        Number(data.teamSize) || 0,
        data.author,
        data.category,
        data.image || null,
        JSON.stringify(data.gallery || []),
        data.featured ? 1 : 0,
        data.status || "draft",
        JSON.stringify(data.testimonial || null),
        publishedAt,
      ],
    );

    res.json({
      id: result.insertId,
      success: true,
      message: "Case study created successfully",
    });
  } catch (error) {
    console.error("Error creating case study:", error);
    res.status(500).json({ error: error.message });
  }
});

// Update case study
app.put("/api/case-studies/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = req.body || {};

    const [rows] = await pool.execute(
      "SELECT * FROM case_studies WHERE id = ? LIMIT 1",
      [id],
    );
    if (!rows.length)
      return res.status(404).json({ error: "Case study not found" });

    const current = formatCaseStudy(rows[0]);

    const merged = {
      ...current,
      ...data,
      metrics: Array.isArray(data.metrics) ? data.metrics : current.metrics,
      technologies: Array.isArray(data.technologies)
        ? data.technologies
        : current.technologies,
      gallery: Array.isArray(data.gallery) ? data.gallery : current.gallery,
      teamSize:
        data.teamSize !== undefined
          ? Number(data.teamSize) || 0
          : current.teamSize,
      featured:
        data.featured !== undefined ? Boolean(data.featured) : current.featured,
      status: data.status || current.status,
    };

    const slug = merged.slug || generateSlug(merged.title);

    const publishedAt =
      merged.status === "published"
        ? current.publishedAt ||
          new Date().toISOString().slice(0, 19).replace("T", " ")
        : null;

    await pool.execute(
      `UPDATE case_studies SET title=?, slug=?, client=?, industry=?, challenge=?, solution=?,
       implementation=?, results=?, metrics=?, technologies=?, duration=?, team_size=?,
       author=?, category=?, image=?, gallery=?, featured=?, status=?, testimonial=?, published_at=?
       WHERE id=?`,
      [
        merged.title,
        slug,
        merged.client,
        merged.industry,
        merged.challenge,
        merged.solution,
        merged.implementation || "",
        merged.results,
        JSON.stringify(merged.metrics || []),
        JSON.stringify(merged.technologies || []),
        merged.duration || "",
        merged.teamSize || 0,
        merged.author,
        merged.category,
        merged.image || null,
        JSON.stringify(merged.gallery || []),
        merged.featured ? 1 : 0,
        merged.status || "draft",
        JSON.stringify(merged.testimonial || null),
        publishedAt,
        id,
      ],
    );

    const [after] = await pool.execute(
      "SELECT * FROM case_studies WHERE id=? LIMIT 1",
      [id],
    );
    res.json({ success: true, data: formatCaseStudy(after[0]) });
  } catch (error) {
    console.error("Error updating case study:", error);
    res.status(500).json({ error: error.message });
  }
});

// Delete case study
app.delete("/api/case-studies/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    await pool.execute("DELETE FROM case_studies WHERE id = ?", [id]);
    res.json({ success: true, message: "Case study deleted successfully" });
  } catch (error) {
    console.error("Error deleting case study:", error);
    res.status(500).json({ error: error.message });
  }
});

// Health
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Corenet API is running" });
});

const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Corenet API running on port ${PORT}`);
  console.log(`📝 API Endpoints:`);
  console.log(`   GET     http://localhost:${PORT}/api/blogs`);
  console.log(`   GET     http://localhost:${PORT}/api/blogs/:id`);
  console.log(`   GET     http://localhost:${PORT}/api/blogs/slug/:slug`);
  console.log(`   POST    http://localhost:${PORT}/api/blogs`);
  console.log(`   PUT     http://localhost:${PORT}/api/blogs/:id`);
  console.log(`   DELETE  http://localhost:${PORT}/api/blogs/:id`);
  console.log(`   GET     http://localhost:${PORT}/api/case-studies`);
  console.log(`   GET     http://localhost:${PORT}/api/case-studies/:id`);
  console.log(
    `   GET     http://localhost:${PORT}/api/case-studies/slug/:slug`,
  );
  console.log(`   POST    http://localhost:${PORT}/api/case-studies`);
  console.log(`   PUT     http://localhost:${PORT}/api/case-studies/:id`);
  console.log(`   DELETE  http://localhost:${PORT}/api/case-studies/:id`);
  console.log(`   GET     http://localhost:${PORT}/api/health`);
});
