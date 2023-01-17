import { useEffect, useState } from "react";
import "./styles.css";

export default function Welcome() {
  const [classNameWelcome, setClassNameWelcome] = useState("Welcome-hidden")

  return (
    <div className={`conatainer-welcome ${classNameWelcome}`} id="welcome">
      <div className="container-user">
        <div className="container-description">
          <h4 className="text-description">Olá, Meu nome é </h4>
          <h1 className="name">
            {"< "}João Luiz {" />"}
          </h1>
          <h4 className="text-description">Sou desenvolvedor fullstack</h4>
        </div>
      </div>
      <a href="#about" className="button-about">
        Sobre
      </a>
    </div>
  );
}


