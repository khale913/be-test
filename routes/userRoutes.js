const express = require("express");

// create router object
const router = express.Router();

// import user controller
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");