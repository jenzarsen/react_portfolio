import "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home.jsx";
import Projects from "pages/Projects/Projects.jsx";
import NoPage from "pages/NoPage.jsx";
import Experience from "pages/Experience/Experience";
import About from "pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/react_portfolio" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
