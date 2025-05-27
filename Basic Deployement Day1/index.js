require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/greeting", (req, res) => {
  res.send("<h1>Greetings!!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running of port http://localhost:${PORT}`);
});
