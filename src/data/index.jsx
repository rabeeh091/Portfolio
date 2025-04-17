import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import TYPING from "../assets/typing.png";
import DESIGN from "../assets/design.png";
import OPTIMIZATION from "../assets/optimization.png";
import IMG1 from "../assets/E-Comerce.png";
import IMG2 from "../assets/Taskmanager.png";
import IMG3 from "../assets/Grossery.png";
import IMG4 from "../assets/Expense.png";
import IMG5 from "../assets/carrental.png";
import IMG6 from "../assets/weather-app.png";

export const navTabs = [
  {
    icon: <AiOutlineHome />,
    id: "",
  },
  {
    icon: <AiOutlineUser />,
    id: "about",
  },
  {
    icon: <BiBook />,
    id: "experience",
  },
  {
    icon: <RiServerLine />,
    id: "services",
  },
  {
    icon: <BiMessageSquareDetail />,
    id: "contact",
  },
];
export const services = [
  {
    title: "Custom Web Development",
    image: TYPING,
    description: `Build fully customized, responsive websites tailored to your business needs with modern tech stacks.`,
  },
  {
    title: "Full-Stack Application Development",
    image: DESIGN,
    description: `Develop scalable, feature-rich web applications, including front-end, back-end, and API integrations.`,
  },
  {
    title: "Website Maintenance & Optimization",
    image: OPTIMIZATION,
    description: `Ensure smooth performance with regular updates, security checks, and speed optimization.`,
  },
];

export const portfolio = [
  {
    image: IMG1,
    title: "A fullstack web developer's portfolio",
    description: `A personal portfolio showcasing expertise in full-stack web development, highlighting proficiency in both frontend and backend technologies through dynamic, responsive, and feature-rich web applications.`,
    github: "https://github.com/rabeeh091",
    demo: "#",
  },
  {
    image: IMG2,
    title: "Web developer's portfolio",
    description: `A sleek, modern portfolio designed to display a web developer's skills, projects, and experience. Built with cutting-edge tools and technologies, this site offers a seamless user experience with a focus on clean design.`,
    github: "https://github.com/rabeeh091",
    demo: "#",
  },
  {
    image: IMG3,
    title: "Animated construction company's website",
    description: `A visually captivating construction company website using React and GSAP for smooth animations and interactions, offering clients an engaging way to explore services and previous projects.`,
    github: "https://github.com/rabeeh091",
    demo: "#",
  },
  {
    image: IMG4,
    title: "Digital agency web application",
    description: `A feature-packed web application for a digital agency, providing a streamlined platform to manage projects, collaborate with clients, and deliver creative services efficiently.`,
    github: "https://github.com/rabeeh091",
    demo: "#",
  },
  {
    image: IMG5 ,
    title: "Responsive Car Rental Website",
    description: `A sleek, fully responsive web app built with HTML, CSS, and JavaScript for smooth vehicle booking and rental management. Features real-time interactions, adaptive design, and a user-friendly interface for both travelers and businesses.`,
    github: "https://github.com/rabeeh091/Car-Rental-Website-Javascript.git",
    demo: "https://car-rental-website-javascript.vercel.app/",
  },
  {
    image: IMG6,
    title: "Weather App",
    description: `A sleek, fully responsive web app built with HTML, CSS, and JavaScript for real-time weather updates and location-based forecasts. Features smooth interactions, adaptive design, and a user-friendly interface tailored for everyday users and weather enthusiasts alike.`,
    github: "https://github.com/rabeeh091/Weather-App",
    demo: "https://weather-app-sepia-ten-73.vercel.app/",
  },
];


export const socialHandles = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/rabeeh-k-565096275/",
    },
    {
        name: "Github",
        icon: <FaGithub />,
        link: "https://github.com/rabeeh091",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/_rabeeeh/",
    },
  ];