require("dotenv").config();
const express = require("express");
require("express-async-errors");
const { PORT } = require("./config");
const router = require("./router");

const server = express();

server.use(express.json());
server.use("/api", router);

server.use((_err, _req, res, _next) => {
  console.error(_err);
  return res.send("Internal Sever Error").status(500);
});
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
