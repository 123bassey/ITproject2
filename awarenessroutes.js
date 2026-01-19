const express = require("express");
const Awareness = require("../models/Awareness");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// Middleware to check JWT
const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// Post health awareness (admin only)
router.post("/", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ msg: "Access denied" });
  const { title, content, category } = req.body;

  try {
    const post = new Awareness({ title, content, category, postedBy: req.user.id });
    await post.save();
    res.status(201).json({ msg: "Health awareness posted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all health awareness posts
router.get("/", async (req, res) => {
  try {
    const posts = await Awareness.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
