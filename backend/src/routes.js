const express = require("express");
const { createRoadmap } = require("./api/roadmap/roadmap.controller");

const router = express.Router();

// Ruta para generar roadmaps
router.post("/api/roadmap", createRoadmap);

module.exports = router;
