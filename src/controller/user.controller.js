import mongoose from "mongoose";
import User from "../models/user.model.js";
import userValidation from "../validation/userValidation.js";
export const SingUpHandler = async (req, res) => {
  try {
    await userValidation.validateAsync(req.body);
    const user = await User(req.body);
    await user.save();
    if (user) {
      res.status(200).json({ message: "successfully register" });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};
