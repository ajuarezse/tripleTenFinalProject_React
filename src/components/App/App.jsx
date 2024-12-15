import { Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route></Route>
        </Routes>
      </div>
      <h1>Hello lily</h1>
      <p>This is my final triple ten project!</p>
    </>
  );
}

export default App;
