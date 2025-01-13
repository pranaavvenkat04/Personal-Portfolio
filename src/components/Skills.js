import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: "/languages/python.png",
      category: "Programming Language"
    },
    {
      name: "HTML",
      icon: "/languages/html.png",
      category: "Markup Language"
    },
    {
      name: "CSS",
      icon: "/languages/css-3.png",
      category: "User Interface"
    },
    {
      name: "C#",
      icon: "/languages/c-sharp.png",
      category: "Programming Language"
    },
    {
      name: "Java",
      icon: "/languages/java.png",
      category: "Programming Language"
    },
    {
      name: "React",
      icon: "/languages/react.png",
      category: "Framework"
    },
    {
      name: "TailwindCSS",
      icon: "/languages/tailwind-css.png",
      category: "User interface"
    },
    {
      name: "Firebase",
      icon: "/languages/firebase.png",
      category: "Database"
    },
  ];

  return (
    <section id="skills" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Technical Skills
        </h2>
        
        {/* Skills Grid with Logo*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border border-gray-100 
                        flex items-center space-x-3 transition-all duration-300 ease-in-out hover:scale-105 
                        hover:shadow-lg hover:bg-white/90"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50/90 rounded-lg flex-shrink-0">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 transition-transform duration-200 hover:scale-110"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;