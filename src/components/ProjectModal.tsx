import React from 'react';
import { X, ExternalLink, Github, Cpu, Layers } from 'lucide-react';
import { Language, Project } from '../types';
import { getTranslation } from '../i18n/translations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  language: Language;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  language,
  darkMode,
}) => {
  if (!project) return null;

  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity">
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl p-6 sm:p-8 ${
          darkMode
            ? 'bg-[#07111a] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full transition-colors ${
            darkMode ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-600'
          }`}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Project Header */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#20b2aa] uppercase mb-2">
          <Layers className="w-4 h-4" />
          <span>{t(`project.${project.typeKey}`)}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t(project.titleKey)}</h3>

        {/* Project Photo */}
        <div
          className={`rounded-xl p-4 mb-6 flex items-center justify-center ${
            darkMode ? 'bg-slate-950/80 border border-slate-800' : 'bg-slate-100 border border-slate-200'
          }`}
        >
          <img
            src={project.appPhotos}
            alt={t(project.titleKey)}
            className="max-h-72 object-contain rounded"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/images/projects/comingSoon.jpg';
            }}
          />
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-bold uppercase text-slate-400">Description</h4>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            {t(project.descriptionKey)}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-sm font-bold uppercase text-slate-400 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#20b2aa]" />
            {t('project.technology_used')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techUsed.map((tech, idx) => (
              <div
                key={idx}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 border ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <img src={tech.logo} alt={tech.name} className="w-4 h-4 object-contain" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800/60">
          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-colors ${
              darkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {t('share.close')}
          </button>

          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#20b2aa] hover:bg-[#179b94] text-white text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>{t('project.github_link_button')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
