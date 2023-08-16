module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define("OrderProducts", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return OrderProducts;
};
