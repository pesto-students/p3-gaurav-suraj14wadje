const router = require("express").Router();
const authController = require("../controller/auth");

router.use("/auth", authController);

module.exports = router;
