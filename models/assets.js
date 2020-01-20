'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assets = sequelize.define('Assets', {
    name: DataTypes.STRING,
    dimensions: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {});
  Assets.associate = function(models) {
    // associations can be defined here
  };
  return Assets;
};