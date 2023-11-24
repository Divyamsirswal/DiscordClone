import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import Comunity from "./pages/Comunity";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/comunity" element={<Comunity />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
