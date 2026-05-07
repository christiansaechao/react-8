import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BattleScreen } from "./pages/BattleScreen";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/battle-screen" element={<BattleScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
