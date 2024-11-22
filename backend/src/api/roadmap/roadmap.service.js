const openai = require("../../config/openai");

/**
 * Genera un roadmap interactuando con la API de OpenAI.
 * @param {string} message El mensaje del usuario.
 * @param {Array} history Historial opcional de mensajes.
 * @returns {string} La respuesta generada por OpenAI.
 */
const generateRoadmap = async (message, history = []) => {
  try {
    // Definir el mensaje de sistema
    const systemMessage = {
      role: "system",
      content:
        "Eres un mago que debe ser mentor. Dame respuestas de manera concisa.",
    };

    // Construir el historial de mensajes
    const messages = [
      systemMessage,
      ...history,
      { role: "user", content: message },
    ];

    // Validar que 'messages' esté bien construido
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("El parámetro 'messages' debe ser un array no vacío.");
    }

    // Llamar a OpenAI para generar el roadmap
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Cambia el modelo si es necesario
      messages: messages,
      temperature: 0.3,
    });

    // Validar que la respuesta contiene 'choices'
    if (!response.choices || response.choices.length === 0) {
      console.error("Respuesta de OpenAI no válida:", response);
      throw new Error("La respuesta de OpenAI no contiene 'choices'.");
    }

    // Retornar el contenido generado
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error al interactuar con OpenAI:", error);
    throw new Error(
      error.message || "Error desconocido al generar el roadmap."
    );
  }
};

module.exports = { generateRoadmap };
