import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Notification = new mongoose.model("Notification", notificationSchema);

export default Notification;
