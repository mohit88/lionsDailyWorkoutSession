'use strict';
module.exports = (sequelize, DataTypes) => {
  const routineExercise = sequelize.define('routineExercise', {
    routineId: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER,
    timeForSenior: DataTypes.INTEGER,
    timeForJunior: DataTypes.INTEGER,
    setsForSenior: DataTypes.INTEGER,
    setsForJunior: DataTypes.INTEGER,
    countForSenior: DataTypes.INTEGER,
    countForJunior: DataTypes.INTEGER
  }, {
    // for fields to access underscored db columns.
    underscored: true,
    tableName: 'routine',
    timestamps: false,    
  });
  routineExercise.associate = function(models) {
    // associations can be defined here
  };
  return routineExercise;
};