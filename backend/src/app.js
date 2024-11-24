const configureExpress = require("./config/express");
const routes = require("./routes");

const app = configureExpress();

// Respuesta para la ruta raíz
app.get("/", (req, res) => {
  res.send("El servidor está funcionando correctamente 🚀");
});

// Registrar rutas
app.use(routes);

module.exports = app;
