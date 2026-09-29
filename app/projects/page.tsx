"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { PageTransition, ScrollReveal, HoverCard } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Image from "next/image";


const projects = [
  {
  id: 1,
  name: "Swasthya",
  image: "images/swasthya.png",
  fullDescription:
    "An AI-powered medical assistant that helps users analyze medical reports and receive structured medical insights. The application includes secure authentication, report uploads, OCR-based text extraction, AI-powered analysis, cloud storage, and a scalable backend for processing medical information.",
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
    "Firebase Auth",
    "Google Document AI",
    "Gemini API",
    "Supabase"
  ],
  color: "from-emerald-500/20 to-teal-500/20",
  github: "https://github.com/ManjirimGawali/Svastha-AI-Medical-Assistant",
  live: "https://svastha-ai-medical-assistant.vercel.app/",
},
  
  {
    id: 2,
    name: "Socialize",
    image:"images/socializedark.png",
    fullDescription:
      "A full-featured social media application built with modern web technologies. Features include user authentication, image uploads with UploadThing, real-time notifications, likes, comments, user profiles, and a responsive design. The application uses Prisma for database management and Clerk for secure authentication.",
    tech: ["Next.js", "TypeScript", "Prisma", "Clerk", "UploadThing", "PostgreSQL"],
    color: "from-blue-500/20 to-indigo-500/20",
    github: "https://github.com/ManjirimGawali/Socialize",
    live: "https://socialize-black.vercel.app/",
  },
  
 {
  id: 3,
  name: "Circle",
  image: "images/circle.png",
  fullDescription:
    "A real-time chat application built with the MERN stack and TypeScript. Circle allows users to securely create accounts, search for other users, start one-on-one conversations, and exchange messages in real time. It includes JWT-based authentication, user profiles, profile picture uploads, online/offline status, and a responsive chat interface powered by Socket.IO.",
  tech: [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Socket.IO",
    "JWT",
    "Tailwind CSS",
    "Cloudinary"
  ],
  color: "from-pink-500/20 to-purple-500/20",
  github: "https://github.com/ManjirimGawali/Circle-A-chat-App",
  live: "#",
},
  {
    id: 4,
    name: "CEPV",
    image:"/images/cepv.png",
    description: "Chemical Equipment Parameter Visualizer",
    fullDescription:
      "A full-stack analytics platform for chemical equipment datasets with CSV upload, interactive charts, PDF report generation, authentication, and cross-platform support through web and desktop applications.",
    tech: ["React",  "Django",  "DRF", "PyQt5","Chart.js","Tailwind CSS"],
    color: "from-[#F7E7DE] to-[#F3D8CC]",
    github: "https://github.com/ManjirimGawali/CEPV-Chemical-Equipment-Parameter-Visualizer",
    live: "cepv-visualizer.onrender.com",
  },

  // {
  //   id: 5,
  //   name: "Remote Health Monitoring System",
  //   image:"images/healthcare.png",
  //   description: "Real time health tracking using sensors and Flutter",
  //   fullDescription:
  //     "An IoT-based health monitoring system that tracks vital signs in real-time using ESP32 sensors. The Flutter mobile application displays health metrics including heart rate, temperature, and oxygen levels. Data is stored and synchronized using Firebase for seamless access across devices.",
  //   tech: ["Flutter", "Firebase", "ESP32", "IoT"],
  //   color: "from-emerald-500/20 to-teal-500/20",
  //   github: "https://github.com/ManjirimGawali/Remote-health-monitoring",
  //   live: "#",
  // },
  {
  id: 5,
  name: "Meher Bakery",
  image: "/images/meherhome.png",
  description:
    "A premium bakery website featuring a luxury pastel design, animated product showcases, speciality cakes, responsive layouts, and an elegant shopping experience.",

  fullDescription:
    "Meher Bakery is a modern bakery website built using Next.js and Tailwind CSS. The project focuses on creating a luxurious user experience through soft pastel color palettes, premium UI components, smooth animations, responsive design, product showcases, speciality cakes, contact forms, and interactive navigation. The website includes multiple pages such as Home, About, Products, Speciality Cakes, Contact Us, and Find Us, all designed with a consistent aesthetic and modern frontend practices.",

  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Responsive Design",
  ],

  color: "from-pink-500/10 to-purple-500/10",

  github: "https://github.com/ManjirimGawali/Bakery",

  live: "YOUR_VERCEL_LINK",
}
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
                    className={`relative
overflow-hidden
rounded-[32px]
bg-white
border
border-[#F3E8EF]
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
transition-all
duration-500
cursor-pointer
group
p-8`}
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                       <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
  {project.name}
</h2>

{/* Project Image */}
<div className="mb-6
  overflow-hidden
  rounded-[24px]
  border
  border-[#F1E4ED]
  bg-white
  shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
  <Image
    src={project.image}
    alt={project.name}
    width={1200}
    height={700}
    className="
      w-full
      h-[250px]
      object-cover
      transition-transform
      duration-500
      group-hover:scale-105
    "
  />
</div>

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
