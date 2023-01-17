import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Project from "./components/Projects";
import WelcomeMobile from "./components/Welcome/versionMobile";
import AboutMobile from "./components/About/versionMobile";
import ProjectMobile from "./components/Projects/versionMobile";

import "./App.css";

function App() {
  const [isMedia, setIsMedia] = useState<boolean>(
    window.matchMedia("(max-width: 545px)").matches
  );

  useEffect(() => {
    setIsMedia(window.matchMedia("(max-width: 545px)").matches);
  }, [window.matchMedia("(max-width: 545px)").matches]);

  return (
    <div className="App">
      <Navigation />
      {isMedia ? (
        <>
          <WelcomeMobile />
          <AboutMobile />
          <ProjectMobile />
        </>
      ) : (
        <>
          <Welcome />
          <About />
          <Project />
        </>
      )}
    </div>
  );
}

export default App;
