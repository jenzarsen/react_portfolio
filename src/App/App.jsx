import "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home.jsx";
import NoPage from "pages/NoPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
