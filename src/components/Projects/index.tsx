import { useEffect, useState } from "react";
import "./styles.css";
import { FaMobileAlt, FaReact, FaHashtag, FaTasks } from "react-icons/fa";

export default function Project() {
  return (
    <div className={`conatainer-all-project`} id="project">
      <h1 className="title-about">Meus Projetos</h1>
      <div className="container-project">
        <a href="https://github.com/11jl98/App-music" className="card-project">
          <FaMobileAlt color="#fffafa" size={160} />
          <div>
            <p className="description-project">Aplicativo de musica</p>
            <p className="description-stack">
              (react native <FaReact /> + api do spotify)
            </p>
          </div>
        </a>
        <a className="card-project" href="https://github.com/11jl98/minimax-jogo-da-velha">
        <FaHashtag color="#fffafa" size={160} />
          <div>
            <p className="description-project">Jogo da velha</p>
            <p className="description-stack">
              (Vanilla  + IA(minimax))
            </p>
          </div>
        </a>
        <a className="card-project" href="">
        <FaTasks color="#fffafa" size={160} />
          <div>
            <p className="description-project">Kanban</p>
            <p className="description-stack">
              (React.js + Node.js)
            </p>
          </div>
        </a>
      </div>
      <div className="container-project">
        <a className="card-project">
        <FaTasks color="#fffafa" size={160} />
          <div>
            <p className="description-project">Kanban</p>
            <p className="description-stack">
              (React.js + Node.js)
            </p>
          </div>
        </a>
        <div className="card-project"></div>
        <div className="card-project"></div>
      </div>
    </div>
  );
}
