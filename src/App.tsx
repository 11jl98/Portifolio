import { useState } from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Project from "./components/Projects";
import WelcomeMobile from "./components/Welcome/versionMobile";
import AboutMobile from "./components/About/versionMobile";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <WelcomeMobile />
      <AboutMobile  />
      {/* <Project  /> */}
    </div>
  );
}

export default App;
