"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FolderKanban,
  Briefcase,
  Code2,
  Heart,
  Mail,
  Menu,
  X,
  Download,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/experience", label: "Experiences", icon: Briefcase },
  { href: "/tech-stack", label: "Tech Stack", icon: Code2 },
  { href: "/hobbies", label: "Hobbies", icon: Heart },
  { href: "/connect", label: "Connect", icon: Mail },
];

const RESUME_URL = "/Manjiri_Gawali_Resume.pdf";

// Mobile bar keeps the most important destinations (incl. Connect) one tap away
const mobileBarItems = navItems.filter((item) => item.href !== "/hobbies");

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-72 bg-card border-r border-border p-6 z-40">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 mb-4"
          >
            <Image
              src="/images/manjiriphoto.jpg"
              alt="Manjiri Gawali"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl font-semibold text-foreground"
          >
            Manjiri Gawali
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm text-primary font-medium mt-1"
          >
            Software Developer
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs text-muted-foreground mt-2 space-y-1"
          >
            <p>VIT Bhopal University</p>
            <p>B.Tech CSE Health Informatics</p>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <motion.li
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? "" : "group-hover:text-primary"
                      }`}
                    />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 rounded-full bg-primary-foreground"
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="pt-4 border-t border-border"
        >
          <a
            href={RESUME_URL}
            download
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center gap-1 bg-card/95 backdrop-blur-lg border border-border rounded-full px-2 py-2 shadow-lg"
        >
          {mobileBarItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <Icon className="w-5 h-5" />
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveIndicator"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300"
          >
            <Menu className="w-5 h-5" />
          </button>
        </motion.div>
      </nav>

      {/* Mobile Full Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-50"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Profile */}
              <div className="flex flex-col items-center text-center mt-8 mb-12">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                  <Image
                    src="/images/manjiriphoto.jpg"
                    alt="Manjiri Gawali"
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="text-xl font-semibold">Manjiri Gawali</h1>
                <p className="text-sm text-primary font-medium mt-1">
                  Software Developer
                </p>
              </div>

              {/* Navigation */}
              <nav className="flex-1">
                <ul className="space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                      <motion.li
                        key={item.href}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium text-lg">
                            {item.label}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <a
                href={RESUME_URL}
                download
                className="flex items-center justify-center gap-2 w-full px-6 py-4 mb-4 rounded-2xl bg-primary text-primary-foreground font-medium"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
