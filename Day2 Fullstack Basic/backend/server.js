import express from "express";
import { data } from "./constant/index.js";

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
