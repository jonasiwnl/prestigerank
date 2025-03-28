/**
 * Schedule a cron job that reads through each company and updates its ranking trajectory (up, down, neutral.)
 *
 * The cron should run once a day at 1am. It may be better to have this run less frequently.
 */
CREATE extension IF NOT EXISTS pg_cron;

GRANT usage ON SCHEMA cron TO "postgres";
GRANT all privileges ON all tables IN SCHEMA cron TO "postgres";

CREATE OR REPLACE FUNCTION update_company_trajectories()
RETURNS void AS $$
BEGIN
    CREATE TEMPORARY TABLE ranking_data AS
    SELECT
        id,
        ROW_NUMBER() OVER (ORDER BY elo DESC) as current_ranking,
        previous_ranking
    FROM companies;

    UPDATE companies c
    SET previous_ranking = r.current_ranking
    FROM ranking_data r
    where c.id = r.id;

    DROP TABLE ranking_data;
END;
$$ LANGUAGE plpgsql;

SELECT cron.schedule('update-company-trajectories', '0 1 * * 0', 'SELECT update_company_trajectories()');

SELECT * FROM cron.job;
