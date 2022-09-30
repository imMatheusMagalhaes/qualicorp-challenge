require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8888;

const postRouter = require("./src/routes/post");
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});
app.use(express.json());
app.use("/post", postRouter);
app.get("/", (_, res) => res.status(404).send("Sorry, cant find that"));
app.listen(port, () => console.log(`runinng on ${port}`));
