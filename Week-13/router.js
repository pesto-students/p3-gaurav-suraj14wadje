const {
  multipleCities,
  forecast,
  currentWeather,
  history,
} = require("./controller");

const router = require("express").Router();

router.get("/multiple-city", multipleCities);
router.get("/forecast", forecast);
router.get("/current", currentWeather);
router.get("/history", history);
router.get("/err", async () => {
  throw new Error("hello");
});
module.exports = router;
