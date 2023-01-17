import { useEffect, useState } from "react";
import "./styles.css";
import { FaMobileAlt, FaReact, FaHashtag, FaTasks } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { TbApi } from "react-icons/tb";

export default function Project() {
  return (
    <div className={`conatainer-all-project`} id="project">
      <h1 className="title-about">Meus Projetos</h1>
      <div className="container-project">
        <a href="https://github.com/11jl98/App-music" className="card-project">
          <FaMobileAlt color="#fffafa" size={160} className="icon-project" />
          <div>
            <p className="description-project">Aplicativo de musica</p>
            <p className="description-stack">
              (react native <FaReact /> + api do spotify)
            </p>
          </div>
        </a>
        <a className="card-project" href="https://github.com/11jl98/minimax-jogo-da-velha">
        <FaHashtag color="#fffafa" size={160} className="icon-project" />
          <div>
            <p className="description-project">Jogo da velha</p>
            <p className="description-stack">
              (Vanilla  + IA(minimax))
            </p>
          </div>
        </a>
        <a className="card-project" href="">
        <FaTasks color="#fffafa" size={160} className="icon-project"/>
          <div>
            <p className="description-project">Kanban</p>
            <p className="description-stack">
              (React.js + Node.js)
            </p>
          </div>
        </a>
      </div>
      <div className="container-project">
        <a className="card-project" href="https://github.com/11jl98/chat_app/tree/main">
        <BsChatDotsFill color="#fffafa" size={130} />
          <div>
            <p className="description-project">Chat app em tempo real</p>
            <p className="description-stack">
              (React Native + Node.js (socket.io))
            </p>
          </div>
        </a>
        <a className="card-project" href="https://github.com/11jl98/EcomerceFront">
        <MdOutlineComputer color="#fffafa" size={130} />
          <div>
            <p className="description-project">Sistema de gestão de empresas</p>
            <p className="description-stack">
              (Vue.js + Bootstrap)
            </p>
          </div>
        </a>
        <a className="card-project" href="https://github.com/11jl98/background_jobs">
        <TbApi color="#fffafa" size={130} />
          <div>
            <p className="description-project">Serviço de gerenciamento de filas, usado para emissão de um relatório do tipo agronomico </p>
            <p className="description-stack">
              (Node.js + banco de dados  MySQL e redis)
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
