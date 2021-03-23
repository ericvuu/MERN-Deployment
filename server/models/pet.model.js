const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    },

    type: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    },

    description: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    },
    skill_1: {
      type: String,
    },
    skill_2: {
      type: String,
    },
    skill_3: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Pet = mongoose.model("Pet", PetSchema);
