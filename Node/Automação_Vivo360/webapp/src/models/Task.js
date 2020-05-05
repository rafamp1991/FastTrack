import Sequelize from 'sequelize';
import db from '../database/connection';

const Task = db.define('tasks', {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },

  system: {
    type: Sequelize.ENUM,
    values: ['Vivo360']
  },

  description: {
    type: Sequelize.STRING
  },

  status: {
    type: Sequelize.ENUM,
    values: ['WAITING, RUNNING, COMPLETE']
  },

  attachment: {
    type: Sequelize.STRING
  },

  created_at: {
    type: Sequelize.DATE
  }

});

export default Task;