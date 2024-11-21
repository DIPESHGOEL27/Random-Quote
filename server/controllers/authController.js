const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateToken = require("../utils/generateToken");

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  console.log("Received username:", username);
  console.log("Received password:", password);
  console.log("Env username:", process.env.ADMIN_USERNAME);
  console.log("Env password:", process.env.ADMIN_PASSWORD);

  // Check if username and password match the admin credentials in .env
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Generate a token with admin privileges
    const token = generateToken({ role: "admin" });
    res.json({ token, message: "Admin access granted" });
  } else {
    res.status(401).json({ message: "Invalid admin credentials" });
  }
};
