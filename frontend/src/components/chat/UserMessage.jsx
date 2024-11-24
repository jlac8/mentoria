const UserMessage = ({ content }) => {
  return (
    <div className="flex justify-end mb-4">
      <div
        className="bg-white text-primary py-2 px-4 rounded-lg max-w-xs"
        style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
      >
        {content}
      </div>
    </div>
  );
};

export default UserMessage;
