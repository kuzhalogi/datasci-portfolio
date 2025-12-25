import React, { useState } from 'react';
import { Menu, X, Mail, Terminal } from 'lucide-react';
import { SiGithub, SiLinkedin} from 'react-icons/si';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import SkillsChart from './components/SkillsChart';
import { PROJECTS, PORTFOLIO_OWNER, PORTFOLIO_BIO } from './constants';
import { Category, Project } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories: Category[] = ['All', 'Machine Learning', 'Computer Vision', 'Data Analytics', 'Data Engineering'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                DS
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">{PORTFOLIO_OWNER}</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-red-600 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 hover:text-red-600 transition-colors p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-4">
             {['About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-900 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
                >
                  {item}
                </button>
              ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-6">
            <Terminal size={14} className="mr-2" />
            Data Science & Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
            Turning raw data into <span className="text-red-600 relative inline-block">
              intelligence
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
            {PORTFOLIO_BIO}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg font-medium hover:border-gray-900 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About & Skills Grid */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  I work on data problems with a focus on clean workflows, clear decisions, and dependable results. I study how models behave, how data changes over time, and how to build systems that stay stable. I focus on practical methods that support training, validation, and deployment.
                </p>
                <p className="mb-4">
                  My goal is to build: <strong>solutions that stay simple, measurable, and useful.</strong>. I focus on data quality, model reliability, and clear communication.
                </p>
                <p>
                  I enjoy learning new tools and improving my process through steady practice.
                </p>
              </div>
              <div className="flex gap-6">
                <div>
                   <span className="block text-4xl font-bold text-gray-900">2+</span>
                   <span className="text-sm text-gray-500 uppercase tracking-wide">Years Exp.</span>
                </div>
                <div>
                   <span className="block text-4xl font-bold text-gray-900">10+</span>
                   <span className="text-sm text-gray-500 uppercase tracking-wide">Projects</span>
                </div>
                {/* <div>
                   <span className="block text-4xl font-bold text-gray-900">100%</span>
                   <span className="text-sm text-gray-500 uppercase tracking-wide">Commitment</span>
                </div> */}
              </div>
            </div>
            
            <div id="skills" className="relative">
              <SkillsChart />
              <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Set of projects showcasing skills
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-red-200 hover:text-red-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
           <div className="text-center py-20 text-gray-400">
             No projects found in this category.
           </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to collaborate?</h2>
            <p className="text-gray-400 text-lg mb-10">
              I'm currently available for 6 months End of studies Internship and future full-time opportunities.
              If you have a project that needs some data magic, let's talk.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
               <a 
                 href="mailto:kuzhalogi.murthy@epita.fr" 
                 className="flex items-center justify-center px-8 py-4 bg-red-600 rounded-lg font-bold hover:bg-red-700 transition-colors"
               >
                 <Mail className="mr-2" size={20} />
                 kuzhalogi.murthy@epita.fr
               </a>
               <div className="flex justify-center gap-4 items-center">
                 <a href="https://github.com/kuzhalogi" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white">
                   <SiGithub size={24} />
                 </a>
                 <a href="https://linkedin.com/in/mkuzhalogi" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-300 hover:text-white">
                   <SiLinkedin size={24} />
                 </a>
               </div>
            </div>
            
            <div className="text-sm text-gray-500 border-t border-gray-800 pt-8">
              &copy; {new Date().getFullYear()} {PORTFOLIO_OWNER}. All rights reserved.
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    
    </div>
  );
};

export default App;
