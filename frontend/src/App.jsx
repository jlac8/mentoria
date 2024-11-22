import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  const user = {
    photo: "https://via.placeholder.com/150", // Foto de ejemplo
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen font-nunito">
              <Homepage />
            </div>
          }
        />
        <Route
          path="/chat"
          element={
            <div className="min-h-screen font-nunito flex flex-col">
              <Header user={user} />
              <div className="flex-1">
                <ChatPage />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
