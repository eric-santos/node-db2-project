const express = require("express");
const carRouter = require("../router/carRouter");

const db = require("../data/db-config.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world!");
});

server.use("/cars", carRouter);

module.exports = server;
