const { generateRoadmap } = require("./roadmap.service");

/**
 * Controlador para manejar la generación del roadmap.
 * @param {Request} req La solicitud HTTP.
 * @param {Response} res La respuesta HTTP.
 */
const createRoadmap = async (req, res) => {
  try {
    const { message, history } = req.body;

    // Validar que el campo 'message' esté presente
    if (!message || message.trim().length === 0) {
      return res
        .status(400)
        .json({ error: "El campo 'message' es obligatorio." });
    }

    // Generar el roadmap utilizando el servicio
    const roadmap = await generateRoadmap(message, history || []);

    // Devolver el roadmap generado
    res.status(201).json({ success: true, roadmap });
  } catch (error) {
    console.error("Error en el controlador de roadmaps:", error);
    res.status(500).json({
      error: "No se pudo generar el roadmap.",
      details: error.message || "Error desconocido.",
    });
  }
};

module.exports = { createRoadmap };
