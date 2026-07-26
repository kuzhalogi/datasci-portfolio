import React, { useState } from 'react';
import { Menu, X, Mail, MapPin, Briefcase, GraduationCap, Sun, Moon } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import SkillsGrid from './components/SkillsGrid';
import {
  PROJECTS, PORTFOLIO_OWNER, PORTFOLIO_BIO, PORTFOLIO_ROLE, ABOUT_PARAGRAPHS,
  AVAILABILITY, AVAILABILITY_SENTENCE, LOCATION, EMAIL, GITHUB_URL, LINKEDIN_URL,
  EXPERIENCE, EDUCATION, LANGUAGES,
} from './constants';
import { Category, Project } from './types';

const NAV_ITEMS = ['Experience', 'Projects', 'Skills', 'About', 'Contact'];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  const categories: Category[] = ['All', 'Machine Learning', 'Computer Vision', 'Data Analytics', 'Data Engineering', 'Cloud & MLOps'];

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

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) { /* ignore */ }
  };

  const ThemeToggle = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:text-orange-700 dark:hover:text-orange-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors ${className}`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );

  const socialLink = "p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:text-orange-700 dark:hover:text-orange-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors";

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-100 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-stone-900 dark:bg-stone-100 rounded-lg flex items-center justify-center text-white dark:text-stone-900 font-bold text-lg mr-3 tracking-tight">
                KM
              </div>
              <span className="font-bold text-xl tracking-tight text-stone-900 dark:text-stone-100">{PORTFOLIO_OWNER}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-stone-600 dark:text-stone-300 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-900 dark:text-stone-100 hover:text-orange-700 dark:hover:text-orange-400 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-stone-950 border-b border-stone-100 dark:border-stone-800 shadow-xl py-4 px-4 flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-stone-900 dark:text-stone-100 font-medium py-2 px-4 hover:bg-stone-50 dark:hover:bg-stone-800 rounded-lg"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Header / Intro */}
      <header id="home" className="pt-28 pb-14 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-600 mr-2" />
            {AVAILABILITY}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-3">
            {PORTFOLIO_OWNER}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-stone-700 dark:text-stone-200 mb-5">
            Data and <span className="text-orange-700 dark:text-orange-500">machine learning</span> engineer
          </p>
          <p className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl leading-relaxed mb-6">
            {PORTFOLIO_BIO}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center text-stone-600 dark:text-stone-300 text-sm font-medium">
              <MapPin size={16} className="mr-2 text-orange-700 dark:text-orange-500" />{LOCATION}
            </span>
            <span className="hidden sm:inline text-stone-300 dark:text-stone-700" aria-hidden="true">·</span>
            <div className="flex items-center gap-1">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={socialLink}>
                <SiGithub size={20} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialLink}>
                <SiLinkedin size={20} />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className={socialLink}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Experience & Education */}
      <section id="experience" className="py-20 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center mb-8">
                <Briefcase size={22} className="text-orange-700 dark:text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100">Experience</h2>
              </div>
              <div className="space-y-8">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.company} className="relative pl-6 border-l-2 border-stone-200 dark:border-stone-800">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-orange-700 dark:bg-orange-500" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{exp.role}</h3>
                      <span className="text-sm font-medium text-stone-400 dark:text-stone-500">{exp.period}</span>
                    </div>
                    <div className="text-orange-700 dark:text-orange-500 font-medium mb-2">{exp.company} · {exp.location}</div>
                    <ul className="space-y-1.5">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <GraduationCap size={22} className="text-orange-700 dark:text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100">Education</h2>
              </div>
              <div className="space-y-8">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="relative pl-6 border-l-2 border-stone-200 dark:border-stone-800">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-orange-700 dark:bg-orange-500" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{edu.degree}</h3>
                      <span className="text-sm font-medium text-stone-400 dark:text-stone-500">{edu.period}</span>
                    </div>
                    <div className="text-orange-700 dark:text-orange-500 font-medium">{edu.school}</div>
                    {edu.detail && <div className="text-stone-500 dark:text-stone-400 text-sm mt-1">{edu.detail}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-4">Featured Work</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">
              Selected projects across the full data lifecycle, from pipelines to models to dashboards.
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
                    ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-lg'
                    : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700 hover:border-orange-300 dark:hover:border-orange-500 hover:text-orange-700 dark:hover:text-orange-400'
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
            <div className="text-center py-20 text-stone-400 dark:text-stone-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-stone-50 dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3">Skills & Tools</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl">
              The stack I reach for across data engineering, machine learning, and analytics.
            </p>
          </div>
          <SkillsGrid />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100 mb-6">About Me</h2>
          <div className="text-lg text-stone-600 dark:text-stone-300 space-y-4 leading-relaxed">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
            <span className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider">Languages</span>
            <p className="mt-1 text-stone-700 dark:text-stone-300 font-medium">
              {LANGUAGES.map(l => `${l.name} (${l.level})`).join(' · ')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
            <p className="text-stone-400 text-lg mb-10">
              {AVAILABILITY_SENTENCE} If your team has interesting data problems, I'd be glad to talk.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center px-8 py-4 bg-orange-700 rounded-lg font-bold hover:bg-orange-800 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                {EMAIL}
              </a>
              <div className="flex justify-center gap-4 items-center">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors text-stone-300 hover:text-white">
                  <SiGithub size={24} />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors text-stone-300 hover:text-white">
                  <SiLinkedin size={24} />
                </a>
              </div>
            </div>

            <div className="text-sm text-stone-500 border-t border-stone-800 pt-8">
              &copy; {new Date().getFullYear()} {PORTFOLIO_OWNER} · {PORTFOLIO_ROLE}
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
