"use client";
import { Suspense } from "react";
import HomeModules from "./Home";

export default function Home() {
  return (
    <main>
      <Suspense fallback={null}>
        <HomeModules />
      </Suspense>
    </main>
  );
}
