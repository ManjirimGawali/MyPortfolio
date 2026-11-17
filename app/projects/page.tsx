"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight, Download, Star } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { PageTransition, ScrollReveal, HoverCard } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Image from "next/image";

interface Project {
  id: number;
  name: string;
  image: string;
  description?: string;
  fullDescription: string;
  tech: string[];
  color: string;
  github: string;
  live: string;
  apk?: string;
  highlights?: string[];
  featured?: boolean;
  links?: { label: string; url: string }[];
  gallery?: { src: string; caption: string }[];
}

const projects: Project[] = [
  {
    id: 9,
    featured: true,
    name: "DropLine – Last-Mile Delivery Platform",
    image: "/images/dropline.jpg",
    description:
      "A complete last-mile delivery system: a React Native driver app, an Express + TypeScript backend, and a live dispatcher dashboard, built offline-first with exactly-once sync.",
    fullDescription:
      "DropLine is a last-mile delivery platform with three parts: a React Native (Expo) driver app, an Express + TypeScript backend the app syncs with, and a dispatcher website to create, assign and audit deliveries on a live map. The focus is on the hard parts: background location, offline-first sync, and exactly-once delivery of every update.",
    highlights: [
      "Offline-first sync: every action goes into an SQLite outbox with idempotency keys, strict ordering and exponential back-off with jitter. Results are exactly-once, proven by tests under a 30% server failure rate.",
      "Background location every 10 s with the screen locked, using an Android foreground service and a heartbeat so dispatch never sees a gap over 30 s. Tracking switches to a lighter idle mode between tasks.",
      "One delivery state machine shared by the app and the server, with a 100 m geofence check, plus proof of delivery: an in-app camera photo stamped with time and GPS that uploads later if offline.",
      "Live dispatcher dashboard over WebSocket with a map, task timelines, logs and location-gap reports, plus driver management, attendance punch-in and OTP for critical deliveries.",
      "English and Arabic with full right-to-left layout, FCM push notifications, OpenStreetMap maps with no API key, and 215 automated tests (97 backend + 118 app).",
    ],
    tech: [
      "React Native (Expo)",
      "TypeScript",
      "expo-router",
      "SQLite",
      "Node.js",
      "Express 5",
      "Kysely",
      "Supabase Postgres",
      "React 19 (Vite)",
      "TanStack Query",
      "Leaflet + MapLibre",
      "WebSocket",
      "Firebase (FCM)",
      "Jest",
    ],
    color: "from-yellow-400/20 to-amber-500/20",
    github: "https://github.com/ManjirimGawali/DropLine-Delivery",
    live: "https://dropline-delivery-product-demo.vercel.app/",
    apk: "https://drive.google.com/drive/folders/1WlRTcwTaHFHEQR0bUm2sb5hTn7HkWkTM?usp=sharing",
    links: [
      {
        label: "Dispatcher Dashboard",
        url: "https://drop-line-delivery-dashboard.vercel.app/",
      },
      {
        label: "Backend API",
        url: "https://dropline-delivery-backend.onrender.com/health",
      },
    ],
    gallery: [
      { src: "/images/dropline/04-attendance.webp", caption: "Punch in" },
      { src: "/images/dropline/09-home.webp", caption: "Home, on shift" },
      { src: "/images/dropline/19-new-task-drawer.webp", caption: "New task" },
      { src: "/images/dropline/21-step-1.webp", caption: "Head to pickup" },
      { src: "/images/dropline/23-step-2.webp", caption: "Collect the order" },
      { src: "/images/dropline/26-at-the-door.webp", caption: "At the door" },
      { src: "/images/dropline/28-take-photo.webp", caption: "Proof of delivery" },
      { src: "/images/dropline/30-delivered.webp", caption: "Delivered" },
      { src: "/images/dropline/13-language.webp", caption: "English / Arabic" },
    ],
  },
  {
    id: 6,
    name: "Parcel Reader – AI Shipment Data Extraction",
    image: "/images/parcel-reader.png",
    description:
      "Converts bulk warehouse scanner images into CSV records with the AWB, weight and dimensions, plus a status flag for each image.",
    fullDescription:
      "Converts bulk warehouse scanner images into CSV records with the AWB, weight and dimensions, plus a status flag for each image.",
    highlights: [
      "A local vision model checks each frame first (empty belt, multiple parcels, hand in the way, label cut off), and OCR runs only on frames that pass.",
      "Uses multi-view OCR voting (two passes must agree), adaptive binarisation, text rescaling and slashed-zero repair to read 8+ station overlay formats reliably.",
      "Includes a web app and a CLI with a background queue that resumes after a restart, unit-tested parsers, and an evaluation run on 262 real test images.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "React (Vite)",
      "Ollama",
      "Qwen2.5-VL 7B",
      "Tesseract.js OCR",
      "sharp",
      "MongoDB (optional)",
      "JSON file store",
    ],
    color: "from-amber-500/10 to-orange-500/10",
    github: "https://github.com/ManjirimGawali/Case-study-01",
    live: "",
  },
  {
    id: 7,
    name: "ECR Verifier – PF/ESIC Compliance Reconciliation",
    image: "/images/ecr-verifier.png",
    description:
      "Checks each employee's PF and ESIC deductions in a vendor wagesheet against the deposit records (ECR PDFs) from EPFO and ESIC.",
    fullDescription:
      "Checks each employee's PF and ESIC deductions in a vendor wagesheet against the deposit records (ECR PDFs) from EPFO and ESIC.",
    highlights: [
      "Reads the PDFs by text position and confirms every parse against the totals printed on the ECR, so a partial read can't pass unnoticed.",
      "Uses rule-based name matching tuned for Indian names (spelling variants, word order, abbreviations, Mr/Smt) and allows a ±₹1 rounding difference on amounts.",
      "Produces a colour-coded Excel audit report and was 100% accurate on 16,000 verdicts (8,000 employees, 370+ PDF pages) in about 3 seconds.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "React (Vite)",
      "pdfjs-dist",
      "ExcelJS",
      "MongoDB (optional)",
      "JSON file store",
    ],
    color: "from-blue-500/10 to-sky-500/10",
    github: "https://github.com/ManjirimGawali/Case-study-2",
    live: "",
  },
  {
    id: 8,
    name: "FC P&L Monitor & Alert Digest",
    image: "/images/fc-pnl-monitor.png",
    description:
      "Computes daily CM1 and CM2 margins and each cost line as a % of revenue for every fulfilment centre, and colour-codes each day against target ranges.",
    fullDescription:
      "Computes daily CM1 and CM2 margins and each cost line as a % of revenue for every fulfilment centre, and colour-codes each day against target ranges.",
    highlights: [
      "Ranks problems by rupee impact and works out, against a 14-day baseline, whether a breach came from overspending or from low revenue.",
      "Emails each FC manager a colour-coded daily digest and shows every FC's status on a central dashboard with trend charts and manager overrides.",
      "The optional AI model only rewrites the wording, and a guardrail rejects its text if any number is wrong. Validated on 18,250 FC-days with zero missed or false flags.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "React (Vite)",
      "MongoDB (optional)",
      "Ollama (optional)",
      "Nodemailer/SMTP",
      "Slack webhooks",
      "ExcelJS",
    ],
    color: "from-emerald-500/10 to-green-500/10",
    github: "https://github.com/ManjirimGawali/Case-study-3",
    live: "",
  },
  {
    id: 1,
    name: "Swasthya",
    image: "/images/swasthya.png",
    description:
      "An AI-powered medical assistant that helps users analyze medical reports and receive structured medical insights.",
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
      "Supabase",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    github: "https://github.com/ManjirimGawali/Svastha-AI-Medical-Assistant",
    live: "https://svastha-ai-medical-assistant.vercel.app/",
    apk: "https://drive.google.com/drive/folders/1toDkMelaet_gYcOw6128C6RbdX9UuUZt?usp=sharing",
  },
  {
    id: 2,
    name: "Socialize",
    image: "/images/socializedark.png",
    description:
      "A full-featured social media application with authentication, image uploads, real-time notifications, likes, comments, and user profiles.",
    fullDescription:
      "A full-featured social media application built with modern web technologies. Features include user authentication, image uploads with UploadThing, real-time notifications, likes, comments, user profiles, and a responsive design. The application uses Prisma for database management and Clerk for secure authentication.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Clerk",
      "UploadThing",
      "PostgreSQL",
    ],
    color: "from-blue-500/20 to-indigo-500/20",
    github: "https://github.com/ManjirimGawali/Socialize",
    live: "https://socialize-black.vercel.app/",
  },
  {
    id: 3,
    name: "Circle",
    image: "/images/circle.png",
    description:
      "A real-time chat application built with the MERN stack featuring instant messaging, online presence, and JWT authentication.",
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
      "Cloudinary",
    ],
    color: "from-pink-500/20 to-purple-500/20",
    github: "https://github.com/ManjirimGawali/Circle-A-chat-App",
    live: "#",
  },
  {
    id: 4,
    name: "CEPV",
    image: "/images/cepv.png",
    description: "Chemical Equipment Parameter Visualizer",
    fullDescription:
      "A full-stack analytics platform for chemical equipment datasets with CSV upload, interactive charts, PDF report generation, authentication, and cross-platform support through web and desktop applications.",
    tech: ["React", "Django", "DRF", "PyQt5", "Chart.js", "Tailwind CSS"],
    color: "from-[#F7E7DE] to-[#F3D8CC]",
    github:
      "https://github.com/ManjirimGawali/CEPV-Chemical-Equipment-Parameter-Visualizer",
    live: "https://cepv-visualizer.onrender.com",
  },
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
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
${project.featured ? "border-primary/40 ring-2 ring-primary/15" : "border-[#F3E8EF]"}
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
                        {project.featured && (
                          <span className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            Featured Project
                          </span>
                        )}
                        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {project.name}
                        </h2>

                        {/* Project Image */}
                        <div
                          className="mb-6
  overflow-hidden
  rounded-[24px]
  border
  border-[#F1E4ED]
  bg-white
  shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                        >
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

                        {project.description && (
                          <p className="text-muted-foreground mb-4 max-w-xl">
                            {project.description}
                          </p>
                        )}
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
                      <div className="flex items-center gap-3">
                        {project.apk && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="rounded-full text-xs h-8 border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a
                              href={project.apk}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="w-3.5 h-3.5 mr-1.5" />
                              APK
                            </a>
                          </Button>
                        )}
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
                    <h2 className="text-2xl font-bold mb-2">
                      {selectedProject.name}
                    </h2>
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

                {selectedProject.highlights &&
                  selectedProject.highlights.length > 0 && (
                    <ul className="mb-6 space-y-3">
                      {selectedProject.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                {selectedProject.gallery &&
                  selectedProject.gallery.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-foreground mb-3">
                        Screenshots
                      </h3>
                      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                        {selectedProject.gallery.map((shot) => (
                          <figure
                            key={shot.src}
                            className="shrink-0 w-32 sm:w-36 snap-start"
                          >
                            <a
                              href={shot.src}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={shot.src}
                                alt={shot.caption}
                                width={720}
                                height={1605}
                                loading="lazy"
                                className="w-full h-auto rounded-xl border border-border"
                              />
                            </a>
                            <figcaption className="mt-1.5 text-xs text-center text-muted-foreground">
                              {shot.caption}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>
                  )}

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

                <div className="flex flex-wrap gap-3">
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <Button
                      asChild
                      className="flex-1 min-w-[130px] rounded-full"
                    >
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.live &&
                    selectedProject.live !== "#" &&
                    selectedProject.live !== "YOUR_VERCEL_LINK" && (
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 min-w-[130px] rounded-full"
                      >
                        <a
                          href={
                            selectedProject.live.startsWith("http")
                              ? selectedProject.live
                              : `https://${selectedProject.live}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  {selectedProject.apk && (
                    <Button
                      asChild
                      className="flex-1 min-w-[130px] rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <a
                        href={selectedProject.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download APK
                      </a>
                    </Button>
                  )}
                  {selectedProject.links?.map((link) => (
                    <Button
                      key={link.url}
                      asChild
                      variant="outline"
                      className="flex-1 min-w-[130px] rounded-full"
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransition>
    </PortfolioLayout>
  );
}
