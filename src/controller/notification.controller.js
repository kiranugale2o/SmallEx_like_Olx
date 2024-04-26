import mongoose from "mongoose";
import Notification from "../models/notification.model.js";

export const sendNotification = async (req, res) => {
  console.log(req.body);
  try {
    const { userId, content } = req.body;
    const result = await Notification({ userId, content });
    await result.save();
    if (result) {
      return res
        .status(200)
        .json({ status: true, message: "Notification send Successfully !" });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getNotification = async (req, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.find({ userId: id });
    if (notification) {
      return res.status(200).json({ status: true, notification: notification });
    } else {
      return res

        .status(400)
        .json({ status: false, notification: "No Notification " });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};
