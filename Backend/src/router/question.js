const Questions = require("../modal/question");
const verifyToken = require("../middleware/auth");
const express = require("express");
const { updateSearchIndex } = require("../modal/user");

const router = new express.Router();

router.post("/q/:id", async (req, res) => {
  try {
    const id = req.params.id.toString();
    const question = new Questions({ ...req.body, userId: id });
    await question.save();
    res.send({ message: "succesfully saved" });
  } catch (e) {
    res.status(400).send({ message: " Something went wrong" });
  }
});

router.get("/q/:id", async (req, res) => {
  try {
    const questions = await Questions.find({
      userId: req.params.id.toString(),
    });

    if (!questions) {
      res.status(404).send({ message: "No questions found" });
    }

    res.send(questions);
  } catch (e) {
    res.status(400).send("SomeThing Went wrong");
  }
});

router.put("/q/:id", verifyToken, async (req, res) => {
  try {
    const question = await Questions.findOne({
      userId: req.userId,
      _id: req.params.id,
    });
    if (!question) {
      res.status(404).send("Question not found");
    }

    const updatedQuestion = await question.update({ answer: req.body.answer });
    res.send({ updatedQuestion });
  } catch (e) {
    res.status(500).send({ message: " something went wrong" });
  }
});

module.exports = router;
