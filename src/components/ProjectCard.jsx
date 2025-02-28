import React, { useState } from 'react';
import { Github, Database } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 
        className="font-bold text-lg mb-2"
        dangerouslySetInnerHTML={{ __html: project.titleHtml }}
      />
      <p 
        className="text-gray-700 mb-4"
        dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}  // Changed from description
      />
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a 
          href={project.github} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
        {project.doi && (
          <a 
            href={project.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <Database className="w-4 h-4" /> DOI
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;