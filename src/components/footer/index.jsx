import "./Footer.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import MagicButton from "../../commons/MagicButton";


const Footer = () => {
  return (
    <footer>
        <div className="footer__socials">
            <MagicButton 
                title={""}
                icon={<FaLinkedin />}
                position={"left"}
                isSpinning={true}
                onClick={() => window.open("https://www.linkedin.com/in/rabeeh-k-565096275/", "_blank")}
                className={"social-icon"}
            />
            <MagicButton 
                title={""}
                icon={<FaGithub />}
                position={"left"}
                isSpinning={true}
                onClick={() => window.open("https://github.com/rabeeh091", "_blank")}
                className={"social-icon"}
            />
            <MagicButton 
                title={""}
                icon={<FiInstagram />}
                position={"left"}
                isSpinning={true}
                onClick={() => window.open("https://www.instagram.com/_rabeeeh/", "_blank")}
                className={"social-icon"}
            />
            
        </div>
        <div className="copyright">
            <p>&copy; Mr. Muhammed Rabeeh. ALl right reserved</p>
        </div>
    </footer>
  )
}

export default Footer

/*
<a href="https://www.linkedin.com/in/rabeeh-k-565096275/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/rabeeh091" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/_rabeeeh/" target="_blank"><FiInstagram/></a>
*/
