#!/usr/bin/env node

/**
 * Create database tables directly using Supabase client
 * This creates tables one by one using SQL queries
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Read and parse SQL file
const sqlPath = path.join(__dirname, '..', 'supabase', 'init-schema.sql');
const fullSql = fs.readFileSync(sqlPath, 'utf-8');

console.log('🚀 Creating database schema...\n');

async function executeSql(sql) {
  try {
    // Use the Supabase REST API directly
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`
      },
      body: JSON.stringify({ sql })
    });

    if (!response.ok) {
      const error = await response.text();
      return { error };
    }

    const data = await response.json();
    return { data };
  } catch (err) {
    return { error: err.message };
  }
}

async function createTables() {
  console.log('📝 Attempting to create tables via SQL...\n');

  const { error } = await executeSql(fullSql);

  if (error) {
    console.log('⚠️  Direct SQL execution not available via API');
    console.log('\n📋 Please execute the SQL manually:\n');
    console.log('1. Open Supabase Dashboard: https://supabase.com/dashboard');
    console.log('2. Select your project');
    console.log('3. Go to SQL Editor (left sidebar)');
    console.log('4. Click "New Query"');
    console.log('5. Copy the entire content from: supabase/init-schema.sql');
    console.log('6. Paste into the SQL editor');
    console.log('7. Click "Run" or press Ctrl/Cmd + Enter\n');
    console.log('Or copy this to open directly:');
    console.log(`   ${supabaseUrl.replace('.supabase.co', '.supabase.co/project/' + supabaseUrl.match(/https:\/\/(.+?)\.supabase/)[1] + '/sql')}\n`);

    return false;
  }

  console.log('✅ Tables created successfully!\n');
  return true;
}

createTables().then(async (success) => {
  if (success) {
    console.log('🔍 Verifying setup...\n');
    const  { exec } = require('child_process');
    exec('node scripts/test-connection.js', (error, stdout, stderr) => {
      console.log(stdout);
      if (error) console.error(stderr);
    });
  }
});
