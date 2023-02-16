import "./styles.css";
import { FaLinkedin, FaInstagram, FaGithubSquare, FaFacebookSquare, FaRegEnvelope } from "react-icons/fa";
export default function Contacts() {

    return (
        <div className="container-contacts" id="contacts">
            <h1 className="title-about">Contatos</h1>

            <div className="contacts" >
                <div className="item-text">
                    <a href="" className="text-contact">
                        <FaLinkedin className="icon-contact" size={55} />
                        Linkedin
                    </a>
                </div>
                <div className="item-text">
                    <a href="" className="text-contact">
                        <FaInstagram className="icon-contact" size={55} />
                        Instagram
                    </a>
                </div>
                <div className="item-text">
                    <a href="" className="text-contact">
                        <FaGithubSquare className="icon-contact" size={55} />
                        Github
                    </a>
                </div>
                <div className="item-text">
                    <a href="" className="text-contact">
                        <FaFacebookSquare className="icon-contact" size={55} />
                        Facebook
                    </a>
                </div>
                <div className="item-text">
                    <a href="" className="text-contact">
                        <FaRegEnvelope className="icon-contact" size={55} />
                        Email
                    </a>
                </div>
            </div>
            <div className="form-email">
                <div className="container-inputs">
                    <label htmlFor="">Email</label>
                    <input type="text" className="input-text" />
                </div>
                <div className="container-inputs">
                    <label htmlFor="">Nome</label>
                    <input type="text" className="input-text" />
                </div>
                <div className="container-inputs">
                    <label htmlFor="">Corpo do email</label>
                    <input type="textarea" className="input-text" />
                </div>
                <div className="container-inputs">
                  <button>Enviar</button>
                </div>
            </div>
        </div>
    );
}
