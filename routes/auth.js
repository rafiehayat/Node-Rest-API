const router = require("express").Router();
const User = require("../models/User");

router.get("/register", async (req, res, next) => {
  try {
    const user = await new User({
      username: "Hayat",
      email: "hayat@gmail.com",
      password: "123456",
    });

    await user.save();
    res.send("ok");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
