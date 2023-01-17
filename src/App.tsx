import { useState } from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Project from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
      <About  />
      <Project  />
    </div>
  );
}

export default App;
