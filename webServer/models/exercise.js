'use strict';
module.exports = (sequelize, DataTypes) => {
  const exercise = sequelize.define('exercise', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING
  }, {
    // for fields to access underscored db columns.
    underscored: true,
    tableName: 'exercise',
    timestamps: false,    
  });
  exercise.associate = function(models) {
    // associations can be defined here
  };
  return exercise;
};