'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    contactNumber: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: DataTypes.STRING,
    role:{
      type: DataTypes.ENUM,
      values: ['Admin', 'Instructor', 'Junior', 'Senior'],  
    }
  }, {
    // for fields to access underscored db columns.
    underscored: true,
    tableName: 'user',
    timestamps: true,
  });
  user.associate = function(models) {
  };
  return user;
};