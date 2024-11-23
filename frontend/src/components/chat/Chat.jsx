import { useState } from "react";
import SystemMessage from "./SystemMessage";
import StartChoice from "./StartChoice";
import UserMessage from "./UserMessage";
import FormUser from "./FormUser";
import LoadSpinner from "../ui/LoadSpinner";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentSection, setCurrentSection] = useState("AS_IS");
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserChoice = (role) => {
    setSelectedRole(role);
    setMessages((prev) => [
      ...prev,
      { type: "user", content: `Soy ${role}.` },
      {
        type: "system",
        content:
          "¡Entendido! Para conjurar mis hechizos y poder guiarte, debes proporcionarme esta información.",
      },
    ]);
  };

  const handleFormSubmit = async (formData) => {
    setShowForm(false);
    setIsLoading(true);

    const userMessage = `Formulario completado con los siguientes campos:\n${Object.entries(
      formData
    )
      .map(
        ([field, value]) =>
          `- ${field.replace(/([A-Z])/g, " $1")}: ${value || "Sin respuesta"}`
      )
      .join("\n")}`;

    // Generar el prompt para el modelo
    const prompt =
      currentSection === "AS_IS"
        ? `
        Estoy ayudando a un profesional que tiene el siguiente perfil:
        - Lugar de residencia: ${formData.residence}.
        - Obstáculos actuales: ${formData.currentObstacles}.
        - Intereses personales: ${formData.personalInterests}.
        - Perfil de LinkedIn: ${
          formData.linkedin instanceof File
            ? formData.linkedin.name
            : formData.linkedin
            ? "Texto extraído del PDF"
            : "No proporcionado"
        }.

        Sugiere un TO BE (metas futuras) que este profesional debería plantearse para su carrera.
        Además, busca ejemplos de profesionales similares que hayan logrado un gran éxito y explica cómo lo hicieron.
      `
        : `
        Con base en el perfil inicial, el profesional busca alcanzar los siguientes objetivos:
        - Metas futuras: ${formData.futureGoals}.
        - Recursos disponibles: ${formData.resources}.
        - Limitaciones actuales: ${formData.currentLimitations}.

        Sugiere pasos concretos para lograr estos objetivos, considerando ejemplos exitosos y estrategias relevantes.
      `;

    // Simular una llamada a la API para obtener el resultado del prompt
    try {
      setMessages((prev) => [...prev, { type: "user", content: userMessage }]);

      const response = await fetch("http://localhost:5000/api/tobe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const result = await response.json();

      console.log(result.message);

      setMessages((prev) => [
        ...prev,
        {
          type: "system",
          content: `${result.message}`,
        },
        {
          type: "system",
          content:
            "¡Gracias por completar esta sección! Ahora dime, ¿cuál es la situación deseada? Completa el siguiente formulario para definir tus metas futuras (TO_BE).",
        },
      ]);

      setCurrentSection("TO_BE");
      setShowForm(true);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "system",
          content:
            "Hubo un problema al procesar tu información. Revisa tu conexión o inténtalo más tarde.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-8 flex flex-col min-h-screen bg-gradient-to-b from-primary to-secondary p-4 text-white font-nunito max-w-md mx-auto">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) =>
          msg.type === "system" ? (
            <SystemMessage key={index} content={msg.content} />
          ) : (
            <UserMessage key={index} content={msg.content} />
          )
        )}
        {!selectedRole && <StartChoice onChoice={handleUserChoice} />}
        {selectedRole && showForm && (
          <FormUser
            role={selectedRole}
            section={currentSection}
            onSubmit={(formData) => {
              handleFormSubmit(formData);
            }}
          />
        )}
        {isLoading && <LoadSpinner />}
      </div>
    </div>
  );
};

export default Chat;
