import SystemMessage from "./SystemMessage";

const StartChoice = ({ onChoice }) => {
  const roles = [
    {
      role: "Escolar",
      description:
        "¿Qué carrera debería estudiar? ¿Cómo se logra el éxito estudiando esa carrera? ",
    },
    {
      role: "Universitario",
      description:
        "¿Qué especialización se ajusta más a mi perfil? ¿Cómo lograrla efectivamente?",
    },
    {
      role: "Profesional",
      description:
        "¿Qué puesto se adapta mejor a mi perfil? ¿Cómo mejorar mi perfil para alcanzarlo? ",
    },
    {
      role: "Emprendedor",
      description:
        "¿Qué negocio debería iniciar y qué pasos seguir? ¿Cómo llevarlo al siguiente nivel?",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-4">
      <SystemMessage content="¡Excelente! Para asistirte en tu travesía, necesito saber en qué etapa de tu vida te encuentras." />

      {roles.map(({ role, description }) => (
        <button
          key={role}
          className="bg-white text-primary font-semibold py-2 px-6 rounded-lg shadow-md mb-4 hover:bg-gray-100 transition duration-300 text-left w-full max-w-md"
          onClick={() => onChoice(role)}
        >
          <div>
            <p className="text-sm text-gray-600">{`Soy ${role}`}</p>
            <p className="text-lg font-bold">{description}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default StartChoice;
