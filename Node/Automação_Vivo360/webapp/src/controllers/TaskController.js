const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'task_manager',
  port: '5432'
});

export default {
  async getTasks(req, res) {
    try {
      const response = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
      res.status(200).json(response.rows);
    } catch (error) {
      return res.status(500).json({
        message: 'Error 500 - Internal Server Error',
      });
    }
  },

  async getTasksById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const response = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
      res.status(200).json(response.rows);
    } catch (error) {
      return res.status(500).json({
        message: 'Error 500 - Internal Server Error',
      });
    }
  },

  async create(req, res) {
    try {
      console.log(req.body);
      const { system, description, status, attachment } = req.body
      const created_at = new Date().toLocaleString();
      const response = await pool.query(
        "INSERT INTO tasks (system, description, status, attachment, created_at) VALUES ($1, $2, $3, $4, $5)",
        [ system, description, status, attachment, created_at ]
      );
      
      return res.status(201).json({
        message: 'Task Added successfully',
        task: {
            system, description, status, attachment, created_at
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
      const { system, description, status, attachment, created_at } = req.body

      const response = await pool.query("UPDATE tasks SET system = $1, description = $2, status = $3, attachment = $4, created_at = $5 WHERE id = $6",
        [ system, description, status, attachment, created_at, id ]
      );
      res.status(200).json({
        message: 'Task Updated successfully',
        task: {
            system, description, status, attachment, created_at
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
      await pool.query("DELETE FROM tasks where id = $1", 
        [ id ]
      );
      res.status(200).json('Task deleted Successfully');
    } catch (error) {
      return res.status(500).json({
        message: 'Error 500 - Internal Server Error',
      });
    }
  }
}