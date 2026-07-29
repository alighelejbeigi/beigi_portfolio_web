import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Sparkles } from 'lucide-react';
import { Language, Project } from '../types';
import { getTranslation } from '../i18n/translations';
import { projects } from '../data/portfolioData';

interface PortfolioProps {
  language: Language;
  darkMode: boolean;
  onSelectProject: (p: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  language,
  darkMode,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'app' | 'package' | 'dart'>('all');

  const t = (key: string) => getTranslation(language, key);

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const filterTabs = [
    { id: 'all', labelKey: 'project.all' },
    { id: 'app', labelKey: 'project.apps' },
    { id: 'package', labelKey: 'project.packages' },
    { id: 'dart', labelKey: 'project.dart_projects' },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[#20b2aa] font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <Layers className="w-4 h-4" />
            {t('home.portfolio')}
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Featured Works & Projects
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {t('home.description')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#20b2aa] text-white shadow-lg shadow-[#20b2aa]/25'
                  : darkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 hover:border-[#20b2aa]/50 hover:shadow-xl'
                  : 'bg-white border-slate-200 hover:border-[#20b2aa]/50 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Card Image Cover */}
              <div
                className={`relative h-56 p-4 flex items-center justify-center overflow-hidden cursor-pointer ${
                  darkMode ? 'bg-slate-950/60' : 'bg-slate-100'
                }`}
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.appPhotos}
                  alt={t(project.titleKey)}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/images/projects/comingSoon.jpg';
                  }}
                />
                <span className="absolute top-3 left-3 bg-[#20b2aa]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                  {t(`project.${project.typeKey}`)}
                </span>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {t(project.titleKey)}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {t(project.descriptionKey)}
                  </p>
                </div>

                {/* Tech Used Icons & Link Button */}
                <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.techUsed.map((tech, idx) => (
                      <div
                        key={idx}
                        title={tech.name}
                        className="w-6 h-6 p-0.5 rounded bg-slate-800/20 flex items-center justify-center"
                      >
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#20b2aa] hover:bg-[#179b94] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{t(project.buttonTextKey)}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
