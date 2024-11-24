const OpenAI = require("openai");

// Verificar que la clave de API esté configurada
if (!process.env.OPENAI_API_KEY) {
  throw new Error(
    "La clave de API de OpenAI no está configurada en el archivo .env"
  );
}

// Inicializar el cliente de OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  // Puedes agregar otras configuraciones aquí si es necesario
});

module.exports = openai;
