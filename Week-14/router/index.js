const router = require("express").Router();
const assetController = require("../controller/asset");
const authController = require("../controller/auth");
const { auth } = require("../middleware/auth");

router.use("/auth", authController);
router.use("/asset", auth, assetController);
module.exports = router;
