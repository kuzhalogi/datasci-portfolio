import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 ease-in-out cursor-pointer h-full flex flex-col"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-800 shadow-sm z-20">
          {project.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-100">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-400 text-xs rounded border border-gray-100">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-red-600 text-white p-2 rounded-full shadow-lg">
             <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
