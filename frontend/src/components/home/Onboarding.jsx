import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="text-center text-white px-4 font-nunito max-w-md mx-auto">
      <div className="text-6xl font-sans mb-4">🧙‍♂️</div>

      <h1 className="text-6xl font-bold mb-6">MentorIA</h1>
      <p className="text-xl mb-6 font-bold">¡Saludos, joven aventurero!</p>
      <p className="text-xl mb-6">
        Soy tu guía místico en este viaje hacia la realización de tus más
        profundos deseos y el máximo esplendor de tu potencial. ¿Estás listo
        para adentrarte en este sendero mágico?
      </p>
      <Link
        to="/chat"
        className="btn-primary bg-white text-primary font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
      >
        ¡Sí, estoy listo!
      </Link>
    </div>
  );
};

export default Onboarding;
