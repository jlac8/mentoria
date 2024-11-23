const FormField = ({ label, type, value, onChange, placeholder, info }) => {
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
            accept=".pdf"
            onChange={(e) => onChange(e.target.files[0])}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
          />
        </>
      ) : (
        <input
          type={type}
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
