import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import path from 'path'


mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log("Successfully connected to mongodb");
})
.catch((err) => {
  console.log(err);
});

const __dirname = path.resolve()

const app = express();
app.use(express.json());
app.use(cookieParser())

app.listen(3000, () => {
  console.log("Server running...");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

