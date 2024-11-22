import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center text-white px-4 font-nunito">
      <div className="text-6xl font-sans mb-4">🧙‍♂️</div>

      <h1 className="text-6xl font-bold mb-6">MentorIA</h1>
      <p className="text-xl mb-6">
        ¡Bienvenido a Mentoria! Estoy aquí para guiarte en tu camino de
        aprendizaje.
      </p>
      <Button
        text="Comenzar"
        onClick={() => {
          navigate("/chat");
        }}
      />
    </div>
  );
};

export default Onboarding;
