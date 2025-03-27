import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:4000",
  })
);
const PORT = process.env.PORT || 4000;
dbConnection();

app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(
    `server is running on port number ${PORT} and url is http://localhost:${PORT} `
  );
});
