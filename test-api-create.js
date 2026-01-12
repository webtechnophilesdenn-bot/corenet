const fetch = require('node-fetch');

async function testCreateCaseStudy() {
  console.log('Testing case study creation via API...\n');
  
  const testData = {
    title: 'API Test Case Study ' + Date.now(),
    slug: 'api-test-' + Date.now(),
    client_name: 'API Test Client',
    industry: 'Technology',
    challenge: 'Testing the API creation endpoint',
    solution: 'Using Node.js fetch to test the endpoint',
    results: 'Successfully created via API',
    technologies: ['Node.js', 'PostgreSQL', 'Next.js'],
    project_duration: '2 weeks',
    testimonial: 'API test successful!',
    testimonial_author: 'Test Runner',
    published: true
  };
  
  try {
    const response = await fetch('http://localhost:3000/api/case-studies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    const result = await response.json();
    
    console.log(`Status: ${response.status}`);
    console.log(`Success: ${result.success}`);
    
    if (result.success) {
      console.log('✅ API create successful!');
      console.log(`Created case study ID: ${result.data.id}`);
      console.log(`Title: ${result.data.title}`);
      console.log(`Project Duration: ${result.data.project_duration}`);
    } else {
      console.log('❌ API create failed');
      console.log(`Error: ${result.error}`);
      if (result.details) {
        console.log(`Details: ${result.details}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

// Run the test
testCreateCaseStudy();