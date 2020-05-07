'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bots', {
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bots');
  }
};
