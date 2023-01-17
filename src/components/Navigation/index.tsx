import "./styles.css";
import nameLogo from "../../assets/name-logo.png";
export default function Navigation() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <img src={nameLogo} className="navbar-logo-text" alt="" />
      </h1>
      <nav className="navbar-menu">
        <ul>
          <li>
            <a href="#welcome">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li><a href="#project">Projetos</a></li>
          <li><a href="#contacts">Contatos</a></li>
        </ul>
      </nav>
    </nav>
  );
}
