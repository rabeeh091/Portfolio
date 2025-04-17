import "./Navbar.css"
import { navTabs } from "../../data"
import { useState } from "react"

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("#");
  return (
    <nav>
        {navTabs.map(({icon, id},index) => (
            <a 
            href={"#" + id} 
            className={activeTab === id ? "active" : "" }
            onClick={() => setActiveTab("#" + id)}
            key={index}
            >
            {icon}
            </a>
        ) )}
    </nav>
  )
}

export default Navbar