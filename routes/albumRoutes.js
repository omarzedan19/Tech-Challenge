const express = require("express");
const Album = require("../models/Album");
const router = express.Router();

// Get all albums
router.get("/", async (req, res) => {
  const albums = await Album.find().populate("userId");
  res.json(albums);
});

// Add an album
router.post("/", async (req, res) => {
  const newAlbum = new Album(req.body);
  await newAlbum.save();
  res.json(newAlbum);
});

// Delete an album
router.delete("/:id", async (req, res) => {
  await Album.findByIdAndDelete(req.params.id);
  res.json({ message: "Album deleted" });
});

module.exports = router;
