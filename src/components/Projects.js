import React, { useState, useMemo, useRef, useEffect } from 'react';
import { projects, mainTags, buttonColors } from './ProjectInfo';
import { useNavigate, useLocation } from 'react-router-dom';

const Projects = ({ limit = 6, showAll = false}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({});
  const cardRefs = useRef({});
  const contentRefs = useRef({});
  const descriptionRefs = useRef({});

  useEffect(() => {
    if (hoveredIndex === null) {
      Object.values(descriptionRefs.current).forEach(ref => {
        if (ref) {
          setTimeout(() => {
            ref.scrollTop = 0;
          }, 500);
        }
      });
    }
  }, [hoveredIndex]);

  useEffect(() => {
    if (location.pathname === '/projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const filteredProjects = useMemo(() => {
    let filtered = projects
      .filter(project => 
        activeFilter === 'ALL' || 
        project.tags.some(tag => tag.toUpperCase() === activeFilter)
      )
      .sort((a, b) => a.priority - b.priority);
    
    if (!showAll) {
      filtered = filtered.slice(0, limit);
    }
    
    return filtered;
  }, [activeFilter, limit, showAll]);

  useEffect(() => {
    const updateDimensions = () => {
      const dimensions = {};
      Object.keys(cardRefs.current).forEach(index => {
        const card = cardRefs.current[index];
        const content = contentRefs.current[index];
        if (card && content) {
          const titleHeight = content.querySelector('.title')?.offsetHeight || 0;
          const tagsHeight = content.querySelector('.tags')?.offsetHeight || 0;
          const buttonsContainer = content.querySelector('.buttons');
          const buttonsHeight = (buttonsContainer?.scrollHeight || 48) + 32;
          const imageHeight = 250;
          const padding = 48;
          
          const baseHeight = 580;
          const expandedHeight = 680;
          
          const description = content.querySelector('.description-content');
          const descriptionHeight = description?.scrollHeight || 0;
          
          const previewLines = 3;
          const lineHeight = 24;
          const previewHeight = previewLines * lineHeight;
          
          dimensions[index] = {
            baseHeight,
            expandedHeight,
            descriptionMaxHeight: expandedHeight - (titleHeight + tagsHeight + buttonsHeight + imageHeight + padding + 40), // Additional padding
            previewHeight: Math.min(previewHeight, descriptionHeight),
            maxDescriptionHeight: descriptionHeight,
          };
        }
      });
      setCardDimensions(dimensions);
    };

    setTimeout(updateDimensions, 300);
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [filteredProjects]);

  const handleBackToHome = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const formatDescription = (description) => {
    if (Array.isArray(description)) {
      return description;
    }
    return [description];
  };

  const getButtonColor = (color) => {
    return buttonColors[color] || buttonColors.blue;
  };
  
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag.toUpperCase()));
    });
    return Array.from(tags);
  }, []);

  const otherTags = useMemo(() => {
    return allTags.filter(tag => !mainTags.includes(tag));
  }, [allTags]);

  const getSortedTags = (tags) => {
    if (activeFilter === 'ALL') return tags;
    
    return [...tags].sort((a, b) => {
      const aMatch = a.toUpperCase() === activeFilter;
      const bMatch = b.toUpperCase() === activeFilter;
      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);
  
  const renderProjectButtons = (project, isHovered) => {
    const baseButtonClasses = "flex items-center justify-center gap-2 px-4 py-2 h-10 rounded-md text-white transition-all duration-500";
    
    return (
      <div className={`flex flex-wrap justify-center gap-4 transition-all duration-500 w-full ${
        isHovered ? 'opacity-100' : 'opacity-90'
      }`}>
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseButtonClasses} bg-gray-900 hover:bg-gray-800 ${
              isHovered ? 'w-auto min-w-[100px]' : 'w-[100px]'
            }`}
          >
            <img 
              src="/icons/github-white.png"
              alt="GitHub"
              className="w-5 h-5"
            />
            <span className="truncate">Code</span>
          </a>
        )}

        {project.links.demo && project.links.type === 'demo' && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseButtonClasses} bg-blue-600 hover:bg-blue-700 ${
              isHovered ? 'w-auto min-w-[100px]' : 'w-[100px]'
            }`}
          >
            <img 
              src="/icons/external_link.png"
              alt="External Link"
              className="w-5 h-5"
            />
            <span className="truncate">Demo</span>
          </a>
        )}

        {project.links.youtube && (
          <a
            href={project.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseButtonClasses} bg-red-600 hover:bg-red-700 ${
              isHovered ? 'w-auto min-w-[100px]' : 'w-[100px]'
            }`}
          >
            <img 
              src="/icons/youtube-white.png"
              alt="YouTube"
              className="w-6 h-auto"
            />
            <span className="truncate">Watch</span>
          </a>
        )}

        {project.links.type === 'pdf' && project.links.documents?.map((doc, docIndex) => (
          <a
            key={docIndex}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseButtonClasses} ${getButtonColor(doc.color)} ${
              isHovered ? 'w-auto min-w-[100px]' : 'w-[100px]'
            }`}
          >
            <img 
              src="/icons/pdf.png"
              alt="PDF"
              className="w-5 h-5"
            />
            <span className="truncate">{doc.name}</span>
          </a>
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className={`min-h-screen relative ${
      location.pathname === '/projects' ? 'pt-32 pb-16' : 'py-16'
    }`}>
      <div className="max-w-[1320px] w-full mx-auto px-4 relative">
        {/* Back button */}
        {location.pathname === '/projects' && (
          <div className="flex justify-start mb-12">
            <button
              onClick={handleBackToHome}
              className="group flex items-center gap-2 px-6 py-2 text-base font-medium text-white bg-black rounded-full transition-all duration-300 hover:scale-105"
            >
              <img
                src="/icons/arrow_left.png"
                alt="Back"
                className="w-4 h-4 invert rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Home
            </button>
          </div>
        )}
        {/* Projects Title */}
        <div className="flex justify-center mb-16">
          <h2 className={`relative text-4xl font-bold text-gray-900 ${
            location.pathname === '/' 
              ? 'px-8 py-3 rounded-full bg-white/30 backdrop-blur-sm shadow-lg'
              : ''
          }`}>
            Projects
          </h2>
        </div>
        {/* Preview Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {mainTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm
                ${activeFilter === tag 
                  ? 'bg-black text-white shadow-md scale-105' 
                  : 'bg-white/70 text-gray-600 hover:bg-white/80'}`}
            >
              {tag}
            </button>
          ))}
          {/* More Tags */}
          <div className="relative dropdown-container">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm
                ${isDropdownOpen 
                  ? 'bg-black text-white shadow-md scale-105' 
                  : 'bg-white/70 text-gray-600 hover:bg-white/80'}`}
            >
              More Tags
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
  
            <div
              className={`absolute z-20 mt-2 w-48 rounded-2xl shadow-xl border border-white/20 backdrop-blur-md transition-all duration-300 overflow-hidden
                ${isDropdownOpen
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 pointer-events-none transform -translate-y-2'}`}
            >
              <div className="p-2 space-y-1 bg-white/70">
                {otherTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveFilter(tag);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                      ${activeFilter === tag
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:bg-gray-100/80'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="relative" 
            ref={el => cardRefs.current[index] = el}
            style={{
              height: hoveredIndex === index 
                ? `${cardDimensions[index]?.expandedHeight || 680}px` 
                : `${cardDimensions[index]?.baseHeight || 580}px`,
              transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div
              className="bg-white/80 rounded-xl shadow-lg border border-white/20 h-full flex flex-col absolute w-full overflow-hidden"
              style={{
                transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: hoveredIndex === index ? 20 : hoveredIndex !== null ? 2 : 1,
                filter: hoveredIndex !== null && hoveredIndex !== index ? 'blur(2px)' : 'none',
                opacity: hoveredIndex !== null && hoveredIndex !== index ? '0.7' : '1'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-[250px] flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div 
                className="flex flex-col h-full"
                ref={el => contentRefs.current[index] = el}
              >
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 title transition-all duration-500">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4 tags transition-all duration-500">
                    {getSortedTags(project.tags).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-500
                          ${tag.toUpperCase() === activeFilter
                            ? 'bg-blue-100/80 text-blue-700'
                            : 'bg-gray-100/80 text-gray-700'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div 
                    className="flex-grow overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: hoveredIndex === index 
                        ? cardDimensions[index]?.descriptionMaxHeight || '200px'
                        : cardDimensions[index]?.previewHeight || '72px'
                    }}
                  >
                    <div 
                      ref={el => descriptionRefs.current[index] = el}
                      className={`description-content space-y-2 pr-2 transition-all duration-500 text-gray-600 ${
                        hoveredIndex === index 
                          ? 'overflow-y-auto scrollbar scrollbar-thumb-gray-400/50 scrollbar-track-transparent scrollbar-thin' 
                          : 'overflow-hidden'
                      }`}
                      style={{
                        maxHeight: '100%',
                        opacity: hoveredIndex === index || hoveredIndex === null ? '1' : '0',
                        transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(8px)'
                      }}
                    >
                      {formatDescription(project.description).map((item, i) => (
                        <div key={i} className="flex gap-2 text-left">
                          <span className="text-gray-400 flex-shrink-0">•</span>
                          <span className="flex-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    {hoveredIndex !== index && (
                      <>
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none transition-opacity duration-500"
                          style={{
                            background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)',
                            opacity: hoveredIndex === index ? '0' : '1'
                          }}
                        />
                        <div className="text-left text-sm text-gray-900 font-medium mt-2 transition-opacity duration-500"
                             style={{ opacity: hoveredIndex === index ? '0' : '1' }}>
                          Read more...
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div 
                  className="p-6 pt-0 mt-auto transition-all duration-500"
                  style={{
                    opacity: hoveredIndex === index || hoveredIndex === null ? '1' : '0',
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(8px)'
                  }}
                >
                  {renderProjectButtons(project, hoveredIndex === index)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* "More Projects" button */}
      {!showAll && filteredProjects.length >= limit && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate('/projects')}
              className="group flex items-center gap-2 px-8 py-3 text-lg font-medium text-white bg-black rounded-full transition-all duration-300 hover:scale-105"
            >
              More Projects
              <img
                src="/icons/arrow_right.png"
                alt="Mail"
                className="w-5 h-5 invert transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;