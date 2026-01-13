const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage
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

// Helper function to generate slug
function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ==================== HEALTH CHECK ====================
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'API Server is running',
    timestamp: new Date().toISOString()
  });
});

// ==================== BLOG ENDPOINTS ====================
// GET all blogs
app.get('/api/blogs', (req, res) => {
  console.log('GET /api/blogs');
  const formatted = blogs.map(blog => ({
    ...blog,
    tags: JSON.parse(blog.tags),
    featured: Boolean(blog.featured)
  }));
  res.json(formatted);
});

// GET blog by ID
app.get('/api/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`GET /api/blogs/${id}`);
  
  const blog = blogs.find(b => b.id === id);
  if (!blog) {
    return res.status(404).json({ error: 'Blog not found' });
  }
  
  res.json({
    ...blog,
    tags: JSON.parse(blog.tags),
    featured: Boolean(blog.featured)
  });
});

// POST create blog
app.post('/api/blogs', (req, res) => {
  console.log('POST /api/blogs:', req.body);
  
  const newBlog = {
    id: blogs.length + 1,
    ...req.body,
    slug: req.body.slug || generateSlug(req.body.title),
    tags: JSON.stringify(req.body.tags || []),
    featured: req.body.featured ? 1 : 0,
    views: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: req.body.status === 'published' ? new Date().toISOString() : null
  };
  
  blogs.push(newBlog);
  
  res.json({ 
    id: newBlog.id, 
    success: true,
    message: 'Blog created successfully'
  });
});

// PUT update blog
app.put('/api/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`PUT /api/blogs/${id}:`, req.body);
  
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Blog not found' });
  }
  
  const updatedBlog = {
    ...blogs[index],
    ...req.body,
    slug: req.body.slug || generateSlug(req.body.title),
    tags: JSON.stringify(req.body.tags || []),
    featured: req.body.featured ? 1 : 0,
    updatedAt: new Date().toISOString()
  };
  
  blogs[index] = updatedBlog;
  
  res.json({ 
    success: true, 
    id,
    message: 'Blog updated successfully'
  });
});

// DELETE blog
app.delete('/api/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`DELETE /api/blogs/${id}`);
  
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Blog not found' });
  }
  
  blogs.splice(index, 1);
  
  res.json({ 
    success: true, 
    message: 'Blog deleted successfully' 
  });
});

// ==================== CASE STUDY ENDPOINTS ====================
// GET all case studies
app.get('/api/case-studies', (req, res) => {
  console.log('GET /api/case-studies');
  const formatted = caseStudies.map(cs => ({
    ...cs,
    metrics: JSON.parse(cs.metrics),
    technologies: JSON.parse(cs.technologies),
    gallery: JSON.parse(cs.gallery),
    testimonial: JSON.parse(cs.testimonial),
    featured: Boolean(cs.featured)
  }));
  res.json(formatted);
});

// GET case study by ID
app.get('/api/case-studies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`GET /api/case-studies/${id}`);
  
  const cs = caseStudies.find(c => c.id === id);
  if (!cs) {
    return res.status(404).json({ error: 'Case study not found' });
  }
  
  res.json({
    ...cs,
    metrics: JSON.parse(cs.metrics),
    technologies: JSON.parse(cs.technologies),
    gallery: JSON.parse(cs.gallery),
    testimonial: JSON.parse(cs.testimonial),
    featured: Boolean(cs.featured)
  });
});

// POST create case study
app.post('/api/case-studies', (req, res) => {
  console.log('POST /api/case-studies:', req.body);
  
  const newCaseStudy = {
    id: caseStudies.length + 1,
    ...req.body,
    slug: req.body.slug || generateSlug(req.body.title),
    metrics: JSON.stringify(req.body.metrics || []),
    technologies: JSON.stringify(req.body.technologies || []),
    gallery: JSON.stringify(req.body.gallery || []),
    testimonial: JSON.stringify(req.body.testimonial || {}),
    featured: req.body.featured ? 1 : 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: req.body.status === 'published' ? new Date().toISOString() : null
  };
  
  caseStudies.push(newCaseStudy);
  
  res.json({ 
    id: newCaseStudy.id, 
    success: true,
    message: 'Case study created successfully'
  });
});

// PUT update case study
app.put('/api/case-studies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`PUT /api/case-studies/${id}:`, req.body);
  
  const index = caseStudies.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Case study not found' });
  }
  
  const updatedCaseStudy = {
    ...caseStudies[index],
    ...req.body,
    slug: req.body.slug || generateSlug(req.body.title),
    metrics: JSON.stringify(req.body.metrics || []),
    technologies: JSON.stringify(req.body.technologies || []),
    gallery: JSON.stringify(req.body.gallery || []),
    testimonial: JSON.stringify(req.body.testimonial || {}),
    featured: req.body.featured ? 1 : 0,
    updatedAt: new Date().toISOString()
  };
  
  caseStudies[index] = updatedCaseStudy;
  
  res.json({ 
    success: true, 
    id,
    message: 'Case study updated successfully'
  });
});

// DELETE case study
app.delete('/api/case-studies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`DELETE /api/case-studies/${id}`);
  
  const index = caseStudies.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Case study not found' });
  }
  
  caseStudies.splice(index, 1);
  
  res.json({ 
    success: true, 
    message: 'Case study deleted successfully' 
  });
});

// ==================== START SERVER ====================
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
  console.log(`📝 Available endpoints:`);
  console.log(`   GET    http://localhost:${PORT}/api/health`);
  console.log(`   GET    http://localhost:${PORT}/api/blogs`);
  console.log(`   POST   http://localhost:${PORT}/api/blogs`);
  console.log(`   GET    http://localhost:${PORT}/api/blogs/:id`);
  console.log(`   PUT    http://localhost:${PORT}/api/blogs/:id`);
  console.log(`   DELETE http://localhost:${PORT}/api/blogs/:id`);
  console.log(`   GET    http://localhost:${PORT}/api/case-studies`);
  console.log(`   POST   http://localhost:${PORT}/api/case-studies`);
  console.log(`   GET    http://localhost:${PORT}/api/case-studies/:id`);
  console.log(`   PUT    http://localhost:${PORT}/api/case-studies/:id`);
  console.log(`   DELETE http://localhost:${PORT}/api/case-studies/:id`);
  console.log('\n✅ All CRUD operations supported!');
});