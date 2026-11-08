"use client";

import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import NetworkConstellation from "./NetworkConstellation";
import CameraRig from "./CameraRig";

export default function TestLabCanvas() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGlSupported(false);
      }
    } catch {
      setWebGlSupported(false);
    }

    // Check device type
    setIsMobile(window.innerWidth < 768);

    // Check reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);

    // Tab visibility handling (pause RAF when tab is hidden)
    const handleVisibility = () => {
      setIsTabHidden(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Scroll progress handler
    const updateScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(window.scrollY / scrollHeight);
      }
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  if (!isMounted) return null;

  // Fallback if WebGL unavailable or user prefers reduced motion
  if (!webGlSupported || isReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-bg">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(99,102,241,0.08)_0%,_transparent_70%)]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        dpr={isMobile ? 1 : [1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        frameloop={isTabHidden ? "never" : "always"}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        {/* Soft Ambient Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 10, 5]} intensity={0.6} color="#C7D2FE" />
        <pointLight position={[-5, -10, 2]} intensity={0.4} color="#6366F1" />

        {/* Deep background fog */}
        <fog attach="fog" args={["#070B14", 4, 18]} />

        <Suspense fallback={null}>
          <CameraRig scrollProgress={scrollProgress} />
          <NetworkConstellation
            scrollProgress={scrollProgress}
            isReducedMotion={isReducedMotion}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
