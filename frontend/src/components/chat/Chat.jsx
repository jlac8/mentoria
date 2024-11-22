// src/components/Chat/Chat.jsx
import { useState } from "react";
import SystemMessage from "./SystemMessage";
import UserMessage from "./UserMessage";
import StartChoice from "./StartChoice";
import FormUser from "./FormUser";
import LoadSpinner from "../ui/LoadSpinner";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserChoice = (choice) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", content: `Soy ${choice}.` },
    ]);

    setIsLoading(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "system",
          content: "¡Gracias! Vamos a personalizar tu experiencia.",
        },
      ]);
      setShowForm(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleFormSubmit = (formData) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        content: `Formulario completado: ${JSON.stringify(formData)}`,
      },
      { type: "system", content: "¡Perfecto! Estamos generando tu roadmap." },
    ]);
    setShowForm(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary to-secondary p-4 text-white font-nunito">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) =>
          msg.type === "system" ? (
            <SystemMessage key={index} content={msg.content} />
          ) : (
            <UserMessage key={index} content={msg.content} />
          )
        )}
        {!showForm && messages.length === 0 && (
          <StartChoice onChoice={handleUserChoice} />
        )}
        {isLoading && <LoadSpinner />}
        {showForm && <FormUser onSubmit={handleFormSubmit} />}
      </div>
    </div>
  );
};

export default Chat;
