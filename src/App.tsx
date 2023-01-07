import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import MyRecord from "./pages/MyRecord";
import Column from "./pages/Column";
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/my-record" element={<MyRecord />}/>
          <Route path="/column" element={<Column />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
