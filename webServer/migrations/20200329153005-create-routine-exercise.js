'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('routine_exercise', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      routine_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'routine', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      exercise_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'exercise', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      time_for_senior: {
        type: Sequelize.INTEGER
      },
      time_for_junior: {
        type: Sequelize.INTEGER
      },
      sets_for_senior: {
        type: Sequelize.INTEGER
      },
      sets_for_junior: {
        type: Sequelize.INTEGER
      },
      count_for_senior: {
        type: Sequelize.INTEGER
      },
      count_for_junior: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('routine_exercise');
  }
};