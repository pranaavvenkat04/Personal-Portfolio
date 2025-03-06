import React from 'react';
import Navbar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import References from './components/References';
import Footer from './components/Footer';
import BinaryRain from './components/BinaryRain';

const Portfolio = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <BinaryRain />
      <Navbar scrollToTop={scrollToTop}/>
      <main className="flex-grow relative z-10">
        <About
          linkToLinkedin={'https://www.linkedin.com/in/pranaav-venkat/'}
          linkToGithub={'https://github.com/pranaavvenkat04'}
          linkToEmail={'mailto:pranaav.venkat04@gmail.com'}
          linktoResume={'/Pranaav_Venkatasubramanian.pdf'}
        />
        <Skills/>
        <Projects limit={6} showAll={false}/>
        <Experience/>
        <References/>
      </main>
      <Footer
        linkToLinkedin={'https://www.linkedin.com/in/pranaav-venkat/'}
        linkToGithub={'https://github.com/pranaavvenkat04'}
        linkToEmail={'mailto:pranaav.venkat04@gmail.com'}
        linktoResume={'/Pranaav_Venkatasubramanian.pdf'}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default Portfolio;