import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Globe, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  darkMode,
  setDarkMode,
  onOpenContact,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'blog') {
      window.open('https://medium.com/@alighelejbeigi', '_blank');
      return;
    }
    if (id === 'contact') {
      onOpenContact();
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', labelKey: 'header.home' },
    { id: 'about', labelKey: 'header.about' },
    { id: 'services', labelKey: 'header.services' },
    { id: 'portfolio', labelKey: 'header.portfolio' },
    { id: 'contact', labelKey: 'header.contact' },
    { id: 'blog', labelKey: 'header.blog' },
  ];

  const t = (key: string) => getTranslation(language, key);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#07111a]/90 backdrop-blur-md shadow-lg border-b border-slate-800'
            : 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <img
            src="/assets/images/logo.png"
            alt="Ali Ghelej Beigi Logo"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div>
            <span className="font-bold text-lg tracking-wide text-[#20b2aa] block">
              Ali Ghelej Beigi
            </span>
            <span className="text-xs text-slate-400 block -mt-1 font-medium">
              Software Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'text-[#20b2aa]'
                  : darkMode
                  ? 'text-slate-300 hover:text-[#20b2aa]'
                  : 'text-slate-700 hover:text-[#20b2aa]'
              }`}
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        {/* Action Controls: Theme & Language */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div
            className={`flex items-center rounded-lg p-1 text-xs font-semibold ${
              darkMode ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Globe className="w-3.5 h-3.5 mx-1.5 text-[#20b2aa]" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-[#20b2aa] text-white'
                  : 'hover:text-[#20b2aa]'
              }`}
            >
              ENG
            </button>

            <button
              onClick={() => setLanguage('fa')}
              className={`px-2 py-1 rounded transition-colors fa-font cursor-pointer ${
                language === 'fa'
                  ? 'bg-[#20b2aa] text-white'
                  : 'hover:text-[#20b2aa]'
              }`}
            >
              فا
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-800 text-amber-400 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              darkMode
                ? 'bg-slate-800 text-amber-400'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`p-2 rounded-lg cursor-pointer ${
              darkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 pt-4 pb-6 border-b transition-all ${
            darkMode
              ? 'bg-[#07111a] border-slate-800 text-slate-200'
              : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-base font-semibold py-2 transition-colors border-b ${
                  darkMode ? 'border-slate-800/60' : 'border-slate-100'
                } ${
                  activeSection === item.id ? 'text-[#20b2aa]' : 'hover:text-[#20b2aa]'
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium text-slate-400">
                Language / زبان:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs rounded font-semibold ${
                    language === 'en'
                      ? 'bg-[#20b2aa] text-white'
                      : darkMode
                      ? 'bg-slate-800 text-slate-300'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('fa')}
                  className={`px-3 py-1 text-xs rounded font-semibold fa-font ${
                    language === 'fa'
                      ? 'bg-[#20b2aa] text-white'
                      : darkMode
                      ? 'bg-slate-800 text-slate-300'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  فارسی
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
