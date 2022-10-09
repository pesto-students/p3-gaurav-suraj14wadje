const express = require("express");
require("express-async-errors");
const { PORT } = require("./config");
const router = require("./router");

const app = express();

app.use(express.json());

app.use("/api", router);
app.use((err, _req, res, _next) => {
  res.status(500);
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
