const path = require("path");
const express = require("express");
const app = express();

const DIR = "build";

// Allow access to build directory
app.use(express.static(DIR));

// Redirect all routes to dist/index.html and then allow react-router to handle it
app.get("/*", (req, res) => {
  const index = path.resolve(__dirname, DIR, "index.html");
  res.sendFile(index);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// Listen to the specified port
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
