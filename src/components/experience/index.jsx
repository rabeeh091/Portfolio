import "./Experience.css"
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMysql, DiDjango  } from "react-icons/di";
import { SiMongodb } from "react-icons/si";




const Experience = () => {
  return (
    <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
        {/* Frontend start */}
        <div className="experience__frondend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
                {/* details start */}
                <div className="experience__details">
                    <FaHtml5  className="experience__details__icon"/>
                    <div>
                        <h4>HTML</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <FaCss3   className="experience__details__icon"/>
                    <div>
                        <h4>CSS</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <IoLogoJavascript   className="experience__details__icon"/>
                    <div>
                        <h4>JavaScript</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <FaBootstrap    className="experience__details__icon"/>
                    <div>
                        <h4>Bootstrap</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <RiTailwindCssFill   className="experience__details__icon"/>
                    <div>
                        <h4>Tailwind</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <FaReact    className="experience__details__icon"/>
                    <div>
                        <h4>ReactJS</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}
            </div>
        </div>
        {/* Frontend end */}


        {/* Backend start */}
        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
                {/* details start */}
                <div className="experience__details">
                    <FaReact    className="experience__details__icon"/>
                    <div>
                        <h4>NodeJS</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <SiMongodb     className="experience__details__icon"/>
                    <div>
                        <h4>MongoDB</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <FaPython     className="experience__details__icon"/>
                    <div>
                        <h4>Python</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <DiMysql    className="experience__details__icon"/>
                    <div>
                        <h4>MySQL</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}

                {/* details start */}
                <div className="experience__details">
                    <DiDjango    className="experience__details__icon"/>
                    <div>
                        <h4>Django</h4>
                        <small>Experienced</small>
                    </div>
                </div>
                {/* details end */}
            </div>
        </div>
        {/* Backend end */}
        </div>
    </section>
  )
}

export default Experience