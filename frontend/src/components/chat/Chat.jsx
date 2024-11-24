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
          "¡Entendido! Para conjurar mis hechizos y poder guiarte, debes proporcionarme esta información:",
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

    try {
      setMessages((prev) => [...prev, { type: "user", content: userMessage }]);

      const response = await fetch("http://localhost:5000/api/tobe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: selectedRole, // Rol seleccionado (e.g., "profesional")
          section: currentSection, // Sección actual (e.g., "AS_IS" o "TO_BE")
          data: formData, // Datos del formulario
        }),
      });

      const result = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "system",
          content: `${result.message}`,
        },
        {
          type: "system",
          content:
            "¡Gracias por completar esta sección! Ahora dime, ¿cuál es la situación deseada? Completa el siguiente formulario para definir tus metas futuras",
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
