const { string } = require("joi");
const mongoose = require("../config/dbconfig");
const schema = new mongoose.Schema(
  {

    surname: {
      desc: "The user's second name.",
      trim: true,
      type: String,
      required: true,
    },
    firstname: {
        desc: "The user's first name.",
        trim: true,
        type: String,
        required: true,
    },
    gender: {
      desc: "user gender.",
      trim: true,
      type: String,
      default: "Others",
      required: true,
    },
    birthdate: { 
      type: Date,
     },
     email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    phone:{
      type: String
    }

  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("BirthDays", schema);

