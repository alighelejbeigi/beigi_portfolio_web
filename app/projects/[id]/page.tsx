import { projects } from "../../data/portfolioData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

// Tuye Next.js jadid, params yek Promise hast
type Props = {
  params: Promise<{ id: string }>;
};

// 1. Metadata kooze-gar baraye SEO (Mix-e Farsi va English)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // Await kardane params (Hal-e Error)
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  // Keyword haye ghavi baraye Google
  const baseKeywords = [
    "Ali Ghelej Beigi",
    "علی قلیچ بیگی",
    "Flutter Developer",
    "برنامه نویس فلاتر",
    "React",
    "Next.js",
    "توسعه دهنده موبایل",
    "نمونه کار برنامه نویسی",
    "سورس کد",
    project.category,
  ];

  // Ezafe kardane esm-e technology-ha be keyword-ha (masalan Dart, API, etc.)
  const techKeywords = project.techUsed.map((t) => t.name);

  return {
    title: `${project.id.replace(/_/g, " ").toUpperCase()} | Ali Qelichbeigi`,
    description: `Source code and details about ${project.id} developed by Ali Ghelej Beigi in Shiraz, Iran. سورس و توضیحات پروژه ${project.id} توسط علی قلیچ بیگی.`,
    keywords: [...baseKeywords, project.id, ...techKeywords],
    alternates: {
      canonical: `https://alighelejbeigi.github.io/projects/${project.id}`, // Canonical URL baraye SEO
    },
  };
}

// 2. Tolid-e page-ha baraye Build Static
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// 3. UI-e Asli (Inja ham bayad async bashe)
export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params; // Await kardane params (Hal-e Error)
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#07111a] text-slate-100 p-8 md:p-20 font-sans">
      <Link
        href="/"
        className="text-[#20b2aa] hover:underline mb-8 inline-block font-bold text-sm"
      >
        &larr; Back to Portfolio (بازگشت به صفحه اصلی)
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Title-haye bozorg baraye h1 (SEO Header 1) */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 uppercase text-white">
          {project.id.replace(/_/g, " ")}
        </h1>
        <h2 className="text-slate-400 mb-10 font-medium">
          Mobile & Web Application Developed by Ali Qelichbeigi | علی قلیچ بیگی
        </h2>

        <div className="bg-slate-900/80 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          {/* Aks ba Image Next.js (Optimize shode) */}
          <div className="relative w-full h-64 sm:h-96 mb-10 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/50">
            <Image
              src={project.appPhotos}
              alt={`${project.id} Source Code by Ali Ghelej Beigi`} // Alt tag baraye Image SEO
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">
            Project Overview
          </h3>
          <p className="text-slate-300 leading-relaxed mb-8 text-base sm:text-lg">
            This project represents my work in{" "}
            <strong className="text-[#20b2aa]">{project.category}</strong>{" "}
            development. As a software engineer based in Shiraz, I focus on
            writing clean, scalable, and optimized code using the best
            practices.
            <br />
            <br />
            <span className="opacity-70 text-sm leading-loose fa-font">
              این پروژه بخشی از نمونه کارهای من (علی قلیچ بیگی) در زمینه توسعه
              نرم‌افزار است. برای مشاهده کدهای سورس، ساختار معماری و پیاده‌سازی،
              می‌توانید به لینک گیت‌هاب در پایین مراجعه کنید.
            </span>
          </p>

          <h3 className="text-xl font-bold mb-4 text-white">
            Technologies & Tools Used
          </h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.techUsed.map((tech) => (
              <span
                key={tech.id}
                className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-sm font-semibold flex items-center gap-2"
              >
                <div className="relative w-5 h-5">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {tech.name}
              </span>
            ))}
          </div>

          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            title={`View ${project.id} source code on Github`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#20b2aa] text-white font-bold rounded-xl hover:bg-[#179b94] transition-all hover:-translate-y-1 shadow-lg shadow-[#20b2aa]/25"
          >
            <Github className="w-5 h-5" />
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
