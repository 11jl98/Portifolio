import "./styles.css";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbCSharp,
} from "react-icons/tb";
import { SiMysql, SiNodedotjs, SiTypescript, SiDocker } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import avatarProfile from "../../../assets/profile.jpeg";

export default function About() {
  return (
    <div className={`container-global-about-mobile`} id="about">
      <h1 className="title-about-mobile">Sobre mim</h1>
      <div className="container-about-mobile">
        <div className="about-avatar-mobile">
          <h1 className="title-description-mobile">Quem sou</h1>
          <div className="container-avatar-description-mobile">
            <img
              className="imagem-user-mobile"
              src={"./" + avatarProfile}
              alt=""
            />
            <p className="text-mobile">
              Vindo de Mariana - MG, formado em Mineração pelo Instituto Federal
              de Minas Gerais, decidi mudar os ares e conhecer novos caminhos, e
              foi assim que parei em Sistemas de infomação na minha graduação.
              Formado pela FDV (Faculdade de Viçosa), venho atuando no setor de
              tecnologia desde os primeiros periodos, onde me encantei pela
              tecnologia e decidi que seria a minha carreira. Enfrentei diversos
              desafios durante esse periodo, onde tive que lidar com diversas
              tecnologias até mesmo aquelas menos amadas (JAVA... brincadeira,
              todos nós amamos java :)).{" "}
            </p>
          </div>
          <p className="text-mobile">
            Atualmente tenho 3 e meio de experiência como desenvolvedor, e
            muitas garrafas de café tomadas :D, atuando com linguagens com C#,
            onde foi a minha primeira experiência, logo após, migrei me para um
            novo desafio, e atualmente sou desenvolvedor na Compass.UOL, uma
            empresa de consutoria da tecnologia, estou alocado no cliente
            Telefônica VIVO, atuando Com microserviços e bffs em node e micro
            frontend em vue.js.
          </p>
          <p className="text-mobile">
            Com minha experiência me coloco dispor de ajudar, ensinar, e fazer
            mais pessoas se apaixonarem pela tecnologia e terem ela como
            parceira diaria.
          </p>
        </div>
        <div className="about-stacks-mobile">
          <h1 className="title-description-mobile">Minhas stacks</h1>
          <div className="container-stacks-mobile">
            <div className="card-stack-mobile">
              <TbBrandJavascript size={60} color="#fffafa" />
              <p className="text-stacks-mobile">Javascript</p>
            </div>
            <div className="card-stack-mobile">
              <TbBrandHtml5 size={60} color="#fffafa" />
              <p className="text-stacks-mobile">Html5</p>
            </div>
            <div className="card-stack-mobile">
              <TbBrandCss3 size={60} color="#fffafa" />
              <p className="text-stacks-mobile">Css3</p>
            </div>
          </div>
          <div className="container-stacks-mobile">
            <div className="card-stack-mobile">
              <SiNodedotjs size={60} color="#fffafa" />
              <p className="text-stacks-mobile">Node.js</p>
            </div>
            <div className="card-stack-mobile">
              <SiTypescript size={60} color="#fffafa" />
              <p className="text-stacks-mobile">Typescript</p>
            </div>
            <div className="card-stack-mobile">
              <TbCSharp size={60} color="#fffafa" />
              <p className="text-stacks-mobile">CSharp</p>
            </div>
          </div>

          <div className="container-stacks-mobile">
            <div className="card-stack-mobile">
              <SiMysql size={60} color="#fffafa" />
              <p className="text-stacks-mobile">MySql</p>
            </div>
            <div className="card-stack-mobile">
              <SiDocker size={60} color="#fffafa" />
              <p className="text-stacks-mobile">Docker</p>
            </div>
            <div className="card-stack-mobile">
              <FaGitAlt size={60} color="#fffafa" />
              <p className="text-stacks-mobile">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
