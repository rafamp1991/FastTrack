const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'task_manager',
  port: '5432'
});

export default {
  async getBots(req, res) {
    try {
      const response = await pool.query("SELECT * FROM bots ORDER BY id ASC");
      res.status(200).json(response.rows);
    } catch (error) {
      return res.status(500).json({
        message: 'Error 500 - Internal Server Error',
      });
    }
  },

  async getBotsById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const response = await pool.query('SELECT * FROM bots WHERE id = $1', [id]);
      res.status(200).json(response.rows);
    } catch (error) {
      return res.status(500).json({
        message: 'Error 500 - Internal Server Error',
      });
    }
  },

  async create(req, res) {
    try {
      const { name, ip_address, status } = req.body
      const response = await pool.query(
        "INSERT INTO bots (name, ip_address, status) VALUES ($1, $2, $3)",
        [ name, ip_address, status ]
      );
      
      return res.status(201).json({
        message: 'Bot Added successfully',
        bot: {
            name, ip_address, status
        }
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error 500 - Internal Server Error',
      });
    }
  },

  async update(req, res) {
    try {
      const id = parseInt(req.params.id);
      const { name, ip_address, status } = req.body

      const response = await pool.query("UPDATE bots SET name = $1, ip_address = $2, status = $3 WHERE id = $4",
        [ name, ip_address, status, id ]
      );
      res.status(200).json({
        message: 'Bot Updated successfully',
        bot: {
            name, ip_address, status
        }
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error 500 - Internal Server Error',
      });
    }
  },

  async delete(req, res) {
    try {
      const id = parseInt(req.params.id);
      await pool.query("DELETE FROM bots where id = $1", 
        [ id ]
      );
      res.status(200).json('Bot deleted Successfully');
    } catch (error) {
      return res.status(500).json({
        message: 'Error 500 - Internal Server Error',
      });
    }
  }
}