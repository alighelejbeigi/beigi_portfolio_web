import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, Heart } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';
import { socialLinks } from '../data/portfolioData';

interface FooterProps {
  language: Language;
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ language, darkMode }) => {
  const t = (key: string) => getTranslation(language, key);

  return (
    <footer
      id="contact"
      className={`pt-16 pb-12 border-t ${
        darkMode ? 'bg-[#040b11] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Address */}
          <div
            className={`p-6 rounded-2xl border flex items-start gap-4 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="p-3 bg-[#20b2aa]/10 rounded-xl text-[#20b2aa] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                {t('footer.address')}
              </h4>
              <p
                className={`text-sm font-semibold ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                {t('footer.my_address_one')}, {t('footer.my_address_two')}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div
            className={`p-6 rounded-2xl border flex items-start gap-4 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="p-3 bg-[#20b2aa]/10 rounded-xl text-[#20b2aa] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                {t('footer.phone')}
              </h4>
              <a
                href={`tel:${t('footer.my_phone_number')}`}
                className={`text-sm font-semibold hover:text-[#20b2aa] transition-colors ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                {t('footer.my_phone_number')}
              </a>
            </div>
          </div>

          {/* Email */}
          <div
            className={`p-6 rounded-2xl border flex items-start gap-4 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="p-3 bg-[#20b2aa]/10 rounded-xl text-[#20b2aa] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                {t('footer.email')}
              </h4>
              <a
                href={`mailto:${t('footer.my_email')}`}
                className={`text-xs sm:text-sm font-semibold hover:text-[#20b2aa] transition-colors break-all ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                {t('footer.my_email')}
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div
            className={`p-6 rounded-2xl border flex items-start gap-4 ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="p-3 bg-[#20b2aa]/10 rounded-xl text-[#20b2aa] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                {t('footer.whatsapp')}
              </h4>
              <a
                href="https://wa.me/989354492839"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold hover:text-[#20b2aa] transition-colors ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800/40">
          <div className="flex items-center gap-3">
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
                    : 'bg-white hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <img
                  src={darkMode ? social.iconLight : social.iconDark}
                  alt={social.name}
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-500 font-medium text-center">
            {t('footer.developed')}
          </p>
        </div>
      </div>
    </footer>
  );
};
