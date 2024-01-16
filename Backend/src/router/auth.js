const express = require("express");
const User = require("../modal/user.js");

const router = new express.Router();

router.post("/sign-up", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.send({ message: "User signed up successfully", user: savedUser });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  // Implement login logic here
  try {
    const user = await User.find({ email: res.body.email });
    if (!user) {
      res.status(400).send("Something Went wrong");
    }
  } catch (e) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

module.exports = router;
