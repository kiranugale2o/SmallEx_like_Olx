import mongoose from "mongoose";
import User from "../models/user.model.js";
import userValidation from "../validation/userValidation.js";
import bcrypt from "bcryptjs";

//singup user
export const SingUpHandler = async (req, res) => {
  try {
    await userValidation.validateAsync(req.body);
    const isExit = await User.findOne({ email: req.body.email });
    if (isExit) {
      return res.status(400).json({ message: "this email is already use" });
    }
    const user = await User(req.body);
    await user.save();
    if (user) {
      res.status(200).json({ message: "successfully register" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

//login user

export const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = await user.generateAuthToken();
        return res
          .status(200)
          .json({ message: "login successfull", token: token });
      } else {
        return res.status(400).json({ message: "invalid Password" });
      }
    } else {
      return res.status(400).json({ message: "invalid Email" });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

//update user profile
export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body);
    if (updateUser) {
      return res.status(200).json({ message: "update successfully " });
    } else {
      return res.status(400).json({ message: "user not found " });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};
