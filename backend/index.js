require("dotenv").config();
const express = require("express");
const app = express();
const port = 8888;

const postRouter = require("./src/routes/post");
app.use(express.json());
app.use("/post", postRouter);
app.get("/", (_, res) => res.status(404).send("Sorry, cant find that"));
app.listen(port, () => console.log(`runinng on ${port}`));
