const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("hey its auth routes");
});

module.exports = router;
