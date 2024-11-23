const FormField = ({ label, type, value, onChange, placeholder, info }) => {
  const cleanPDFContent = (text) => {
    return text.replace(/\s+/g, " ").trim();
  };

  const handleFileChange = async (file) => {
    if (file && file.type === "application/pdf") {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("http://localhost:5000/api/pdf", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Error al procesar el archivo en el backend");
        }

        const data = await response.json();
        const cleanedText = cleanPDFContent(data.text); // Limpiar el texto del PDF

        onChange(cleanedText); // Pasa el texto limpio al componente padre
      } catch (error) {
        console.error("Error al enviar el archivo al backend:", error);
        alert("No se pudo procesar el archivo PDF.");
      }
    } else {
      alert("Por favor, sube un archivo PDF válido.");
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-800 font-semibold mb-2">{label}</label>
      {type === "file" ? (
        <>
          <p className="text-gray-600 text-sm mb-2">
            {info || "Sube tu archivo aquí. Asegúrate de que sea un PDF."}
          </p>
          <input
            type="file"
            required
            accept=".pdf"
            onChange={(e) => handleFileChange(e.target.files[0])}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
          />
        </>
      ) : (
        <input
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
        />
      )}
    </div>
  );
};

export default FormField;
