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
  { value: "5+", label: "Projects Built" },
  { value: "10+", label: "Development Sprints" },
  { value: "100+", label: "DSA Problems" },
  { value: "24/7", label: "Learning" },
  { value: "8.92", label: "CGPA" },
];

const aboutContent = `Hello! I'm Manjiri Gawali, a passionate Full Stack Developer and Computer Science student specializing in Health Informatics at VIT Bhopal.

Currently working as a Trainee Software Developer at Eddy Tools Tech Solution.

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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl"
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
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-3"
            >
              Manjiri Gawali
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl text-primary font-semibold mb-2"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground mb-1"
            >
              VIT Bhopal University
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-sm text-muted-foreground mb-6"
            >
              Health Informatics Student
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-8 mb-6"
            >
              <p className="text-lg text-foreground/80 italic">
                <Typewriter
                  text="Building meaningful products with creativity and code"
                  delay={800}
                />
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                India
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                B.Tech Student
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button
                onClick={() => setIsAboutOpen(true)}
                size="lg"
                className="rounded-full px-8"
              >
                About Me
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/reviews">
                  <Star className="w-4 h-4 mr-2" />
                  Reviews
                </Link>
              </Button>
            </motion.div>
          </section>

          {/* Quick Actions */}
          <ScrollReveal>
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Quick Actions
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
                        <action.icon className="w-8 h-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                        <h3 className="font-semibold text-foreground mb-1">
                          {action.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {action.description}
                        </p>
                        <ArrowRight className="w-5 h-5 text-primary mt-4 transition-transform group-hover:translate-x-2" />
                      </Link>
                    </HoverCard>
                  </motion.div>
                ))}
              </StaggerContainer>
            </section>
          </ScrollReveal>

          {/* By The Numbers */}
          <ScrollReveal delay={0.2}>
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-center">
                By The Numbers
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <HoverCard>
                      <div className="p-6 bg-card rounded-2xl border border-border text-center">
                        <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                          {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    </HoverCard>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Reviews Preview */}
          <ScrollReveal delay={0.3}>
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
