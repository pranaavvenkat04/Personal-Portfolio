import React, { useState, useRef, useEffect } from "react";

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [linePosition, setLinePosition] = useState({ top: 0, height: 0 });
  const firstNodeRef = useRef(null);
  const lastNodeRef = useRef(null);
  const timelineRef = useRef(null);
  const animationFrameRef = useRef(null);

  const calculateTimelineDimensions = () => {
    if (firstNodeRef.current && lastNodeRef.current) {
      const firstNode = firstNodeRef.current.getBoundingClientRect();
      const lastNode = lastNodeRef.current.getBoundingClientRect();
      const timelineContainer = timelineRef.current.getBoundingClientRect();

      const relativeFirstTop = firstNode.top - timelineContainer.top;
      const relativeLastTop = lastNode.top - timelineContainer.top;

      const lineTop = relativeFirstTop + firstNode.height / 2;
      const lineHeight = relativeLastTop - relativeFirstTop;

      setLinePosition({
        top: lineTop,
        height: lineHeight,
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(calculateTimelineDimensions);
    };

    const observer = new ResizeObserver(() => {
      calculateTimelineDimensions();
    });

    window.addEventListener("resize", handleResize);
    calculateTimelineDimensions();

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    requestAnimationFrame(calculateTimelineDimensions);
  };

  const YearBadge = ({ year, className = "" }) => (
    <div
      className={`inline-block font-medium text-sm text-white bg-black px-2 py-1 rounded-md ${className}`}
    >
      {year}
    </div>
  );

  const experiences = [
    {
      year: "Present",
      position: "Project Manager",
      company: "Entrepreneurship and Technology Innovation Center",
      duration: "3 years",
      description: [
        "Manage a team creating ETIC's first-ever AI system, modeled to provide solutions to researchers pursuing medical research and businesses looking to increase productivity and revenue.",
        "Contracted by NASA's Technology Transfer Office to develop and deliver 8 high-end patented prototypes.",
        "Project managed 3 to 5 multi-disciplinary engineers to create patent prototypes. Responsible for setting timelines, delegating tasks, monitoring project progress, coordinating meetings, and reporting to NASA team members.",
        "Designed and implemented software solutions for 15+ projects across diverse industries including healthcare, energy, aerospace, manufacturing, education, robotics, and AI, driving increased revenue and productivity for clients.",
      ],
    },
    {
      year: "Present",
      position: "SGA Treasurer",
      company: "New York Institute of Technology",
      duration: "7 months",
      description: [
        "Manage NYIT SGA budget allocations and expenditures, ensuring alignment with organizational goals.",
        "Develop and present comprehensive financial reports to executive board and general assembly meetings.",
        "Participate in leadership development programs and represent SGA in campus-wide committees.",
      ],
    },
    {
      year: "2024",
      position: "Apple Pathways Alliance Pathfinder",
      company: "Freelance",
      duration: "1 year",
      description: [
        "Selected to participate in an exclusive program (2 candidates per university) that offers unparalleled access to esteemed industry experts within the Apple technology sector, enhancing my skills and insights crucial for contributing effectively to your team.",
        "Collaborating closely with Apple engineers to develop technical and professional skills and discuss future career goals.",
      ],
    },
    {
      year: "2022",
      position: "Software Engineer Intern",
      company: "Acutis Diagnostics",
      duration: "2 months",
      description: [
        "Worked with senior web developers to create a program that allows patients to view their reports disclosing any illnesses or diseases. Fabricated a web-based software that attaches to an SQL database that contains the patient's pathology test results and created a unique PDF with Acutis Diagnostics. The application was created using Blazor WebAssembly, C#, QuestPDF, and Microsoft's Azure Active Directory as an authentication platform to give patients access to make the viewing more secure and streamlined.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 min-h-screen">
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="relative text-4xl font-bold text-gray-900 px-8 py-3 rounded-full bg-white/30 backdrop-blur-sm shadow-lg">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div ref={timelineRef} className="relative ml-8 md:ml-32">
            {/* Timeline Bubble Background */}
            <div 
              className="absolute left-2 w-16 bg-white/30 backdrop-blur-sm rounded-full -translate-x-1/2 transition-all duration-300 ease-in-out"
              style={{
                height: `${linePosition.height + 32}px`,
                top: `${linePosition.top - 16}px`,
              }}
            />
            
            {/* Timeline Line */}
            <div
              className="absolute left-2 w-0.5 bg-gray-300 -translate-x-1/2 opacity-60 transition-all duration-300 ease-in-out z-10"
              style={{
                height: `${linePosition.height}px`,
                top: `${linePosition.top}px`,
              }}
            />

            {/* Experience Bubble Creation */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-8 last:mb-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <YearBadge
                  year={exp.year}
                  className="absolute left-[-100px] top-1/2 -translate-y-1/2 hidden md:block"
                />

                <div
                  ref={
                    index === 0
                      ? firstNodeRef
                      : index === experiences.length - 1
                      ? lastNodeRef
                      : null
                  }
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-300 
                    transition-all duration-300 ease-in-out z-20
                    ${hoveredIndex === index ? "bg-black scale-125" : "bg-white"}
                    hover:bg-black`}
                />

                <div className="pl-16">
                  <div
                    className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full
                      transform transition-all duration-300 ease-in-out
                      ${hoveredIndex === index ? "scale-[1.02]" : "scale-100"}
                      hover:shadow-lg`}
                    onClick={() => toggleExpanded(index)}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                      <div>
                        <div className="md:hidden mb-2 flex">
                          <YearBadge year={exp.year} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {exp.position}
                        </h3>
                        <div className="text-gray-600 mt-1">{exp.company}</div>
                      </div>
                      <span className="text-gray-500 text-sm whitespace-nowrap md:ml-4 mt-2 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>

                    <div
                      className={`transition-all duration-500 ease-in-out
                        ${
                          expandedIndex === index
                            ? "max-h-[40vh] opacity-100 mt-4"
                            : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:mt-4"
                        }
                        overflow-hidden`}
                    >
                      <div className="text-gray-600 md:overflow-visible overflow-y-auto max-h-[35vh] pr-2 space-y-2">
                        {exp.description.map((item, i) => (
                          <div key={i} className="flex gap-2">
                            <span className="text-gray-400 flex-shrink-0">•</span>
                            <span className="flex-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;