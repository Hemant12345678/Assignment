const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 4000;
// --------------------------------------------------------------------------------------------------------------
// Connection to DB
mongoose.connect(
  "mongodb://localhost:27017/userblog",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);
// --------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------
// Middleware
app.use(express.json());
// CORS Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,auth-token"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE,PATCH"
  );
  next();
});
// Route Middleware
app.use(require("./routes"));
// --------------------------------------------------------------------------------------------------------------
app.listen(PORT, () => console.log(`Server Up and Running... On Port:${PORT}`));
// --------------------------------------------------------------------------------------------------------------
