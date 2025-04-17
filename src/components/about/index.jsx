import ABOUT from '../../assets/about.png'
import MagicButton from '../../commons/MagicButton'
import { IoIosContact } from 'react-icons/io'
import useScroll from '../../hooks/useScroll'
import { FaAward } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './About.css'

const About = () => {
    const{scrollTo} = useScroll();
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__boxes">
                <div className="box intro">
                    <div className="image__box">
                        <img src={ABOUT} alt="" />
                    </div>
                    <div className='content'>
                        <h2>Crafting Full Stack Solutions That Inspire</h2>
                        <p>Turning visionary concepts into intuitive, high-performing web
                        applications that blend design and functionality seamlessly.</p>
                    </div>
                </div>
                <div className="box contact">
                    <h2>Have an idea? Let's connect and make it happen!</h2>
                    <MagicButton 
                    title={"Contact Me"}
                    icon={<IoIosContact />}
                    position={"left"}
                    isSpinning={true}
                    onClick={()=>scrollTo('contact')}
                    />
                </div>
            </div>
            <div className='about__content'>
                <p>
                I'm a passionate Full Stack Developer with a strong foundation in both front-end and 
                back-end technologies, specializing in building robust, scalable web applications 
                that deliver exceptional user experiences. With hands-on experience in tools and 
                frameworks like React, Node.js, Express, MongoDB, and SQL, I enjoy crafting clean, 
                efficient code and solving complex problems. From responsive UI design to API development 
                and database management, I thrive across the entire development stack. I'm always eager 
                to learn new technologies, stay current with industry trends, and collaborate with 
                teams to bring ideas to life. Whether developing modern SPAs or building RESTful 
                services, I take pride in delivering high-quality, maintainable solutions.
                </p>
                <div className="about__cards">
                    {/* about card start */}
                    <div className="about__card">
                        <FaAward className='about__icon' />
                        <h5>Experience</h5>
                        <small>Fresher</small>
                    </div>
                    {/* about card end */}

                    {/* about card start */}
                    <div className="about__card">
                        <FiUsers className='about__icon' />
                        <h5>Clients</h5>
                        <small>Happy</small>
                    </div>
                    {/* about card end */}

                    {/* about card start */}
                    <div className="about__card">
                        <VscFolderLibrary className='about__icon' />
                        <h5>Project</h5>
                        <small>Completed</small>
                    </div>
                    {/* about card end */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About