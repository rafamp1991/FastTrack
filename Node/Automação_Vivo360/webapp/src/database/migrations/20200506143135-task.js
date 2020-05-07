'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.ENUM('WAITING', 'RUNNING', 'COMPLETE'),
        defaultValue: 'WAITING'
      },
    
      attachment: {
        type: Sequelize.STRING
      },
    
      created_at: {
        type: Sequelize.DATE
      }
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};
