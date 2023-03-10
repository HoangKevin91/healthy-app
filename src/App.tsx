import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import MyRecord from "./pages/MyRecord";
import Column from "./pages/Column";
import './App.css';
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home/>} />
            <Route path="/my-record" element={<MyRecord />}/>
            <Route path="/column" element={<Column />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
