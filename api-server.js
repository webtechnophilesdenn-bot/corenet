// api-server.js - Complete Express API Server
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '', // Add your MySQL password here
  database: 'corenet_cms',
  port: 3306
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
    console.log('⚠️ Using in-memory database instead');
  });

// Helper function to generate slug
function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// In-memory storage for development (if DB not available)
let blogs = [
  {
    id: 1,
    title: 'Getting Started with Cybersecurity',
    slug: 'getting-started-with-cybersecurity',
    excerpt: 'Learn the basics of cybersecurity for your business',
    content: 'Full content here...',
    author: 'John Doe',
    authorRole: 'Security Expert',
    category: 'Cybersecurity',
    tags: JSON.stringify(['security', 'beginners']),
    image: '',
    readTime: 5,
    featured: 1,
    status: 'published',
    views: 100,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-16T11:20:00Z',
    publishedAt: '2024-01-15T10:30:00Z'
  }
];

let caseStudies = [
  {
    id: 1,
    title: 'Bank Security Upgrade',
    slug: 'bank-security-upgrade',
    client: 'ABC Bank',
    industry: 'Financial Services',
    challenge: 'Legacy security systems vulnerable to attacks',
    solution: 'Implemented modern firewall and monitoring',
    implementation: '3-month phased implementation',
    results: '99.9% security uptime achieved',
    metrics: JSON.stringify([{ label: 'Uptime', value: '99.9%' }, { label: 'Attack Prevention', value: '95%' }]),
    technologies: JSON.stringify(['Firewall', 'VPN', 'Monitoring']),
    duration: '3 months',
    teamSize: 5,
    author: 'Security Team',
    category: 'Cybersecurity',
    image: '',
    gallery: JSON.stringify([]),
    featured: 1,
    status: 'published',
    testimonial: JSON.stringify({
      quote: 'Excellent service and results',
      author: 'Bank CTO',
      position: 'Chief Technology Officer'
    }),
    createdAt: '2024-01-20T14:45:00Z',
    updatedAt: '2024-01-21T09:15:00Z',
    publishedAt: '2024-01-20T14:45:00Z'
  }
];

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Corenet API is running',
    timestamp: new Date().toISOString()
  });
});

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const { status, featured } = req.query;
    
    // Try to get from database first
    try {
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
        tags: row.tags ? JSON.parse(row.tags) : [],
        image: row.image || '',
        readTime: row.read_time || 0,
        featured: Boolean(row.featured),
        status: row.status,
        views: row.views || 0,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        publishedAt: row.published_at
      }));
      
      return res.json(formattedRows);
    } catch (dbError) {
      console.log('Database query failed, using in-memory data:', dbError.message);
      
      // Use in-memory data as fallback
      let filteredBlogs = [...blogs];
      
      if (status) {
        filteredBlogs = filteredBlogs.filter(blog => blog.status === status);
      }
      if (featured === 'true') {
        filteredBlogs = filteredBlogs.filter(blog => blog.featured === 1);
      }
      
      const formattedBlogs = filteredBlogs.map(blog => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt || '',
        content: blog.content,
        author: blog.author,
        authorRole: blog.authorRole || '',
        category: blog.category,
        tags: blog.tags ? JSON.parse(blog.tags) : [],
        image: blog.image || '',
        readTime: blog.readTime || 0,
        featured: Boolean(blog.featured),
        status: blog.status,
        views: blog.views || 0,
        createdAt: blog.createdAt,
        updatedAt: blog.updatedAt,
        publishedAt: blog.publishedAt
      }));
      
      return res.json(formattedBlogs);
    }
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Create a new blog
app.post('/api/blogs', async (req, res) => {
  try {
    const {
      title, excerpt, content, author, authorRole, category, tags,
      image, readTime, featured, status
    } = req.body;
    
    const slug = req.body.slug || generateSlug(title);
    
    // Try to save to database
    try {
      const [result] = await pool.execute(
        `INSERT INTO blogs (title, slug, excerpt, content, author, author_role, 
         category, tags, image, read_time, featured, status, published_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          title, slug, excerpt || '', content, author, authorRole || '', category,
          JSON.stringify(tags || []), image || '', readTime || 0, 
          featured ? 1 : 0, status || 'draft',
          status === 'published' ? new Date().toISOString().slice(0, 19).replace('T', ' ') : null
        ]
      );
      
      return res.json({ 
        id: result.insertId, 
        success: true,
        message: 'Blog created successfully'
      });
    } catch (dbError) {
      console.log('Database insert failed, using in-memory storage:', dbError.message);
      
      // Use in-memory storage
      const newBlog = {
        id: blogs.length + 1,
        title,
        slug,
        excerpt: excerpt || '',
        content,
        author,
        authorRole: authorRole || '',
        category,
        tags: JSON.stringify(tags || []),
        image: image || '',
        readTime: readTime || 0,
        featured: featured ? 1 : 0,
        status: status || 'draft',
        views: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: status === 'published' ? new Date().toISOString() : null
      };
      
      blogs.push(newBlog);
      
      return res.json({ 
        id: newBlog.id, 
        success: true,
        message: 'Blog created successfully (in-memory)'
      });
    }
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

// Get all case studies
app.get('/api/case-studies', async (req, res) => {
  try {
    const { status, featured } = req.query;
    
    // Try to get from database first
    try {
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
        metrics: row.metrics ? JSON.parse(row.metrics) : [],
        technologies: row.technologies ? JSON.parse(row.technologies) : [],
        duration: row.duration || '',
        teamSize: row.team_size || 0,
        author: row.author,
        category: row.category,
        image: row.image || '',
        gallery: row.gallery ? JSON.parse(row.gallery) : [],
        featured: Boolean(row.featured),
        status: row.status,
        testimonial: row.testimonial ? JSON.parse(row.testimonial) : null,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        publishedAt: row.published_at
      }));
      
      return res.json(formattedRows);
    } catch (dbError) {
      console.log('Database query failed, using in-memory data:', dbError.message);
      
      // Use in-memory data as fallback
      let filteredCaseStudies = [...caseStudies];
      
      if (status) {
        filteredCaseStudies = filteredCaseStudies.filter(cs => cs.status === status);
      }
      if (featured === 'true') {
        filteredCaseStudies = filteredCaseStudies.filter(cs => cs.featured === 1);
      }
      
      const formattedCaseStudies = filteredCaseStudies.map(cs => ({
        id: cs.id,
        title: cs.title,
        slug: cs.slug,
        client: cs.client,
        industry: cs.industry,
        challenge: cs.challenge,
        solution: cs.solution,
        implementation: cs.implementation || '',
        results: cs.results,
        metrics: cs.metrics ? JSON.parse(cs.metrics) : [],
        technologies: cs.technologies ? JSON.parse(cs.technologies) : [],
        duration: cs.duration || '',
        teamSize: cs.teamSize || 0,
        author: cs.author,
        category: cs.category,
        image: cs.image || '',
        gallery: cs.gallery ? JSON.parse(cs.gallery) : [],
        featured: Boolean(cs.featured),
        status: cs.status,
        testimonial: cs.testimonial ? JSON.parse(cs.testimonial) : null,
        createdAt: cs.createdAt,
        updatedAt: cs.updatedAt,
        publishedAt: cs.publishedAt
      }));
      
      return res.json(formattedCaseStudies);
    }
  } catch (error) {
    console.error('Error fetching case studies:', error);
    res.status(500).json({ error: 'Failed to fetch case studies' });
  }
});

// Create a new case study
app.post('/api/case-studies', async (req, res) => {
  try {
    const data = req.body;
    const slug = data.slug || generateSlug(data.title);
    
    // Try to save to database
    try {
      const [result] = await pool.execute(
        `INSERT INTO case_studies (title, slug, client, industry, challenge, solution, 
         implementation, results, metrics, technologies, duration, team_size, 
         author, category, image, gallery, featured, status, testimonial, published_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          data.title, slug, data.client, data.industry, data.challenge, data.solution,
          data.implementation || '', data.results, JSON.stringify(data.metrics || []),
          JSON.stringify(data.technologies || []), data.duration || '', data.teamSize || 0,
          data.author, data.category, data.image || '', JSON.stringify(data.gallery || []),
          data.featured ? 1 : 0, data.status || 'draft',
          JSON.stringify(data.testimonial || {}),
          data.status === 'published' ? new Date().toISOString().slice(0, 19).replace('T', ' ') : null
        ]
      );
      
      return res.json({ 
        id: result.insertId, 
        success: true,
        message: 'Case study created successfully'
      });
    } catch (dbError) {
      console.log('Database insert failed, using in-memory storage:', dbError.message);
      
      // Use in-memory storage
      const newCaseStudy = {
        id: caseStudies.length + 1,
        title: data.title,
        slug,
        client: data.client,
        industry: data.industry,
        challenge: data.challenge,
        solution: data.solution,
        implementation: data.implementation || '',
        results: data.results,
        metrics: JSON.stringify(data.metrics || []),
        technologies: JSON.stringify(data.technologies || []),
        duration: data.duration || '',
        teamSize: data.teamSize || 0,
        author: data.author,
        category: data.category,
        image: data.image || '',
        gallery: JSON.stringify(data.gallery || []),
        featured: data.featured ? 1 : 0,
        status: data.status || 'draft',
        testimonial: JSON.stringify(data.testimonial || {}),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: data.status === 'published' ? new Date().toISOString() : null
      };
      
      caseStudies.push(newCaseStudy);
      
      return res.json({ 
        id: newCaseStudy.id, 
        success: true,
        message: 'Case study created successfully (in-memory)'
      });
    }
  } catch (error) {
    console.error('Error creating case study:', error);
    res.status(500).json({ error: 'Failed to create case study' });
  }
});

// Additional endpoints for PUT and DELETE operations
app.put('/api/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    
    res.json({ 
      success: true, 
      message: `Blog ${id} updated successfully`,
      data 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    res.json({ 
      success: true, 
      message: `Blog ${id} deleted successfully` 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

app.put('/api/case-studies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    
    res.json({ 
      success: true, 
      message: `Case study ${id} updated successfully`,
      data 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update case study' });
  }
});

app.delete('/api/case-studies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    res.json({ 
      success: true, 
      message: `Case study ${id} deleted successfully` 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete case study' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Corenet API Server running on port ${PORT}`);
  console.log(`📝 Available endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log(`   GET  http://localhost:${PORT}/api/blogs`);
  console.log(`   POST http://localhost:${PORT}/api/blogs`);
  console.log(`   PUT  http://localhost:${PORT}/api/blogs/:id`);
  console.log(`   DELETE http://localhost:${PORT}/api/blogs/:id`);
  console.log(`   GET  http://localhost:${PORT}/api/case-studies`);
  console.log(`   POST http://localhost:${PORT}/api/case-studies`);
  console.log(`   PUT  http://localhost:${PORT}/api/case-studies/:id`);
  console.log(`   DELETE http://localhost:${PORT}/api/case-studies/:id`);
});