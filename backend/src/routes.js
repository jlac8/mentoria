const express = require("express");
const router = express.Router();

const { createRoadmap } = require("./api/roadmap/roadmap.controller");
const { generateTobe } = require("./api/tobe/tobe.controller");
const { processPDF, upload } = require("./api/pdf/pdf.controller"); // Importar el controlador

// Ruta para generar roadmaps
router.post("/api/roadmap", createRoadmap);
router.post("/api/tobe", generateTobe);
router.post("/api/pdf", upload.single("file"), processPDF);

module.exports = router;
