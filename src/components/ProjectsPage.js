import React from 'react';
import Projects from '../components/Projects';
import Navbar from './NavBar';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Navbar/>
      <Projects showAll={true} />
    </div>
  );
};

export default ProjectsPage;