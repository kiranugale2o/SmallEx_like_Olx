import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

const Subscriber = new mongoose.model("subscriber", subscriberSchema);

export default Subscriber;
