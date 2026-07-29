import React from 'react';
import { Award, Code, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';
import { statsData } from '../data/portfolioData';

interface StatsProps {
  language: Language;
  darkMode: boolean;
}

export const Stats: React.FC<StatsProps> = ({ language, darkMode }) => {
  const t = (key: string) => getTranslation(language, key);

  return (
    <section className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 md:p-12 rounded-3xl border shadow-xl ${
            darkMode
              ? 'bg-slate-900/80 border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-slate-800/40">
            {statsData.map((stat, index) => (
              <div key={index} className="pt-6 md:pt-0 flex flex-col items-center justify-center space-y-2">
                <span className="text-4xl md:text-5xl font-black text-[#20b2aa] tracking-tight">
                  {stat.value}
                </span>
                <p
                  className={`text-sm md:text-base font-bold whitespace-pre-line leading-snug ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {t(stat.labelKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
