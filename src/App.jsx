import { useState, useEffect } from 'react';
import { animateScroll as scroll, Events } from 'react-scroll';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Loading from './components/Loading';
import Quotes from './components/Quotes';

function App() {

  const [loading, setLoading] = useState(true);
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      console.log('scroll started');
    });
    Events.scrollEvent.register('end', () => {
      console.log('scroll ended');
    });
  
    window.addEventListener('scroll', handleScroll);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };

    
  }, []);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const experienceSection = document.getElementById('experience');
    const projectsSection = document.getElementById('projects');

    if (aboutSection && window.scrollY >= aboutSection.offsetTop && window.scrollY < experienceSection.offsetTop) {
      setActiveLink("about");
    } else if (experienceSection && window.scrollY >= experienceSection.offsetTop && window.scrollY < projectsSection.offsetTop) {
      setActiveLink("experience");
    } else if (projectsSection && window.scrollY >= projectsSection.offsetTop) {
      setActiveLink("projects");
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      scroll.scrollTo(section.offsetTop);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className='w-full flex'>
      <div className='w-full flex flex-col'>
        <div className="w-full lg:flex mt-20">
          <div className='w-full flex justify-center items-center'>
            <Hero activeLink={activeLink} scrollToSection={scrollToSection}/>
            <Footer />

          </div>
          <div className='w-full flex flex-col justify-end '>
            <About />
            <Tech />
            <div className='w-full flex flex-col justify-center items-center lg:mt-16'>
            <Experience />
            <Projects />
            <Quotes />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
