const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
