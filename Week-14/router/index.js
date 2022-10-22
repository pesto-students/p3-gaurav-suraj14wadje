const router = require("express").Router();
const assetController = require("../controller/asset");
const authController = require("../controller/auth");
const cashFlowController = require("../controller/cashFlow");
const { auth } = require("../middleware/auth");

router.use("/auth", authController);
router.use("/asset", auth, assetController);
router.use("/cash-flow", auth, cashFlowController);
module.exports = router;
