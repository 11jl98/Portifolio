import "./styles.css";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbCSharp,
} from "react-icons/tb";
import { SiMysql, SiNodedotjs, SiTypescript, SiDocker } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import avatarProfile from "../../assets/profile.jpeg"

export default function About() {

  return (
    <div className={`container-global-about `} id="about">
      <h1 className="title-about">Sobre mim</h1>
      <div className="container-about" >
        <div className="about-avatar">
          <h1 className="title-description">Quem sou</h1>
          <div className="container-avatar-description">
            <img
              className="imagem-user"
              src={avatarProfile}
              alt=""
            />
            <p className="text">
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
          <p className="text-2">
            Atualmente tenho 3 e meio de experiencia como desenvolvedor, e
            muitas garrafas de café tomadas :D, autando com linguagens com C#,
            onde foi a minha primeira experiência, logo após, migrei me para um
            novo desafio, e atualmente sou desenvolvedor na Compass.UOL, uma
            empresa de consutoria da tecnologia, estou alocado no cliente
            Telefônica VIVO.
          </p>
          <p className="text-2">
            Com minha experiência me coloco dispor de ajudar, ensinar, e fazer
            mais pessoas se apaixonarem pela tecnologia e terem ela como
            parceira diaria.
          </p>
        </div>
        <div className="about-stacks">
          <h1 className="title-description">Minhas stacks</h1>
          <div className="container-stacks">
            <div className="card-stack">
              <TbBrandJavascript size={80} color="#fffafa" />
              <p className="text-stacks">Javascript</p>
            </div>
            <div className="card-stack">
              <TbBrandHtml5 size={80} color="#fffafa" />
              <p className="text-stacks">Html5</p>
            </div>
            <div className="card-stack">
              <TbBrandCss3 size={80} color="#fffafa" />
              <p className="text-stacks">Css3</p>
            </div>
          </div>
          <div className="container-stacks">
            <div className="card-stack">
              <SiNodedotjs size={80} color="#fffafa" />
              <p className="text-stacks">Node.js</p>
            </div>
            <div className="card-stack">
              <SiTypescript size={80} color="#fffafa" />
              <p className="text-stacks">Typescript</p>
            </div>
            <div className="card-stack">
              <TbCSharp size={80} color="#fffafa" />
              <p className="text-stacks">CSharp</p>
            </div>
          </div>

          <div className="container-stacks">
            <div className="card-stack">
              <SiMysql size={80} color="#fffafa" />
              <p className="text-stacks">MySql</p>
            </div>
            <div className="card-stack">
              <SiDocker size={80} color="#fffafa" />
              <p className="text-stacks">Docker</p>
            </div>
            <div className="card-stack">
              <FaGitAlt size={80} color="#fffafa" />
              <p className="text-stacks">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
