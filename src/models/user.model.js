import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  profileImg: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  pincode: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  tokens: [],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id, name: this.name },
      process.env.SECERATE_TOKEN_CODE
    );
    this.tokens.push(token);
    await this.save();
    return token;
  } catch (error) {
    return error.message;
  }
};

const User = new mongoose.model("user", userSchema);

export default User;
