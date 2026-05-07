import { useState, useEffect } from "react";
import "./App.css";
import { TodoPage } from "./pages/TodoPage";
import { SettingsPage } from "./pages/SettingsPage";
import { MyTodos } from "./pages/MyTodos";
import { Routes, Route, Link } from "react-router";

/**
 * useState
 * TODO App
 * - add a todo
 * - delete a todo
 * - mark complete on todo
 */

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/mytodos">To do</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/mytodos" element={<MyTodos />} />
      </Routes>
    </>
  );
}

export default App;
