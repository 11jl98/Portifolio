import "./styles.css";

export default function Welcome() {

  return (
    <div className={`conatainer-welcome-mobile `} id="welcome">
      <div className="container-user-mobile">
        <div className="container-description-mobile">
          <h4 className="text-description-mobile">Olá, Meu nome é </h4>
          <h1 className="name-mobile">
            {"< "}João Luiz {" />"}
          </h1>
          <h4 className="text-description-mobile">Sou desenvolvedor fullstack</h4>
        </div>
      </div>
      <a href="#about" className="button-about-mobile">
        Sobre
      </a>
    </div>
  );
}


