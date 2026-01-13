// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Add this to the beginning of server.js
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'corenet_cms',
  port: process.env.DB_PORT || 3306
};

const pool = mysql.createPool(dbConfig);

// Test database connection
pool.getConnection()
  .then(connection => {
    console.log('✅ Database connected successfully');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err.message);
  });

// Helper function to generate slug
function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// BLOGS API
app.get('/api/blogs', async (req, res) => {
  try {
    const { status, featured } = req.query;
    let query = 'SELECT * FROM blogs';
    const params = [];
    
    const conditions = [];
    if (status) {
      conditions.push('status = ?');
      params.push(status);
    }
    if (featured === 'true') {
      conditions.push('featured = 1');
    }
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    const [rows] = await pool.execute(query + ' ORDER BY created_at DESC', params);
    
    // Format the response
    const formattedRows = rows.map(row => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt || '',
      content: row.content,
      author: row.author,
      authorRole: row.author_role || '',
      category: row.category,
      tags: JSON.parse(row.tags || '[]'),
      image: row.image || null,
      readTime: row.read_time || 0,
      featured: Boolean(row.featured),
      status: row.status,
      views: row.views || 0,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      publishedAt: row.published_at
    }));
    
    res.json(formattedRows);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/blogs', async (req, res) => {
  try {
    const {
      title, excerpt, content, author, authorRole, category, tags,
      image, readTime, featured, status
    } = req.body;
    
    const slug = req.body.slug || generateSlug(title);
    
    const [result] = await pool.execute(
      `INSERT INTO blogs (title, slug, excerpt, content, author, author_role, 
       category, tags, image, read_time, featured, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title, slug, excerpt || '', content, author, authorRole || '', category,
        JSON.stringify(tags || []), image || null, readTime || 0, 
        featured ? 1 : 0, status || 'draft',
        status === 'published' ? new Date().toISOString().slice(0, 19).replace('T', ' ') : null
      ]
    );
    
    res.json({ 
      id: result.insertId, 
      success: true,
      message: 'Blog created successfully'
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: error.message });
  }
});

// CASE STUDIES API
app.get('/api/case-studies', async (req, res) => {
  try {
    const { status, featured } = req.query;
    let query = 'SELECT * FROM case_studies';
    const params = [];
    
    const conditions = [];
    if (status) {
      conditions.push('status = ?');
      params.push(status);
    }
    if (featured === 'true') {
      conditions.push('featured = 1');
    }
    
    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }
    
    const [rows] = await pool.execute(query + ' ORDER BY created_at DESC', params);
    
    // Format the response
    const formattedRows = rows.map(row => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      client: row.client,
      industry: row.industry,
      challenge: row.challenge,
      solution: row.solution,
      implementation: row.implementation || '',
      results: row.results,
      metrics: JSON.parse(row.metrics || '[]'),
      technologies: JSON.parse(row.technologies || '[]'),
      duration: row.duration || '',
      teamSize: row.team_size || 0,
      author: row.author,
      category: row.category,
      image: row.image || null,
      gallery: JSON.parse(row.gallery || '[]'),
      featured: Boolean(row.featured),
      status: row.status,
      testimonial: row.testimonial ? JSON.parse(row.testimonial) : null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      publishedAt: row.published_at
    }));
    
    res.json(formattedRows);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/case-studies', async (req, res) => {
  try {
    const data = req.body;
    const slug = data.slug || generateSlug(data.title);
    
    const [result] = await pool.execute(
      `INSERT INTO case_studies (title, slug, client, industry, challenge, solution, 
       implementation, results, metrics, technologies, duration, team_size, 
       author, category, image, gallery, featured, status, testimonial, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.title, slug, data.client, data.industry, data.challenge, data.solution,
        data.implementation || '', data.results, JSON.stringify(data.metrics || []),
        JSON.stringify(data.technologies || []), data.duration || '', data.teamSize || 0,
        data.author, data.category, data.image || null, JSON.stringify(data.gallery || []),
        data.featured ? 1 : 0, data.status || 'draft',
        JSON.stringify(data.testimonial || {}),
        data.status === 'published' ? new Date().toISOString().slice(0, 19).replace('T', ' ') : null
      ]
    );
    
    res.json({ 
      id: result.insertId, 
      success: true,
      message: 'Case study created successfully'
    });
  } catch (error) {
    console.error('Error creating case study:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Corenet API is running' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Corenet API running on port ${PORT}`);
  console.log(`📝 API Endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/blogs`);
  console.log(`   POST http://localhost:${PORT}/api/blogs`);
  console.log(`   GET  http://localhost:${PORT}/api/case-studies`);
  console.log(`   POST http://localhost:${PORT}/api/case-studies`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
});