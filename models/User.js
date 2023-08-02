module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {});

  // put associations here
  User.associate = (models) => {};
  return User;
};
