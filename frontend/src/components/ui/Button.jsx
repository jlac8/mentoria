const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-white text-primary font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
