import bcrypt from "bcryptjs";
import { User } from "../models/auth.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save()
    res.status(200).json({message:"User created succeessfully"})
  } catch (error) {''
    next(errorHandler(500,"Error from server!"))
  }
};
