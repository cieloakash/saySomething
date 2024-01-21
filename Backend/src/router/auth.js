const express = require("express");
const User = require("../modal/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).send("Something Went wrong");
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      res.status(400).message({ message: "Something Went Wrong" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECREAT_KEY, {
      expiresIn: "3d",
    });
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.send({ message: " Login Succesful ,", userId: user._id, token });
  } catch (e) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

module.exports = router;
