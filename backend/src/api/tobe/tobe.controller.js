const openai = require("../../config/openai");
/**
 * Genera el mensaje del sistema dinámico combinando una parte común y otra específica.
 * @param {string} role - El rol del usuario (e.g., "profesional", "emprendedor").
 * @param {string} section - La sección del formulario (e.g., "AS_IS", "TO_BE").
 * @returns {string} El mensaje del sistema generado.
 */
const generateSystemMessage = (role, section) => {
  const commonMessage = `
    Actúa como un mago y mentor que ayuda a su aprendiz de forma precisa y concisa. Usa emojis propios de un mago, se motivador, pero mantén profesionalismo en el contenido. No saludes ni te despidas, pues están conversando.
  `;

  const specificMessages = {
    Escolar: {
      AS_IS: `
        Tu tarea es analizar el perfil actual de un profesional. Identifica sus fortalezas y áreas de mejora, y proporciónale motivación para alcanzar su máximo potencial.
      `,
      TO_BE: `
        Tu tarea es ayudar a un profesional a alcanzar sus objetivos futuros. Usa su perfil inicial como referencia para proponer pasos concretos y metas alcanzables.
      `,
    },
    Universitario: {
      AS_IS: `
        Tu tarea es analizar el perfil actual de un profesional. Identifica sus fortalezas y áreas de mejora, y proporciónale motivación para alcanzar su máximo potencial.
      `,
      TO_BE: `
        Tu tarea es ayudar a un profesional a alcanzar sus objetivos futuros. Usa su perfil inicial como referencia para proponer pasos concretos y metas alcanzables.
      `,
    },
    Profesional: {
      AS_IS: `
        Explica qué puesto que pague más que el actual le recomiendas en base a su perfil. Estos puestos deben ser específicos y deseados por el aprendiz.
      `,
      TO_BE: `
        Menciona cómo debe mejorar su perfil para alcanzar el puesto que mejor se adapta a lo que quiere. Indicale las opciones más efectivas. Debe incluir a qué comunidad debe unirse, el nombre de algún proyecto que debe hacer y qué cursos permitirían que haga ese proyecto.
      `,
    },
    Emprendedor: {
      AS_IS: `
        Tu tarea es analizar la situación actual de un emprendedor. Proporciona ideas prácticas para comenzar un negocio basado en sus recursos y habilidades.
      `,
      TO_BE: `
        Tu tarea es ayudar a un emprendedor a escalar su negocio. Proporciona estrategias prácticas y motivadoras basadas en su situación actual.
      `,
    },
  };

  const specificMessage = specificMessages[role]?.[section];
  if (!specificMessage) throw new Error("Rol o sección no reconocidos.");

  return `${commonMessage}\n\n${specificMessage}`;
};

/**
 * Genera un prompt dinámico basado en los datos enviados.
 * @param {object} data - Los datos enviados por el frontend.
 * @param {string} section - La sección del formulario (e.g., "AS_IS", "TO_BE").
 * @returns {string} El prompt generado para el usuario.
 */
const generateUserPrompt = (data, section) => {
  if (section === "AS_IS") {
    return `
      Perfil del usuario:
      ${Object.entries(data)
        .map(
          ([key, value]) =>
            `- ${key.replace(/([A-Z])/g, " $1")}: ${
              value || "No proporcionado"
            }`
        )
        .join("\n")}
    `;
  } else if (section === "TO_BE") {
    return `
      Resultado del AS_IS:
      ${data.previousResult || "No proporcionado"}

      Objetivos futuros:
      ${Object.entries(data)
        .filter(
          ([key]) => key !== "previousProfile" && key !== "previousResult"
        )
        .map(
          ([key, value]) =>
            `- ${key.replace(/([A-Z])/g, " $1")}: ${
              value || "No proporcionado"
            }`
        )
        .join("\n")}
    `;
  }
  throw new Error("Sección no reconocida.");
};

/**
 * Genera una respuesta basada en el rol, la sección y los datos del formulario.
 * @param {Request} req La solicitud HTTP.
 * @param {Response} res La respuesta HTTP.
 */
const generateTobe = async (req, res) => {
  const { role, section, data } = req.body;

  // Validar entrada
  if (!role || !section || !data || typeof data !== "object") {
    return res.status(400).json({
      success: false,
      message: "Los campos 'role', 'section' y 'data' son obligatorios.",
    });
  }

  try {
    // Generar mensaje del sistema y prompt del usuario
    const systemMessage = generateSystemMessage(role, section);
    const userPrompt = generateUserPrompt(data, section);

    // Llamar a OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.4,
    });

    // Extraer el mensaje generado
    const message =
      response.choices?.[0]?.message?.content ||
      "No se pudo generar una respuesta válida.";

    res.status(200).json({ success: true, message });
  } catch (error) {
    console.error("Error al interactuar con OpenAI:", error.message);
    res.status(500).json({
      success: false,
      message: "Error al generar la respuesta.",
      details: error.message,
    });
  }
};

module.exports = { generateTobe };
