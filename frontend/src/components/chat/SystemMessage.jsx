const SystemMessage = ({ content }) => {
  console.log(content);

  return (
    <div className="flex items-start mb-4">
      {/* Icono del mago */}
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4">
        <span className="text-2xl ">🧙‍♂️</span>
      </div>
      {/* Burbuja del mensaje */}
      <div
        className="bg-gradient-to-r from-[#9B00FC75] to-[#140E8675] text-white py-2 px-4 rounded-lg max-w-xs"
        style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
      >
        {content}
      </div>
    </div>
  );
};

export default SystemMessage;
