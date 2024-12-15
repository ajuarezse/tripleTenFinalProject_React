import { Routes, Route } from "react-router-dom";
//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <h1>Hello lily</h1>
        <p>This is my final triple ten project!</p>
        <Routes>
          <Route></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
