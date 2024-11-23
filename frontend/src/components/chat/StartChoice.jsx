import SystemMessage from "./SystemMessage";

const StartChoice = ({ onChoice }) => {
  const roles = [
    {
      role: "Escolar",
      description:
        "Estudiantes de primaria y secundaria que desean descubrir sus interes y explorar posibles carreras a estudiar. Incluye orientación vocacional",
    },
    {
      role: "Universitario",
      description:
        "Estudiantes de educación superior, que desean seleccionar y adquirir conocimientos especializados, y ganar experiencia práctica. Incluye revisión de CV",
    },
    {
      role: "Profesional",
      description:
        "Personas insertadas en el mercado laboral que desean avanzar en su carrera y alcanzar sus metas profesionales. Incluye revisión de Linkedin.",
    },
    {
      role: "Emprendedor",
      description:
        "Personas que desean iniciar o mejorar su propio negocio, obtener financiamiento y expandir su red de contactos. Incluye revisión de las rrss de tu emprendimiento.",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-4">
      {/* Mensaje del Sistema */}
      <SystemMessage content="¡Excelente! Para asistirte en tu travesía, necesito saber en qué etapa de tu vida te encuentras." />

      {/* Botones para Seleccionar el Rol */}
      {roles.map(({ role, description }) => (
        <button
          key={role}
          className="bg-white text-primary font-semibold py-2 px-6 rounded-lg shadow-md mb-4 hover:bg-gray-100 transition duration-300 text-left w-full max-w-md"
          onClick={() => onChoice(role)}
        >
          <div>
            <p className="text-lg font-bold">{`Soy ${role}`}</p>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default StartChoice;
