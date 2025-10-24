// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Case from "./pages/Case/Case";
import StarCursor from "./components/StarCursor/StarCursor";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import WelcomeOverlay from "./components/WelcomeOverlay/WelcomeOverlay";

const App = () => {
  return (
    <>
      <CustomCursor />
      <WelcomeOverlay />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/case/:projectId" element={<Case />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
