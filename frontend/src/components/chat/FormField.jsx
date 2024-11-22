// src/components/Chat/FormField.jsx
const FormField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-800 font-semibold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
      />
    </div>
  );
};

export default FormField;
