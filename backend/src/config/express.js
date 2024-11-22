const express = require("express");
const cors = require("cors");

const configureExpress = () => {
  const app = express();

  // Middleware global
  app.use(cors()); // Habilitar CORS
  app.use(express.json()); // Parsear JSON en las solicitudes

  return app;
};

module.exports = configureExpress;
