// Create web server
// 1. Create a web server
// 2. Create a route for get comments
// 3. Create a route for post comments

// 1. Create a web server
const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;

// 2. Create a route for get comments
app.get("/comments", (req, res) => {
  res.send("Get comments");
});

// 3. Create a route for post comments
app.post("/comments", (req, res) => {
  res.send("Post comments");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});