import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { generateToken } from "../middleware/jwt.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !mobile || !password) {
      return res
        .status(400)
        .json({ message: "All felid are required", success: false });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({ massage: "user already exist !", success: false });
    }
    const newUser = await User.create({ name, email, mobile, password });
    if (!newUser) {
      res.status(401).json({ message: "user not created", success: false });
    }
    const token = crypto.randomBytes(32).toString("hex");
    newUser.verificationToken = token;
    await newUser.save();
    //  mail the verification code

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDERMAIL, // sender address
      to: newUser.email, // list of receivers
      subject: "Please verify your account", // Subject line
      // text: `for verification please click on this link ${process.env.BASE_URL}/user/verify/${newUser.verificationToken}`, // plain text body
      html: `<a href='${process.env.BASE_URL}/user/verify/${token}' style=" background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px; border-radius:10px; margin: 0 auto">Click to verify</a>
  <p>If button not working click on this link <a href='${process.env.BASE_URL}/user/verify/${token}'>${process.env.BASE_URL}/user/verify/${token}</a></p>`,
    };
    // async..await is not allowed in global scope, must use a wrapper

    await transporter.sendMail(mailOption);

    return res.json(newUser).status(200);
  } catch (e) {
    res
      .status(501)
      .json({ success: false, message: "Internal server error !", data: e });
  }
};
const verifyUser = async (req, res) => {
  try {
    const { token } = req.params;
    if (!token) {
      return res.status(401).json({ message: "token not found" });
    }
    console.log(token);

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(401).json({ message: "invalid token" });
    }
    console.log(user);

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(201).json({ message: "user verified successfully" });
  } catch (error) {
    return res.status(501).json({ message: "internal server error", error });
  }
};
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "all filed required", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "user not found", success: false });
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken({ email: user.email, id: user._id });

      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 5,
      });
      return res.status(201).json({ message: "login success", success: false });
    }
    return res
      .status(401)
      .json({ message: "credential not match", success: false });
  } catch (error) {
    res.status(501).json({ message: "Internal server error!" });
  }
};
export { registerUser, verifyUser, userLogin };
