module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantityInStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  // put associations here
  Product.associate = (models) => {
    Product.belongsToMany(models.Order, {
      through: models.OrderProducts,
      foreignKey: "productId",
      otherKey: "orderId",
      as: "orders",
    });
  };
  return Product;
};
