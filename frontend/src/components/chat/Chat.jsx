import { useState } from "react";
import SystemMessage from "./SystemMessage";
import UserMessage from "./UserMessage";
import StartChoice from "./StartChoice";
import FormUser from "./FormUser";
import LoadSpinner from "../ui/LoadSpinner";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentSection, setCurrentSection] = useState("AS_IS"); // AS_IS o TO_BE
  const [isLoading, setIsLoading] = useState(false);

  const handleUserChoice = (role) => {
    setSelectedRole(role);
    setMessages((prev) => [
      ...prev,
      { type: "user", content: `Soy ${role}.` },
      {
        type: "system",
        content: `¡Entendido! Vamos a trabajar en tu estado actual (${role}).`,
      },
    ]);
  };

  const handleFormSubmit = async (formData) => {
    // Armar el prompt con los datos del formulario
    const prompt = `
      Estoy ayudando a un profesional que tiene el siguiente perfil:
      - Lugar de residencia: ${formData.residence}.
      - Obstáculos actuales: ${formData.currentObstacles}.
      - Intereses personales: ${formData.personalInterests}.
      - Perfil de LinkedIn: ${
        formData.linkedin instanceof File
          ? formData.linkedin.name
          : "No proporcionado"
      }.

      Sugiere un TO BE (metas futuras) que este profesional debería plantearse para su carrera.
      Además, busca ejemplos de profesionales similares que hayan logrado un gran éxito y explica cómo lo hicieron.
    `;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        content: `Formulario completado: ${JSON.stringify(formData)}`,
      },
      {
        type: "system",
        content: "Procesando tu información...",
      },
    ]);

    try {
      // Simular una llamada a la API o conectarla directamente
      const response = await fetch("http://localhost:5000/api/tobe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const result = await response.json();

      if (result.success) {
        setMessages((prev) => [
          ...prev,
          {
            type: "system",
            content: result.message,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            type: "system",
            content:
              "Ocurrió un error al generar tu respuesta. Intenta de nuevo.",
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "system",
          content:
            "Hubo un problema al procesar tu información. Revisa tu conexión o inténtalo más tarde.",
        },
      ]);
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
        {selectedRole && (
          <FormUser
            role={selectedRole}
            section={currentSection}
            onSubmit={handleFormSubmit}
          />
        )}
        {isLoading && <LoadSpinner />}
      </div>
    </div>
  );
};

export default Chat;
