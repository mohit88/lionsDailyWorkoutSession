'use strict';
module.exports = (sequelize, DataTypes) => {
  const userRoutine = sequelize.define('userRoutine', {
    routineId: DataTypes.INTEGER,
    userContactNumber: DataTypes.STRING,
  }, {
    // for fields to access underscored db columns.
    underscored: true,
    tableName: 'user_routine',
    timestamps: false,
  });
  userRoutine.associate = function(models) {
    // associations can be defined here
  };
  return userRoutine;
};