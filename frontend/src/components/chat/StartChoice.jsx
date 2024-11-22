// src/components/Chat/StartChoice.jsx
const StartChoice = ({ onChoice }) => {
  const roles = [
    {
      role: "Escolar",
      description:
        "Te ayudaré a organizar tus estudios y desarrollar hábitos efectivos.",
    },
    {
      role: "Universitario",
      description:
        "Podemos planificar tu aprendizaje y prepararte para tus retos académicos.",
    },
    {
      role: "Profesional",
      description:
        "Te guiaré para adquirir nuevas habilidades y avanzar en tu carrera.",
    },
    {
      role: "Emprendedor",
      description:
        "Te apoyaré en estructurar tus ideas y desarrollar tu negocio.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-xl">¿Cuál es tu perfil?</p>
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
