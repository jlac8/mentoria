import { useState } from "react";
import FormField from "./FormField";

const FormUser = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", goal: "" });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto"
    >
      <FormField
        label="Nombre"
        type="text"
        value={formData.name}
        onChange={(value) => handleChange("name", value)}
        placeholder="Ejemplo: Juan Pérez"
      />
      <FormField
        label="Meta"
        type="text"
        value={formData.goal}
        onChange={(value) => handleChange("goal", value)}
        placeholder="Ejemplo: Aprender desarrollo web"
      />
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
