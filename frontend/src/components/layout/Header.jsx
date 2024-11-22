import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = ({ user }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const options = [
    { label: "Mapa del Destino", icon: "🗺️", href: "/map" },
    { label: "Cursos", icon: "📚", href: "/courses" },
    { label: "Notifications", icon: "🔔", href: "/notifications" },
    { label: "Mi futuro ideal", icon: "✨", href: "/future" },
  ];

  return (
    <header className="bg-white text-black px-4 py-2 flex justify-between items-center shadow-md">
      {/* Mobile: Hamburguesa */}
      <button
        className="text-2xl md:hidden focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Logo */}
      <h1 className="text-xl font-bold">MentorIA</h1>

      {/* Opciones (Desktop) */}
      <nav className="hidden md:flex space-x-6">
        {options.map(({ label, icon, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center space-x-2 hover:text-gray-700"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </a>
        ))}
      </nav>

      {/* Foto del Usuario */}
      <img
        src={user.photo}
        alt="User Avatar"
        className="w-10 h-10 rounded-full border border-gray-300"
      />

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <Sidebar user={user} options={options} onClose={toggleSidebar} />
      )}
    </header>
  );
};

export default Header;
