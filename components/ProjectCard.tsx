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
      className="group relative bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/40 hover:border-orange-200 dark:hover:border-orange-500/40 transition-all duration-300 ease-in-out cursor-pointer h-full flex flex-col"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-stone-800 shadow-sm z-20">
          {project.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-stone-600 dark:text-stone-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs rounded border border-stone-100 dark:border-stone-700">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-stone-50 dark:bg-stone-800 text-stone-400 dark:text-stone-500 text-xs rounded border border-stone-100 dark:border-stone-700">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-orange-700 text-white p-2 rounded-full shadow-lg">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
