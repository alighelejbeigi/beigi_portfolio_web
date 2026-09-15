import React from 'react';
import { Code, GraduationCap, Cpu } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';
import { technologies } from '../data/portfolioData';

interface AboutProps {
  language: Language;
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ language, darkMode }) => {
  const t = (key: string) => getTranslation(language, key);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#20b2aa] font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <Code className="w-4 h-4" />
            {t('about_me.about_me_title')}
          </span>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-snug ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t('about_me.title')}
          </h2>
        </div>

        {/* Bio Card */}
        <div
          className={`p-8 md:p-10 rounded-2xl mb-16 transition-all ${
            darkMode
              ? 'bg-slate-900/60 border border-slate-800 shadow-xl'
              : 'bg-white border border-slate-200 shadow-md'
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-[#20b2aa]/10 rounded-xl text-[#20b2aa] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3
                className={`text-lg font-bold ${
                  darkMode ? 'text-slate-100' : 'text-slate-800'
                }`}
              >
                Computer Science Graduate & Software Engineer
              </h3>
              <p className="text-xs text-[#20b2aa] font-medium">
                Bahonar University of Shiraz (B.S. 2018)
              </p>
            </div>
          </div>

          <p
            className={`text-base md:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {t('about_me.description')}
          </p>
        </div>

        {/* Technology Stack Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#20b2aa]/10 rounded-lg text-[#20b2aa]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3
              className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {t('about_me.technology_title')}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className={`p-4 rounded-xl border flex items-center gap-3 transition-all duration-200 transform hover:-translate-y-1 group ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-[#20b2aa]/50 hover:bg-slate-800/80'
                    : 'bg-white border-slate-200 hover:border-[#20b2aa]/50 hover:shadow-md'
                }`}
              >
                <div className="w-10 h-10 p-1.5 rounded-lg bg-slate-100/10 flex items-center justify-center shrink-0">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <span
                  className={`font-semibold text-sm transition-colors group-hover:text-[#20b2aa] ${
                    darkMode ? 'text-slate-200' : 'text-slate-800'
                  }`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
