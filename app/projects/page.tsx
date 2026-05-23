"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { PageTransition, ScrollReveal, HoverCard } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const projects = [
  {
    id: 1,
    name: "Socialize",
    description:
      "Social media platform with image uploads, likes, comments, profiles and notifications.",
    fullDescription:
      "A full-featured social media application built with modern web technologies. Features include user authentication, image uploads with UploadThing, real-time notifications, likes, comments, user profiles, and a responsive design. The application uses Prisma for database management and Clerk for secure authentication.",
    tech: ["Next.js", "TypeScript", "Prisma", "Clerk", "UploadThing", "PostgreSQL"],
    color: "from-blue-500/20 to-indigo-500/20",
    github: "https://github.com/ManjirimGawali/Socialize",
    live: "https://socialize-black.vercel.app/",
  },
  {
    id: 2,
    name: "Remote Health Monitoring System",
    description: "Real time health tracking using sensors and Flutter",
    fullDescription:
      "An IoT-based health monitoring system that tracks vital signs in real-time using ESP32 sensors. The Flutter mobile application displays health metrics including heart rate, temperature, and oxygen levels. Data is stored and synchronized using Firebase for seamless access across devices.",
    tech: ["Flutter", "Firebase", "ESP32", "IoT"],
    color: "from-emerald-500/20 to-teal-500/20",
    github: "https://github.com/ManjirimGawali/Remote-health-monitoring",
    live: "#",
  },
  {
    id: 3,
    name: "Banking System",
    description: "Full Stack Banking Platform",
    fullDescription:
      "A comprehensive banking platform with features for account management, fund transfers, transaction history, and secure authentication. Built with React frontend and Node.js backend, using MongoDB for data storage and JWT for secure session management.",
    tech: ["React", "Node", "MongoDB", "JWT"],
    color: "from-amber-500/20 to-orange-500/20",
    github: "https://github.com/ManjirimGawali/Banking-System",
    live: "#",
  },
  {
    id: 4,
    name: "CEPV",
    description: "Chemical Equipment Parameter Visualizer",
    fullDescription:
      "A full-stack analytics platform for chemical equipment datasets with CSV upload, interactive charts, PDF report generation, authentication, and cross-platform support through web and desktop applications.",
    tech: ["React",  "Django",  "DRF", "PyQt5","Chart.js","Tailwind CSS"],
    color: "from-[#F7E7DE] to-[#F3D8CC]",
    github: "https://github.com/ManjirimGawali/CEPV-Chemical-Equipment-Parameter-Visualizer",
    live: "cepv-visualizer.onrender.com",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <PortfolioLayout>
      <PageTransition>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl font-bold mb-4"
            >
              Projects
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              A collection of projects I&apos;ve worked on, showcasing my skills in
              full-stack development, mobile apps, and IoT systems.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <HoverCard>
                  <motion.div
                    className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${project.color} bg-card p-8 cursor-pointer group`}
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {project.name}
                        </h2>
                        <p className="text-muted-foreground mb-4 max-w-xl">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-background/80 text-foreground rounded-full border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          View Details
                        </span>
                        <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>

          <Footer />
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className={`bg-card rounded-3xl border border-border p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild className="flex-1 rounded-full">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-full"
                  >
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
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
