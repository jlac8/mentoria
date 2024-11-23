import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
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
              <div className="flex-1">
                <ChatPage />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
