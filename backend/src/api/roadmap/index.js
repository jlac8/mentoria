const express = require("express");
const { createRoadmap } = require("./roadmap.controller");

const router = express.Router();

// Ruta para generar roadmaps
router.post("/", createRoadmap);

module.exports = router;
