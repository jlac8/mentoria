const openai = require("../../config/openai");

/**
 * Genera una respuesta TO BE basada en el prompt enviado.
 * @param {Request} req La solicitud HTTP.
 * @param {Response} res La respuesta HTTP.
 */
const generateTobe = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "El campo 'prompt' es obligatorio." });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4", // Cambia al modelo que prefieras
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const message =
      response.choices[0]?.message?.content ||
      "No se pudo generar una respuesta.";

    res.status(200).json({ success: true, message });
  } catch (error) {
    console.error("Error al interactuar con OpenAI:", error.message);
    res.status(500).json({
      error: "Error al generar la respuesta.",
      details: error.message,
    });
  }
};

module.exports = { generateTobe };
