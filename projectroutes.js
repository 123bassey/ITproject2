const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

// Add project
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    const project = new Project({ title, description });
    await project.save();
    res.status(201).json({ msg: "Project added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
