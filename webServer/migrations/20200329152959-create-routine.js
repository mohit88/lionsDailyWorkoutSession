'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('routine', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      forDate: {
        type: Sequelize.DATEONLY
      },
      forDay: {
        type: Sequelize.ENUM,
        values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],  
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('routine');
  }
};