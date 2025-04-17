import "./Header.css";
import Grid from "../../assets/grid.svg";
import MagicButton from "../../commons/MagicButton";
import { FaDownload } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import cv from "../../assets/cv.pdf";
import useScroll from "../../hooks/useScroll";
import BlobSvg from "../../assets/blob.svg";
import ME from "../../assets/me.png";

const Header = () => {
    const {scrollTo} = useScroll();
  return (
    <header>
        <div className="grid-kit">
            <img src={Grid} alt="" />
        </div>
        <div className="container header__container">
            <div>
                <h3>Hello 👋, I'm</h3>
                <h1 className="gradient-text">Muhammed Rabeeh</h1>
                <h2 className="text-light">👨‍💻 Fullstack Developer 🌐</h2>
                <p className="description">
                👨‍💻🚀 I’m a Fullstack Developer specializing in creating responsive, 
                high-performance web applications. Blending 🎨 creative front-end aesthetics with ⚙️ 
                solid back-end engineering, I deliver solutions that are both user-friendly and technically sound. 
                Dive into my portfolio to see my work, skillset, and how I can add value to your next project 💼.
                </p>
                <MagicButton 
                title={"Download CV"} 
                icon={<FaDownload/>}
                position={"right"}
                isSpinning={true}
                onClick={() => window.open(cv, "_blank")}
                />
                <MagicButton 
                title={"Let's Talk"}
                icon={<FiSend />}
                position={"right"}
                onClick={()=>scrollTo("contact")}
                />
            </div>
            <div className="me">
                <div className="blob">
                    <img src={BlobSvg} alt="" />
                </div>
                <div>
                    <img src={ME} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header