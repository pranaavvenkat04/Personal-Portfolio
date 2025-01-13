import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import ProjectsPage from './components/ProjectsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
