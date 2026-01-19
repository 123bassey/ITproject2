const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");

// Routes
const authRoutes = require("./routes/authRoutes");
const awarenessRoutes = require("./routes/awarenessRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/awareness", awarenessRoutes);
app.use("/api/projects", projectRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
