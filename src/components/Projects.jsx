import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Globe, Sparkles } from "lucide-react";
import projectsData from "../data/projects.json";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

export default function Projects() {
  const sourceProjects =
    Array.isArray(projectsData) && projectsData.length > 0
      ? projectsData
      : [];

  // Debug logging
  console.log("Projects component rendered");
  console.log("Projects data:", projectsData);
  console.log("Source projects:", sourceProjects);

  useEffect(() => {
    console.log("Projects component mounted");
    console.log("Window width:", window.innerWidth);
    console.log("User agent:", navigator.userAgent);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'red', 
      padding: '20px',
      color: 'white',
      fontSize: '18px'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>PROJECTS SECTION TEST</h1>
      <p>If you can see this red background with white text, the component is loading.</p>
      <p>Projects loaded: {sourceProjects.length}</p>
      <p>Theme: {document.documentElement.classList.contains('dark') ? 'Dark' : 'Light'}</p>
      <p>Screen: {window.innerWidth}x{window.innerHeight}</p>
      
      {sourceProjects.length > 0 ? (
        <div style={{ marginTop: '20px' }}>
          <h2>Projects Found:</h2>
          {sourceProjects.slice(0, 3).map((project, index) => (
            <div key={index} style={{ 
              margin: '10px 0', 
              padding: '10px', 
              backgroundColor: 'white', 
              color: 'black',
              borderRadius: '8px'
            }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No projects found!</p>
      )}
    </div>
  );
}
