import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import ClientCanvasWrapper from "@/components/3d/ClientCanvasWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07080c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahadeer.dev"),
  title: "Mahadeer Mohamed | Software Tester & Front-End Developer",
  description:
    "The Test Lab: Personal portfolio and QA testing showcase of Mahadeer Mohamed. Bridging front-end web engineering with rigorous manual testing and test automation.",
  keywords: [
    "Mahadeer Mohamed",
    "Software Tester",
    "QA Automation Engineer",
    "Front-End Developer",
    "SDET",
    "Manual Testing",
    "Selenium with Java",
    "React Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Mahadeer Mohamed" }],
  openGraph: {
    title: "Mahadeer Mohamed | Software Tester & Front-End Developer",
    description:
      "Turning defect chaos into green passes. Explore projects, test scenarios, and front-end architectures.",
    url: "https://mahadeer.dev",
    siteName: "Mahadeer Mohamed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadeer Mohamed | Software Tester & Front-End Developer",
    description:
      "Turning defect chaos into green passes. Explore projects, test scenarios, and front-end architectures.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-lab-bg text-white antialiased relative min-h-screen selection:bg-lab-pass/20 selection:text-lab-pass`}
      >
        <SmoothScroll>
          <CustomCursor />
          <ClientCanvasWrapper />
          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
