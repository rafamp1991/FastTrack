const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'task_manager',
  port: '5432'
});

const request = require('request');

var CronJob = require('cron').CronJob;
var job = new CronJob('*/10 * * * * *', async function() {
    /* console.log('You will see this message every 10 second'); */

    const response = await pool.query("SELECT t.id as task_id, t.system, t.description,"+
    "t.status as task_status, t.attachment, t.created_at, b.id as bot_id, b.name, b.ip_address, "+
    "b.status as bot_status FROM tasks as t INNER JOIN bots b "+
    "ON (t.status = 'WAITING' and b.status = 'AVAILABLE') ORDER BY t.created_at ASC");               
    
    console.log(response.rows[0]);
    
    request.post(`${response.rows[0].ip_address}/tasks`, {
            system: response.rows[0].system,
            description: response.rows[0].description,
            task_status: response.rows[0].task_status,
            attachment: response.rows[0].attachment,
            created_at: response.rows[0].created_at
      });
});
job.start();