import "./styles.css";
import { FaLinkedin, FaInstagram, FaGithubSquare, FaFacebookSquare, FaRegEnvelope } from "react-icons/fa";
export default function Contacts() {

  return (
   <div className="container-contacts" id="contacts">
      <h1 className="title-about">Contatos</h1>

        <div className="contacts" >
            <div className="item-text">
            <FaLinkedin className="icon-contact" size={55} />
                <a href="" className="text-contact">Linkedin</a>
            </div>
            <div className="item-text">
            <FaInstagram className="icon-contact" size={55} />
                <a href="" className="text-contact">Instagram</a>
            </div>
            <div className="item-text">
            <FaGithubSquare className="icon-contact" size={55} />
                <a href="" className="text-contact">Github</a>
            </div>
            <div className="item-text">
            <FaFacebookSquare className="icon-contact" size={55} />
                <a href="" className="text-contact">Facebook</a>
            </div>
            <div className="item-text">
            <FaRegEnvelope className="icon-contact" size={55} />
                <a href="" className="text-contact">Email</a>
            </div>
        </div>
   </div>
  );
}
