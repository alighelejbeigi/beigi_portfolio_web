"use client";
import React, { useState, useEffect } from "react";
import { Language, Project } from "./types";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import { ContactModal } from "./components/ContactModal";

export function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Handle document language & text direction for RTL/LTR support
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    if (language === "fa") {
      document.body.classList.add("fa-font");
    } else {
      document.body.classList.remove("fa-font");
    }
  }, [language]);

  // Handle scroll section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#07111a] text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Sticky Top Navbar */}
      <Header
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenContact={() => setContactModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Hero
        language={language}
        darkMode={darkMode}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* About Me Section */}
      <About language={language} darkMode={darkMode} />

      {/* Services Section */}
      <Services language={language} darkMode={darkMode} />

      {/* Portfolio Projects Section */}
      <Portfolio
        language={language}
        darkMode={darkMode}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Stats Counter Section */}
      <Stats language={language} darkMode={darkMode} />

      {/* Footer & Contact Information */}
      <Footer language={language} darkMode={darkMode} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        language={language}
        darkMode={darkMode}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        language={language}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
