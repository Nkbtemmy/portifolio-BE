const mongoose = require("../config/dbconfig");
const schema = new mongoose.Schema(
  {

    sname: {
      desc: "The user's second name.",
      trim: true,
      type: String,
      required: true,
    },
    fname: {
        desc: "The user's first name.",
        trim: true,
        type: String,
        required: true,
    },
    bd: { 
        desc: "The User's birthday",
        type: Date
     },

  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("BirthDays", schema);

