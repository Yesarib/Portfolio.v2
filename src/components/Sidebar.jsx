/* eslint-disable react/prop-types */
import { Link } from 'react-scroll';

const Sidebar = ({ activeLink, scrollToSection }) => {
  return (
    <div className="w-full flex justify-start items-start font-nunito">
      <div className="w-full flex flex-col justify-start items-start text-gray-500 space-y-5">
        <div className="flex justify-center items-center space-x-2">
          <div className={`bg-gray-500 flex w-16 h-0.5 ${activeLink === "about" && "bg-white w-20"}`}></div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-two cursor-pointer transition ease-in-out duration-300 hover:text-white ${activeLink === "about" && "text-white"}`}
            onClick={() => scrollToSection("about")}
          >
            About
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className={`bg-gray-500 flex w-16 h-0.5 ${activeLink === "experience" && "bg-white w-20"}`}></div>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-two cursor-pointer transition ease-in-out duration-300 hover:text-white ${activeLink === "experience" && "text-white"} `}
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className={`bg-gray-500 flex w-16 h-0.5 ${activeLink === "projects" && "bg-white w-20"}`}></div>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-two cursor-pointer transition ease-in-out duration-300 hover:text-white ${activeLink === "projects" && "text-white"}`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
