import express from "express";
import {
  registerUser,
  verifyUser,
  userLogin,
} from "../controller/user.controller.js";

const userRoute = express.Router();
userRoute.get("/", (req, res) => {
  res.send("hello this is user");
});

userRoute.post("/register", registerUser);
userRoute.get("/verify/:token", verifyUser);
userRoute.post("/login", userLogin);

export default userRoute;
