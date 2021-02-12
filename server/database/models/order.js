'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderNumber: DataTypes.STRING,
    stripeCheckoutSessionData: DataTypes.JSON,
    printfulOrderData: DataTypes.JSON,
    products: DataTypes.JSON
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};