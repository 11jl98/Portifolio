import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Project from "./components/Projects";
import Contacts from "./components/Contacts";
import WelcomeMobile from "./components/Welcome/versionMobile";
import AboutMobile from "./components/About/versionMobile";
import ProjectMobile from "./components/Projects/versionMobile";
import ContactsMobile from "./components/Contacts/versionMobile";

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
          <ContactsMobile />
        </>
      ) : (
        <>
          <Welcome />
          <About />
          <Project />
          <Contacts />
        </>
      )}
    </div>
  );
}

export default App;
