import { useEffect, useState } from "react";
import "./styles.css";
import { FaMobileAlt, FaReact, FaHashtag, FaTasks } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { TbApi } from "react-icons/tb";

export default function Project() {
  return (
    <div className={`conatainer-all-project-mobile`} id="project">
      <h1 className="title-about-mobile">Meus Projetos</h1>
      <div className="container-project-mobile">
        <a href="https://github.com/11jl98/App-music" className="card-project-mobile">
          <FaMobileAlt color="#fffafa" size={130} />
          <div>
            <p className="description-project-mobile">Aplicativo de musica</p>
            <p className="description-stack-mobile">
              (react native <FaReact /> + api do spotify)
            </p>
          </div>
        </a>
        <a className="card-project-mobile" href="https://github.com/11jl98/minimax-jogo-da-velha">
        <FaHashtag color="#fffafa" size={130} />
          <div>
            <p className="description-project-mobile">Jogo da velha</p>
            <p className="description-stack-mobile">
              (Vanilla  + IA(minimax))
            </p>
          </div>
        </a>
        <a className="card-project-mobile" href="">
        <FaTasks color="#fffafa" size={130} />
          <div>
            <p className="description-project-mobile">Kanban</p>
            <p className="description-stack-mobile">
              (React.js + Node.js)
            </p>
          </div>
        </a>
      </div>
      <div className="container-project-mobile">
        <a className="card-project-mobile" href="https://github.com/11jl98/chat_app/tree/main">
        <BsChatDotsFill color="#fffafa" size={130} />
          <div>
            <p className="description-project-mobile">Chat app em tempo real</p>
            <p className="description-stack-mobile">
              (React Native + Node.js (socket.io))
            </p>
          </div>
        </a>
        <a className="card-project-mobile" href="https://github.com/11jl98/EcomerceFront">
        <MdOutlineComputer color="#fffafa" size={130} />
          <div>
            <p className="description-project-mobile">Sistema de gestão de empresas</p>
            <p className="description-stack-mobile">
              (Vue.js + Bootstrap)
            </p>
          </div>
        </a>
        <a className="card-project-mobile" href="https://github.com/11jl98/background_jobs">
        <TbApi color="#fffafa" size={130} />
          <div>
            <p className="description-project-mobile">Serviço de gerenciamento de filas, usado para emissão de um relatório do tipo agronomico </p>
            <p className="description-stack-mobile">
              (Node.js + banco de dados  MySQL e redis)
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
