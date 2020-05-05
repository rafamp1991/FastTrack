'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};
