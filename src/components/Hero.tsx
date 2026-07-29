import React from 'react';
import { MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';
import { socialLinks } from '../data/portfolioData';

interface HeroProps {
  language: Language;
  darkMode: boolean;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, darkMode, onOpenContact }) => {
  const t = (key: string) => getTranslation(language, key);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#20b2aa]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Action Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
            <div className="inline-block">
              <span className="text-[#20b2aa] text-base md:text-lg font-semibold tracking-wider uppercase">
                {t('carousel_item.first_title')}
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {t('carousel_item.second_title')}
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-2 text-slate-400 font-medium text-base sm:text-lg">
              <span>{t('carousel_item.subject')}</span>
              <span className="flex items-center gap-1 text-[#20b2aa]">
                <MapPin className="w-4 h-4" />
                {t('carousel_item.location')}
              </span>
            </div>

            {/* Buttons & Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-3.5 bg-[#20b2aa] hover:bg-[#179b94] text-white font-bold text-sm rounded-lg shadow-lg shadow-[#20b2aa]/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('carousel_item.button')}</span>
              </button>

              <a
                href="#portfolio"
                className={`px-6 py-3.5 font-semibold text-sm rounded-lg border transition-all flex items-center gap-2 ${
                  darkMode
                    ? 'border-slate-700 text-slate-300 hover:border-[#20b2aa] hover:text-[#20b2aa]'
                    : 'border-slate-300 text-slate-700 hover:border-[#20b2aa] hover:text-[#20b2aa]'
                }`}
              >
                <span>{t('header.portfolio')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`p-2.5 rounded-lg transition-all transform hover:scale-110 ${
                    darkMode
                      ? 'bg-slate-800/80 hover:bg-[#20b2aa]/20 border border-slate-700'
                      : 'bg-white hover:bg-slate-100 shadow-sm border border-slate-200'
                  }`}
                >
                  <img
                    src={darkMode ? social.iconLight : social.iconDark}
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      // Fallback text if image missing
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* SVG Illustration Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div
                className={`absolute inset-0 rounded-3xl transform rotate-3 transition-transform hover:rotate-0 duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-tr from-[#20b2aa]/20 to-slate-800 border border-slate-800'
                    : 'bg-gradient-to-tr from-[#20b2aa]/10 to-slate-100 border border-slate-200 shadow-xl'
                }`}
              />

              <div className="relative z-10 p-6 w-full h-full flex items-center justify-center">
                <img
                  src="/assets/svg/guy.svg"
                  alt="Developer Illustration"
                  className="w-full h-full max-h-80 object-contain drop-shadow-xl"
                  onError={(e) => {
                    // Fallback to person.svg or placeholder icon
                    (e.target as HTMLImageElement).src = '/assets/svg/person.svg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
