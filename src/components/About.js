import React, { useState, useEffect, useRef } from "react";

const About = ({ linkToLinkedin, linkToGithub, linkToEmail, linktoResume }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width <= 400);
      setIsMediumScreen(width <= 900);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio > 0.9);
      },
      {
        threshold: 0.9,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openResume = () => {
    window.open(linktoResume, "_blank");
  };

  return (
    <section ref={sectionRef} className="min-h-screen pt-24 md:pt-12 flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center mb-20">
          {/* Image Container */}
          <div className={`md:col-span-2 flex justify-center order-1 md:order-2 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <div className="w-48 h-56 md:w-80 md:h-[28rem] relative">
              <div className="w-full h-full transition-all duration-300 hover:scale-105">
                <img
                  src="/Pranaav.jpg"
                  alt="Pranaav Venkatasubramanian"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className={`md:col-span-3 order-2 md:order-1 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 break-words">
                Hello World<span className="inline-block animate-[wave_2s_ease-in-out_infinite]">👋</span>! I'm {isSmallScreen ? "Pranaav Venkat" : "Pranaav Venkatasubramanian"}
              </h1>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                An aspiring software engineer with a focus on Operating Systems and Firmware development. Always eager to learn, experience new things, and expand my knowledge. Feel free to explore my work and connect with me to collaborate or learn more!
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex gap-4 flex-shrink-0">
                  <a
                    href={linkToLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 bg-white/50 backdrop-blur-sm hover:bg-white/70 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <img
                      src="/icons/linkedin.png"
                      alt="LinkedIn"
                      className="w-12 h-12 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </a>

                  <a
                    href={linkToGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 bg-white/50 backdrop-blur-sm hover:bg-white/70 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <img
                      src="/icons/github.png"
                      alt="GitHub"
                      className="w-12 h-12 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </a>

                  <a
                    href={linkToEmail}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 bg-white/50 backdrop-blur-sm hover:bg-white/70 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <img
                      src="/icons/email.png"
                      alt="Mail"
                      className="w-12 h-12 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </a>
                </div>

                <button
                  onClick={openResume}
                  className={`flex items-center space-x-2 px-4 py-2 md:px-6 md:py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all duration-300 text-sm md:text-base flex-shrink-0 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <img
                    src="/icons/pdf.png"
                    alt="File"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <span>My Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Work Section - Only visible on larger screens */}
        <div 
          className={`fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-700 flex flex-col items-center ${
            isVisible && isLoaded && !isMediumScreen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg mb-1 animate-bounce">
            <p className="text-xs md:text-sm font-semibold whitespace-nowrap">
              Explore my work!
            </p>
          </div>
          <div className="w-5 h-5 md:w-6 md:h-6 animate-bounce">
            <img
              src="/icons/arrow.png"
              alt="Down Arrow"
              className="w-full h-full rotate-180"
            />
          </div>
        </div>

        {/* Small Screen Scroll Indicator */}
        {isMediumScreen && (
          <div 
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
              isVisible && isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg animate-bounce">
              <img
                src="/icons/arrow.png"
                alt="Scroll Down"
                className="w-4 h-4 rotate-180"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;