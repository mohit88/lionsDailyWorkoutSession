'use strict';
module.exports = (sequelize, DataTypes) => {
  const routine = sequelize.define('routine', {
    name: DataTypes.STRING,
    forDate: DataTypes.DATEONLY,
    forDay: {
      type: DataTypes.ENUM,
      values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],  
    },
  }, {
    // for fields to access underscored db columns.
    underscored: true,
    tableName: 'routine',
    timestamps: false,
  });
  routine.associate = function(models) {
    routine.hasMany(models.routineExercise)
    routine.hasMany(models.userRoutine)
  };
  return routine;
};