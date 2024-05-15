import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    country: {
        type: String,
        required: false,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    verified: {
      type: Boolean,
      default: false
    },
    verificationToken: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;