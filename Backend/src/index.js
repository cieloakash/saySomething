const express = require("express");
const cors = require("cors");
const quesRouter = require("./router/question");
const authRouter = require("./router/auth");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MOONGOOSE_URL)
  .then(() => console.log("succes"))
  .catch((e) => {
    console.log("error", e);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use("/api/auth", authRouter);
app.use("/api", quesRouter);

app.get("/", (req, res) => {
  res.send({ message: "hello" });
});

app.listen(7000, () => {
  console.log("app is up on 7000");
});
