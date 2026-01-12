const fetch = require('node-fetch');

async function testEndpoints() {
  const baseUrl = 'http://localhost:3000';
  
  console.log('Testing API endpoints...\n');
  
  try {
    // Test GET all case studies
    console.log('1. Testing GET /api/case-studies...');
    const response1 = await fetch(`${baseUrl}/api/case-studies`);
    const data1 = await response1.json();
    console.log(`Status: ${response1.status}`);
    console.log(`Success: ${data1.success}`);
    console.log(`Count: ${data1.data ? data1.data.length : 0} case studies\n`);
    
    // Test GET published case studies
    console.log('2. Testing GET /api/case-studies?published=true...');
    const response2 = await fetch(`${baseUrl}/api/case-studies?published=true`);
    const data2 = await response2.json();
    console.log(`Status: ${response2.status}`);
    console.log(`Success: ${data2.success}`);
    console.log(`Published: ${data2.data ? data2.data.length : 0} case studies\n`);
    
    // Test login (if you have auth)
    console.log('3. Testing admin credentials...');
    console.log('Email: admin@corenet.co.in');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('Error testing endpoints:', error);
  }
}

testEndpoints();