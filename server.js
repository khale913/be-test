// app.js
const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

require("dotenv").config();

const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Configure Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
