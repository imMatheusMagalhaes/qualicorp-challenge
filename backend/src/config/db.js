const neo4j = require("neo4j-driver");
const dbDriver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);
module.exports = dbDriver;
