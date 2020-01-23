'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shopping_Centers = sequelize.define('Shopping_Centers', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Shopping_Centers.associate = function(models) {
    // Shopping Center has many assets
    models.Shopping_Centers.hasMany(models.Assets, {
      foreignKey: 'shoppingCenterId',
    });
  };
  return Shopping_Centers;
};
