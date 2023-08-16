const { User } = require("../models");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    res.status(201).send({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).send({ error: "Registration failed", details: error });
  }
};
