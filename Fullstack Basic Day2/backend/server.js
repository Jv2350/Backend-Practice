import express from "express";

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
