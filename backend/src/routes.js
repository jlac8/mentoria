const express = require("express");
const { createRoadmap } = require("./api/roadmap/roadmap.controller");
const { generateTobe } = require("./api/tobe/tobe.controller");

const router = express.Router();

// Ruta para generar roadmaps
router.post("/api/roadmap", createRoadmap);
router.post("/api/tobe", generateTobe);

module.exports = router;
