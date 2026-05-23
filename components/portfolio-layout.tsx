"use client";

import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { AnimatedCursor } from "./animated-cursor";

interface PortfolioLayoutProps {
  children: ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen">
      <AnimatedCursor />
      <Sidebar />
      <main className="lg:ml-72 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-8">
          {children}
        </div>
      </main>
    </div>
  );
}
