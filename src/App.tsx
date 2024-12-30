import React from "react";
import Counter from "./components/Counter.tsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CountersPage from "./pages/counterPage.tsx";
import "./App.css";
import Task3 from "./pages/task3.jsx";
import Home from "./pages/home.jsx";

function App() {
  return (
    <Router>
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/counters" element={<CountersPage />} />
          <Route path="/task3" element={<Task3 />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
