module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    // You can add more attributes if required
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
    Order.belongsToMany(models.Product, {
      through: models.OrderProducts,
      foreignKey: "orderId",
      otherKey: "productId",
      as: "products",
    });
  };

  return Order;
};
