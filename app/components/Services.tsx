import React from 'react';
import { Smartphone, Globe, Layout, Code2, Download, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';
import { services } from '../data/portfolioData';

interface ServicesProps {
  language: Language;
  darkMode: boolean;
}

export const Services: React.FC<ServicesProps> = ({ language, darkMode }) => {
  const t = (key: string) => getTranslation(language, key);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-10 h-10 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-10 h-10 text-amber-400" />;
      case 'Layout':
        return <Layout className="w-10 h-10 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-10 h-10 text-orange-400" />;
      default:
        return <Code2 className="w-10 h-10 text-[#20b2aa]" />;
    }
  };

  const handleDownloadCV = () => {
    window.open(
      'https://drive.google.com/file/d/1dnAJO65fI66MpzAasGNEj6q8tB6aa_gI/view',
      '_blank'
    );
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with Experience & Download CV */}
        <div
          className={`p-8 md:p-10 rounded-2xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6 ${
            darkMode
              ? 'bg-gradient-to-r from-slate-900 to-slate-800/80 border border-slate-800 shadow-xl'
              : 'bg-gradient-to-r from-teal-50 to-emerald-50 border border-slate-200 shadow-md'
          }`}
        >
          <div className="flex items-center gap-4 text-center md:text-left rtl:md:text-right">
            <div className="p-4 bg-[#20b2aa]/20 text-[#20b2aa] rounded-2xl hidden sm:block">
              <Briefcase className="w-8 h-8" />
            </div>
            <div>
              <h3
                className={`text-xl sm:text-2xl font-bold whitespace-pre-line ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {t('service.experience_title')}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Delivering high performance mobile & web solutions
              </p>
            </div>
          </div>

          <button
            onClick={handleDownloadCV}
            className="px-6 py-3.5 bg-[#20b2aa] hover:bg-[#179b94] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#20b2aa]/20 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>{t('service.CV_button')}</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t('service.title')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {t('service.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-2xl text-center transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center gap-4 ${
                darkMode
                  ? 'bg-slate-900/60 border border-slate-800/80 hover:border-[#20b2aa]/60 hover:shadow-lg'
                  : 'bg-white border border-slate-200 hover:border-[#20b2aa]/60 shadow-sm hover:shadow-md'
              }`}
            >
              <div
                className={`p-4 rounded-2xl flex items-center justify-center ${
                  darkMode ? 'bg-slate-800' : 'bg-slate-100'
                }`}
              >
                {getServiceIcon(service.icon)}
              </div>

              <h3
                className={`text-lg font-bold ${
                  darkMode ? 'text-slate-100' : 'text-slate-800'
                }`}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
