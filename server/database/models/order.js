'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    stripeProductId: DataTypes.STRING,
    stripeProductName: DataTypes.STRING,
    stripePaymentId: DataTypes.STRING,
    printfulOrderId: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};