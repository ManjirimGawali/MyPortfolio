"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  ArrowRight,
  Star,
  X,
  FolderKanban,
  Heart,
  MessageCircle,
  Download,
} from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import {
  PageTransition,
  ScrollReveal,
  HoverCard,
  StaggerContainer,
} from "@/components/animations";
import { Typewriter } from "@/components/ui-effects";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const quickActions = [
  {
    title: "View Projects",
    description: "Explore latest work",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "My Hobbies",
    description: "Explore my interests",
    href: "/hobbies",
    icon: Heart,
  },
  {
    title: "Connect",
    description: "Let's connect",
    href: "/connect",
    icon: MessageCircle,
  },
];

const stats = [
  { value: "8.93", label: "CGPA" },
  { value: "150+", label: "DSA Problems" },
  { value: "5+", label: "Projects Built" },
  { value: "10+", label: "Development Sprints" },
  { value: "24/7", label: "Learning" },
];

const RESUME_URL = "/Manjiri_Gawali_Resume.pdf";

const aboutContent = `Hello! I'm Manjiri Gawali, a passionate Software Developer and Computer Science student specializing in Health Informatics at VIT Bhopal.

Currently working as a Freelance Full-Stack Developer at QuotesMill.

Passionate about AI, Flutter, Full Stack Development, healthcare systems and scalable products.`;

export default function HomePage() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <PortfolioLayout>
      <PageTransition>
        <div className="space-y-16">
          {/* Hero Section */}
          <section className="text-center pt-8 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-primary/15 ring-offset-4 ring-offset-background shadow-lg">
                <Image
                  src="/images/manjiriphoto.jpg"
                  alt="Manjiri Gawali"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-3">
                Manjiri Gawali
              </h1>

              <p className="text-xl md:text-2xl text-primary font-semibold mb-3">
                Software Developer
              </p>

              <p className="text-base text-muted-foreground mb-6">
                Health Informatics Student
                <span className="mx-2 text-border">•</span>
                VIT Bhopal University
              </p>

              <div className="min-h-8 mb-6 max-w-xl mx-auto">
                <p className="text-lg text-foreground/80">
                  <Typewriter
                    text="Building meaningful products with creativity and code"
                    delay={600}
                  />
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-10">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  India
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  B.Tech Student
                </span>
              </div>

              {/* Action Buttons: primary goal first */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-full px-8 w-full sm:w-auto">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 w-full sm:w-auto"
                >
                  <a href={RESUME_URL} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  onClick={() => setIsAboutOpen(true)}
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-8 w-full sm:w-auto"
                >
                  About Me
                </Button>
              </div>
            </motion.div>
          </section>

          {/* By The Numbers: strongest proof first, right after the hero */}
          <ScrollReveal>
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                By The Numbers
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 bg-card rounded-2xl border border-border text-center"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-2 tabular-nums">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Explore */}
          <ScrollReveal>
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                Explore
              </h2>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {quickActions.map((action) => (
                  <motion.div
                    key={action.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <HoverCard>
                      <Link
                        href={action.href}
                        className="block p-6 bg-card rounded-2xl border border-border group"
                      >
                        <action.icon className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {action.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {action.description}
                        </p>
                        <ArrowRight className="w-5 h-5 text-primary mt-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </HoverCard>
                  </motion.div>
                ))}
              </StaggerContainer>
            </section>
          </ScrollReveal>

          {/* Reviews Preview */}
          <ScrollReveal>
            <section className="text-center">
              <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-primary text-primary"
                    />
                  ))}
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  What People Say
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Read reviews from colleagues and collaborators, or leave your
                  own feedback.
                </p>
                <Button asChild className="rounded-full px-8">
                  <Link href="/reviews">
                    View All Reviews
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </section>
          </ScrollReveal>

          <Footer />
        </div>

        {/* About Modal */}
        <AnimatePresence>
          {isAboutOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsAboutOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-card rounded-3xl border border-border p-8 max-w-lg w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-2xl font-bold">About Me</h2>
                  <button
                    onClick={() => setIsAboutOpen(false)}
                    aria-label="Close"
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {aboutContent.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 flex gap-4">
                  <Button asChild className="flex-1 rounded-full">
                    <Link href="/connect">Get in Touch</Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsAboutOpen(false)}
                    className="flex-1 rounded-full"
                  >
                    Close
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransition>
    </PortfolioLayout>
  );
}
