import Sequelize from 'sequelize';
import db from '../database/connection';

const Bot = db.define('bots', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: Sequelize.STRING
  },

  ip_address: {
    type: Sequelize.STRING
  },

  status: {
    type: Sequelize.ENUM('AVAILABLE', 'UNAVAILABLE', 'BUSY'),
    defaultValue: 'AVAILABLE'
  }

});

export default Bot;