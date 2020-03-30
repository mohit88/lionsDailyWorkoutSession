'use strict';
module.exports = (sequelize, DataTypes) => {
  const userRoutineExercise = sequelize.define('userRoutineExercise', {
    routineId: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    // for fields to access underscored db columns.
    underscored: true,
    tableName: 'user_routine_exercise',
    timestamps: false,
  });
  userRoutineExercise.associate = function(models) {
    // associations can be defined here
  };
  return userRoutineExercise;
};