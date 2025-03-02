const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  title: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Album", AlbumSchema);
