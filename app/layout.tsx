import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl } from "./site-config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#20b2aa",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Ali Ghelej Beigi | Mobile & Web Developer",
    template: "%s | Ali Ghelej Beigi",
  },
  description:
    "Ali Ghelej Beigi is a Flutter and web developer in Shiraz, Iran. Explore his mobile apps, web projects, skills, and open-source work.",
  keywords: [
    "Ali Ghelej Beigi",
    "علی قلیچ بیگی",
    "Flutter Developer",
    "Web Developer",
    "برنامه نویس فلاتر",
    "طراح وب",
    "توسعه دهنده موبایل",
    "Shiraz",
    "شیراز",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Ali Ghelej Beigi" }],
  creator: "Ali Ghelej Beigi",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fa_IR",
    url: siteUrl,
    title: "Ali Ghelej Beigi | Mobile & Web Developer",
    description:
      "Explore Ali Ghelej Beigi's Flutter, mobile app, and web development projects.",
    siteName: "Ali Ghelej Beigi",
    images: [
      {
        url: "/assets/images/person.png",
        alt: "Ali Ghelej Beigi, mobile and web developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Ghelej Beigi | Mobile & Web Developer",
    description:
      "Explore Ali Ghelej Beigi's Flutter, mobile app, and web development projects.",
    images: ["/assets/images/person.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
