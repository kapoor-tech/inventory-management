'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shopping_Centers = sequelize.define('Shopping_Centers', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Shopping_Centers.associate = function(models) {
    // associations can be defined here
  };
  return Shopping_Centers;
};
