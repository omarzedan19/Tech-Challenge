const express = require("express");
const Image = require("../models/Image");
const router = express.Router();

// Get all images
router.get("/", async (req, res) => {
  const images = await Image.find().populate("albumId");
  res.json(images);
});

// Add an image
router.post("/", async (req, res) => {
  const newImage = new Image(req.body);
  await newImage.save();
  res.json(newImage);
});

// Delete an image
router.delete("/:id", async (req, res) => {
  await Image.findByIdAndDelete(req.params.id);
  res.json({ message: "Image deleted" });
});

module.exports = router;
