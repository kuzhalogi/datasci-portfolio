import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white dark:bg-stone-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col animate-[fadeIn_0.2s_ease-out]">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-stone-800/80 rounded-full hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
        >
          <X size={24} className="text-stone-800 dark:text-stone-100" />
        </button>

        <div className="relative h-64 sm:h-80 w-full shrink-0 bg-stone-900">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 w-full">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-orange-700 bg-white/90 rounded-sm uppercase">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">Overview</h3>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {project.myRole && (
                <div className="border-l-2 border-orange-700 dark:border-orange-500 pl-4">
                  <h3 className="text-sm font-bold text-orange-700 dark:text-orange-500 uppercase tracking-wider mb-1">My Role</h3>
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                    {project.myRole}
                  </p>
                </div>
              )}

              {project.features && (
                <div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-stone-600 dark:text-stone-300">
                        <CheckCircle size={18} className="text-orange-700 dark:text-orange-500 mr-2 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-xl border border-stone-100 dark:border-stone-700">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">Technical Challenges</h3>
                  <p className="text-stone-600 dark:text-stone-300 italic">"{project.challenges}"</p>
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm font-medium rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-100 dark:border-stone-800">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-white transition-colors font-medium"
                  >
                    <Github size={20} className="mr-2" />
                    View Source
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors font-medium"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
