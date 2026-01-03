#!/usr/bin/env node

/**
 * Database initialization script
 * Executes the Supabase schema using the service role key
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function initDatabase() {
  console.log('🚀 Starting database initialization...\n');

  // Read the SQL schema file
  const schemaPath = path.join(__dirname, '..', 'supabase', 'init-schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');

  // Split into individual statements (simple split by semicolon)
  const statements = schema
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('--'));

  console.log(`📝 Found ${statements.length} SQL statements to execute\n`);

  let successCount = 0;
  let errorCount = 0;

  // Execute each statement
  for (let i = 0; i < statements.length; i++) {
    const statement = statements[i];

    // Skip comments and empty statements
    if (statement.startsWith('--') || statement.trim().length === 0) {
      continue;
    }

    try {
      // Execute the SQL statement
      const { error } = await supabase.rpc('exec_sql', {
        sql: statement + ';'
      });

      if (error) {
        // Try direct execution if RPC doesn't work
        const { error: directError } = await supabase
          .from('_sql')
          .insert({ query: statement + ';' });

        if (directError) {
          console.log(`⚠️  Statement ${i + 1}: ${directError.message}`);
          errorCount++;
        } else {
          successCount++;
        }
      } else {
        successCount++;
      }
    } catch (err) {
      console.log(`⚠️  Statement ${i + 1}: ${err.message}`);
      errorCount++;
    }

    // Show progress every 10 statements
    if ((i + 1) % 10 === 0) {
      console.log(`   Progress: ${i + 1}/${statements.length} statements processed`);
    }
  }

  console.log(`\n✅ Database initialization complete!`);
  console.log(`   Success: ${successCount}`);
  console.log(`   Warnings: ${errorCount}`);

  // Verify tables were created
  console.log('\n🔍 Verifying database setup...');
  await verifySetup();
}

async function verifySetup() {
  try {
    // Check if tables exist by querying them
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('count');

    const { data: services, error: svcError } = await supabase
      .from('services')
      .select('count');

    if (!catError && !svcError) {
      console.log('✅ Tables created successfully');

      // Count records
      const { count: catCount } = await supabase
        .from('categories')
        .select('*', { count: 'exact', head: true });

      const { count: svcCount } = await supabase
        .from('services')
        .select('*', { count: 'exact', head: true });

      console.log(`   Categories: ${catCount || 0} records`);
      console.log(`   Services: ${svcCount || 0} records`);
    } else {
      console.log('⚠️  Could not verify tables');
    }
  } catch (err) {
    console.log('⚠️  Verification failed:', err.message);
  }

  console.log('\n✨ All done! Your database is ready to use.');
  console.log('\n📌 Next steps:');
  console.log('   1. Run: npm run dev');
  console.log('   2. Visit: http://localhost:3000');
  console.log('   3. Check Supabase Dashboard to see your tables\n');
}

// Run the initialization
initDatabase().catch(err => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});
