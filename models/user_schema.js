const mongoose = require("../config/dbconfig");
const schema = new mongoose.Schema(
  {
    email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      max:255,
      min:6,
      required: true,
    },
    password: {
      desc: "user password",
      trim: true,
      type: String,
      max:1024,
      min:6,
      required: true,
      select: false,
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      max:224,
      min:6,
      required: true,
    },
    age: {
      max:150,
      min:10,
      default:18,
      desc: "The users's age.",
      type: Number,
    },
    gender: {
      desc: "user gender.",
      trim: true,
      type: String,
      enum: ["Male", "Female", "Others"],
      default: "Others",
      required: true,
    },
    isActive: {
      desc: "is Active.",
      type: Boolean,
      default: true,
      required: true,
    },
    userType: {
      desc: "user roles.",
      trim: true,
      type: String,
      enum: ["Admin", "User"],
      default: "Admin",
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("Users", schema);