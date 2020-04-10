const express = require("express");
const accountRouter = require("../router/carRouter");

const db = require("../data/db-config.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});

server.use("/accounts", accountRouter);

module.exports = server;
