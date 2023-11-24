import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import Comunity from "./pages/Comunity";
import PostDetail from "./pages/PostDetail";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/comunity" element={<Comunity />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />D
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
