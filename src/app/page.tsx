import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import IntroLoader from "@/components/ui/IntroLoader";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-transparent">
      {/* Test Suite Intro Loader (< 2.0s) */}
      <IntroLoader />

      {/* Persistent Glass Navigation */}
      <Navbar />

      {/* Main Narrative Flow */}
      <div className="flex flex-col space-y-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

