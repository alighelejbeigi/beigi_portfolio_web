import { projects } from "../../data/portfolioData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { getTranslation } from "../../i18n/translations";
import { siteUrl } from "../../site-config";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = getTranslation("en", project.titleKey);
  const description = getTranslation("en", project.descriptionKey);
  const canonical = `${siteUrl}/projects/${project.id}/`;

  return {
    title,
    description,
    keywords: [
      "Ali Ghelej Beigi",
      "علی قلیچ بیگی",
      project.category,
      ...project.techUsed.map((technology) => technology.name),
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${title} | Ali Ghelej Beigi`,
      description,
      images: [
        {
          url: project.appPhotos,
          alt: `${title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Ali Ghelej Beigi`,
      description,
      images: [project.appPhotos],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
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
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-white">
          {getTranslation("en", project.titleKey)}
        </h1>
        <h2 className="text-slate-400 mb-10 font-medium">
          Mobile & Web Application Developed by Ali Ghelej Beigi | علی قلیچ بیگی
        </h2>

        <div className="bg-slate-900/80 p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="relative w-full h-64 sm:h-96 mb-10 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800/50">
            <Image
              src={project.appPhotos}
              alt={`${getTranslation("en", project.titleKey)} project preview`}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Project Overview</h3>
          <p className="text-slate-300 leading-relaxed mb-3 text-base sm:text-lg">
            {getTranslation("en", project.descriptionKey)}
          </p>
          <p
            lang="fa"
            dir="rtl"
            className="fa-font text-slate-300 leading-relaxed mb-8 text-base sm:text-lg"
          >
            {getTranslation("fa", project.descriptionKey)}
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
