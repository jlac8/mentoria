const Sidebar = ({ user, options, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
      {/* Contenedor del Sidebar */}
      <div className="bg-white w-64 h-full shadow-md flex flex-col p-4">
        {/* Cerrar Sidebar */}
        <button
          className="self-end text-gray-600 text-2xl focus:outline-none"
          onClick={onClose}
          aria-label="Close Sidebar"
        >
          ×
        </button>

        {/* Foto del Usuario */}
        <div className="mt-4 mb-6 flex items-center space-x-4">
          <img
            src={user.photo}
            alt="User Avatar"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="font-bold text-lg">Bienvenido</h2>
            <p className="text-sm text-gray-600">Explora tu mentoría</p>
          </div>
        </div>

        {/* Opciones */}
        <nav>
          {options.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded"
            >
              <span className="mr-2">{icon}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
