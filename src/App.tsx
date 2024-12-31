import React from "react";
import {  BrowserRouter as Router,Route, Routes, HashRouter } from "react-router-dom";
import CountersPage from "./pages/counterPage.tsx";
import "./App.css";
import Task3 from "./pages/task3.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <Router basename="/react-counter">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counters" element={<CountersPage />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
