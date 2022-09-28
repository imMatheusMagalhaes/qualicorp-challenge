require("dotenv").config();
const express = require("express");
const neo4j = require("neo4j-driver");

const app = express();
const port = 8888;
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);
const session = driver.session();
app.get("/", (_, res) => res.status(404).send("Sorry, cant find that"));
app.listen(port, () => console.log(`runinng on ${port}`));
module.exports = session;
