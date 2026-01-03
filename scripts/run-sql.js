#!/usr/bin/env node

/**
 * Execute SQL via Supabase Management API
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Extract project ref from URL
const projectRef = supabaseUrl.match(/https:\/\/(.+?)\.supabase\.co/)[1];

console.log('🚀 Executing SQL schema...\n');
console.log(`   Project: ${projectRef}`);

// Read SQL file
const sqlPath = path.join(__dirname, '..', 'supabase', 'init-schema.sql');
const sql = fs.readFileSync(sqlPath, 'utf-8');

// Use Supabase REST API to execute SQL
const postData = JSON.stringify({ query: sql });

const options = {
  hostname: `${projectRef}.supabase.co`,
  port: 443,
  path: '/rest/v1/rpc/exec_sql',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'apikey': serviceKey,
    'Authorization': `Bearer ${serviceKey}`,
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 201) {
      console.log('✅ SQL executed successfully!\n');
      console.log('🔍 Running verification...\n');

      // Run verification
      require('./test-connection.js');
    } else {
      console.log(`❌ Failed with status ${res.statusCode}`);
      console.log('Response:', data);
      console.log('\n📝 Please run the SQL manually:');
      console.log('   1. Open: https://supabase.com/dashboard/project/' + projectRef + '/sql');
      console.log('   2. Copy: supabase/init-schema.sql');
      console.log('   3. Paste and Run\n');
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error.message);
  console.log('\n📝 Fallback: Run SQL manually in Supabase Dashboard');
  console.log('   SQL file: supabase/init-schema.sql\n');
});

req.write(postData);
req.end();
