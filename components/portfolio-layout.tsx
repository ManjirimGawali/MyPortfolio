"use client";

import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { Sidebar } from "./sidebar";

interface PortfolioLayoutProps {
  children: ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Sidebar />
        <main className="lg:ml-72 min-h-screen">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
            {children}
          </div>
        </main>
      </div>
    </MotionConfig>
  );
}
