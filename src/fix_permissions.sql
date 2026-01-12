-- Connect to corenet database as postgres user
-- This script needs to be run by postgres superuser

-- 1. Check current owner
SELECT schemaname, tablename, tableowner 
FROM pg_tables 
WHERE tablename = 'case_studies';

-- 2. Change owner to corenet_user
ALTER TABLE case_studies OWNER TO corenet_user;

-- 3. Grant all privileges to corenet_user (in case owner change doesn't work)
GRANT ALL PRIVILEGES ON TABLE case_studies TO corenet_user;

-- 4. Grant usage on schema
GRANT USAGE ON SCHEMA public TO corenet_user;

-- 5. Create indexes
CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(published);
CREATE INDEX IF NOT EXISTS idx_case_studies_industry ON case_studies(industry);
CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);

-- 6. Check the sequence name (it might be different)
SELECT sequencename 
FROM pg_sequences 
WHERE sequencename LIKE '%case_studies%';

-- 7. Grant privileges on the sequence (if it exists)
-- Replace 'case_studies_id_seq' with the actual sequence name from step 6
GRANT ALL PRIVILEGES ON SEQUENCE case_studies_id_seq TO corenet_user;

-- 8. Verify permissions
\dp case_studies