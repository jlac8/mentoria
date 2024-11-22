import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Onboarding = () => {
  const navigate = useNavigate();

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
      <Button
        text="¡Sí, estoy listo!"
        onClick={() => {
          navigate("/chat");
        }}
      />
    </div>
  );
};

export default Onboarding;
