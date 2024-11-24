const FormField = ({ label, type, value, onChange, placeholder, info }) => {
  const cleanPDFContent = (text) => {
    // Eliminar líneas que contengan "Page X of Y"
    const withoutPages = text.replace(/Page\s+\d+\s+of\s+\d+/gi, "");

    // Reemplazar múltiples espacios por uno solo y eliminar espacios al inicio y final
    const cleanedText = withoutPages.replace(/\s+/g, " ").trim();

    return cleanedText;
  };

  const extractSections = (text) => {
    const sections = {};
    const sectionNames = [
      "Extracto",
      "Educación",
      "Experiencia",
      "Certificados",
      "Aptitudes",
    ];

    sectionNames.forEach((section) => {
      const regex = new RegExp(
        `${section}\\s*([\\s\\S]*?)(?=${sectionNames
          .filter((s) => s !== section)
          .join("|")}|$)`,
        "i"
      );
      const match = text.match(regex);
      if (match && match[1]) {
        sections[section] = match[1].trim();
      }
    });

    return sections;
  };

  const formatSectionsToText = (sections) => {
    let formattedText = "";
    for (const [section, content] of Object.entries(sections)) {
      formattedText += `${section}:\n${content}\n\n`;
    }
    return formattedText.trim();
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

        const sections = extractSections(cleanedText); // Extraer secciones específicas

        const formattedText = formatSectionsToText(sections); // Formatear las secciones a texto

        onChange(formattedText); // Pasar el texto formateado al componente padre
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
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
          rows={10}
        />
      )}
    </div>
  );
};

export default FormField;
