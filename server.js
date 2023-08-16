// app.js
const express = require("express");
const bodyParser = require("body-parser");
// const { Sequelize } = require("sequelize");
const { sequelize } = require("./models");

const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.use("/users", userRoutes);



//

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    // return sequelize.sync({ force: true });
    return sequelize.sync();
  })
  .then(() => {
    console.log(`Database & tables created!`);
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Define a simple route
app.get("/", (req, res) => {
  console.log(token);
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
