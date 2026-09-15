import type { Metadata, Viewport } from "next";
import "./globals.css";

// Viewport baraye Mobile SEO kheyli moheme
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#20b2aa",
};

// SEO Metadata asli
export const metadata: Metadata = {
  title: {
    default: "Ali Ghelej Beigi | Mobile & Web Developer",
    template: "%s | Ali Ghelej Beigi", // in tuye page haye dige estefade mishe
  },
  description:
    "I'm Ali Ghelej Beigi, A Flutter and Web Developer from Shiraz, Iran. View my portfolio, projects, and skills in mobile app and web development.",
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
    url: "https://alighelejbeigi.github.io", // Inja domain khodet ro bezar
    title: "Ali Ghelej Beigi | Portfolio",
    description: "Mobile and Web Application Developer Portfolio",
    siteName: "Ali Ghelej Beigi",
    images: [
      {
        url: "/assets/images/logo.png", // Aks baraye shabake haye ejtemaei
        width: 800,
        height: 600,
        alt: "Ali Ghelej Beigi Logo",
      },
    ],
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
