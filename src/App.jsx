import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VideoPage from "./pages/VideoPage";
import WebPage from "./pages/WebPage";
import DesignPage from "./pages/DesignPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/web" element={<WebPage />} />
      <Route path="/design" element={<DesignPage />} />
    </Routes>
  );
}

export default App;