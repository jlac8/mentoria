import { useState } from "react";
import FormField from "./FormField";
import { questionsByRole } from "../../data/questions"; // Preguntas dinámicas

const FormUser = ({ onSubmit, role, section }) => {
  const questions = questionsByRole[role][section]; // Obtener preguntas dinámicas

  const [formData, setFormData] = useState(
    questions.reduce((acc, question) => {
      acc[question.field] = question.type === "file" ? "" : ""; // Inicializar con cadena vacía
      return acc;
    }, {})
  );

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pasar los datos al componente padre
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto"
    >
      {questions.map(({ field, label, type, placeholder, info }) => (
        <FormField
          key={field}
          label={label}
          type={type}
          value={formData[field]}
          onChange={(value) => handleChange(field, value)}
          placeholder={placeholder}
          info={info}
        />
      ))}
      <button
        type="submit"
        className="bg-primary text-white font-semibold py-2 px-4 rounded-full w-full mt-4"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormUser;
