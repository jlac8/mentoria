import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-nunito bg-gradient-to-b from-[#8700Fc] to-[#83E1EC]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<ChatPage />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
