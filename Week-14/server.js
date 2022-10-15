require("dotenv").config();
const express = require("express");
const { PORT } = require("./config");
const router = require("./router");

const server = express();

server.use(express.json());
server.use("/api", router);
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
