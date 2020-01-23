'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assets = sequelize.define('Assets', {
    name: DataTypes.STRING,
    dimensions: DataTypes.STRING,
    location: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    shoppingCenterId: DataTypes.INTEGER
  }, {});

  Assets.associate = function(models) {
    // Assets belong to Shopping Center
    models.Assets.belongsTo(models.Shopping_Centers, {
      foreignKey: 'shoppingCenterId',
    });
  };
  return Assets;
};