require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.get("/greeting", (req, res) => {
  res.status(200).send("<h1>Greetings!!</h1>");
});

app.get("/github", (req, res) => {
  res.status(200).json({
    username: "Jv2350",
    profile: "https://github.com/Jv2350",
    message: "Welcome to my professional GitHub profile!",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
