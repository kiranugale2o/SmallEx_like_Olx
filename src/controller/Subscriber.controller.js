import mongoose from "mongoose";
import Subscriber from "../models/subscriber.model.js";
import Notification from "../models/notification.model.js";
import { sendNotification } from "./notification.controller.js";

export const createSubsciber = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const subs = await Subscriber({ userId: id, email });
    await subs.save();
    if (subs) {
      await sendNotificationAfterSubscriber({
        userId: subs.userId,
        content: "Congratulations you are Member Of SmallEx",
      });
      return res.status(200).json({
        status: true,
        message: "Congratulations you are Member Of SmallEx",
      });
    }
  } catch (error) {
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const sendNotificationAfterSubscriber = async (req, res) => {
  const { userId, content } = req;
  const result = await Notification({ userId, content });
  await result.save();
};
