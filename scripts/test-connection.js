#!/usr/bin/env node

/**
 * Test Supabase connection and setup
 */

const { createClient } = require('@supabase/supabase-js');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

console.log('🔗 Testing Supabase connection...\n');
console.log(`   URL: ${supabaseUrl}`);
console.log(`   Service Key: ${supabaseServiceKey.substring(0, 20)}...\n`);

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testConnection() {
  try {
    // Test 1: Check connection
    console.log('📡 Test 1: Checking connection...');
    const { data, error } = await supabase.auth.getUser();

    if (error && error.message !== 'Invalid token') {
      console.log('   ⚠️  Connection issue:', error.message);
    } else {
      console.log('   ✅ Connection successful!');
    }

    // Test 2: List existing tables
    console.log('\n📊 Test 2: Checking existing tables...');

    const tables = ['profiles', 'categories', 'services', 'service_requests'];
    const existingTables = [];

    for (const table of tables) {
      const { error } = await supabase
        .from(table)
        .select('count')
        .limit(1);

      if (!error) {
        existingTables.push(table);
        console.log(`   ✅ Table '${table}' exists`);

        // Count records
        const { count } = await supabase
          .from(table)
          .select('*', { count: 'exact', head: true });

        console.log(`      Records: ${count || 0}`);
      } else {
        console.log(`   ❌ Table '${table}' not found`);
      }
    }

    if (existingTables.length === 0) {
      console.log('\n⚠️  No tables found. You need to run the SQL schema.');
      console.log('\n📝 To initialize the database:');
      console.log('   1. Open Supabase Dashboard: https://supabase.com/dashboard');
      console.log('   2. Go to SQL Editor');
      console.log('   3. Copy contents from: supabase/init-schema.sql');
      console.log('   4. Paste and run the SQL\n');
      return false;
    } else if (existingTables.length < tables.length) {
      console.log('\n⚠️  Some tables are missing. You may need to run the full schema.');
      return false;
    } else {
      console.log('\n✅ All tables exist!');
      return true;
    }

  } catch (err) {
    console.error('❌ Error:', err.message);
    return false;
  }
}

testConnection().then(success => {
  if (success) {
    console.log('\n🎉 Database is fully set up and ready!');
    console.log('\n📌 You can now:');
    console.log('   • Run: npm run dev');
    console.log('   • Visit: http://localhost:3000');
    console.log('   • Start building features!\n');
  }
  process.exit(success ? 0 : 1);
});
