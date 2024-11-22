const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 px-4">
      {/* Frase Motivadora */}
      <div className="text-center mb-6">
        <p className="text-lg font-semibold">
          "El futuro es tuyo, ¡hazlo grande con MentorIA!"
        </p>
      </div>

      {/* Enlaces Rápidos */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
        <a href="/map" className="hover:underline">
          Mapa del Destino
        </a>
        <a href="/courses" className="hover:underline">
          Cursos
        </a>
        <a href="/future" className="hover:underline">
          Mi Perfil
        </a>
        <a href="/notifications" className="hover:underline">
          Notifications
        </a>
      </div>

      {/* Contacto y Soporte */}
      <div className="mt-6 text-center text-sm text-gray-300">
        <p>
          ¿Necesitas ayuda?{" "}
          <a href="mailto:soporte@mentoria.com" className="underline">
            Contáctanos
          </a>
        </p>
        <p className="mt-2">© 2024 MentorIA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
