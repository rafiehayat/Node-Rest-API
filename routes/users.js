const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send("hey its user routes");
});

module.exports = router;
