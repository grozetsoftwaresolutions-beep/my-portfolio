"use client";

import dynamic from "next/dynamic";

const TestLabCanvas = dynamic(() => import("./TestLabCanvas"), {
  ssr: false,
});

export default function ClientCanvasWrapper() {
  return <TestLabCanvas />;
}

