const pdfParse = require("pdf-parse");

// Middleware para manejar la subida del archivo
const multer = require("multer");
const upload = multer(); // Usar almacenamiento en memoria

// Controlador para procesar el archivo PDF
const processPDF = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No se subió ningún archivo." });
    }

    console.log("Archivo recibido:", req.file); // Verificar el archivo recibido

    const pdfBuffer = req.file.buffer; // Buffer del archivo PDF
    const data = await pdfParse(pdfBuffer); // Extraer texto del PDF

    res.json({ text: data.text }); // Enviar el texto extraído al frontend
  } catch (error) {
    console.error("Error procesando el PDF:", error); // Log del error
    res.status(500).json({ error: "Error procesando el archivo PDF." });
  }
};

module.exports = {
  processPDF,
  upload, // Exporta el middleware de subida
};
