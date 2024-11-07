/* eslint-disable react/prop-types */
import Sidebar from "./Sidebar"


const Hero = ({ activeLink, scrollToSection }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-1/4 lg:fixed lg:left-[16%] lg:top-[16%]">
            <div className="w-full flex flex-col justify-center items-start text-gray-300 ml-16 lg:ml-0">
                <h1 className="text-one font-bold font-oswald "> Barış Yesari </h1>
                <p className="text-xl font-semibold tracking-widest font-nunito"> Software Engineer | Full Stack Developer </p>
                <p className="text-md font-nunito mt-1"> Specializing in Node.js & React & Typescript </p>
            </div>
            <div className="w-full lg:flex justify-center items-center mt-8 hidden">
                <Sidebar activeLink={activeLink} scrollToSection={scrollToSection} />
            </div>
        </div>
    );
};

export default Hero;
