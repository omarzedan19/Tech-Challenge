const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  url: String,
  albumId: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
});

module.exports = mongoose.model("Image", ImageSchema);
