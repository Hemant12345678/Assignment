const router = require("express").Router();
const jwt = require("jsonwebtoken");
// Import User model
const User = require("../../models/User");
// --------------------- Register User ----------------------------------------------
router.post("/register", async (req, res, next) => {
  const { username, password, dob } = req.body;
  // Checking for required fields
  if (!username) return res.status(400).send("Username is required!!!");
  if (!password) return res.status(400).send("Password is required!!!");
  if (!dob) return res.status(400).send("DOB is required!!!");
  // Check if the user is already in the database
  const user = await User.findOne({ username: username });
  if (user) return res.status(400).send("Username already in use.");
  // Try to create new user
  try {
    // Here i am saving plain password but we can use bcryptjs or other library to hash password
    const user = new User({ username, password, dob });
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});
// --------------------- Login User ----------------------------------------------
router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  // Checking for required fields
  if (!username) return res.status(400).send("Username is required!!!");
  if (!password) return res.status(400).send("Password is required!!!");
  // Check if the user is in the database
  const user = await User.findOne({ username: username });
  if (!user) return res.status(400).send("User not found!");
  // Check if Password is Correct
  // Here i am check plain password but we can use bcryptjs or other library to check hashed password
  if (user.password !== password)
    return res.status(400).send("Invalid Password!");
  // Create and assign token
  const token = jwt.sign(user.id, "Token-Secret");
  res.header("auth-token", token).send(token);
});

module.exports = router;
