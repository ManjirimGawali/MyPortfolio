"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Calendar,
  ChevronRight,
  MapPin,
  GraduationCap,
  School,
} from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { PageTransition, ScrollReveal, HoverCard } from "@/components/animations";
import { Footer } from "@/components/footer";

interface Experience {
  id: number;
  type: "work" | "organization";
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  responsibilities: string[];
  current: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    company: "QuotesMill",
    position: "Freelance Full-Stack Developer",
    duration: "Aug 2026 - Present",
    location: "Remote",
    description:
      "Built the company website end-to-end and engineered an intelligent multi-language WhatsApp AI agent for quotation generation and vendor operations.",
    responsibilities: [
      "Built the company website end-to-end with React.js and Node.js, with 5+ reusable components, 5+ responsive pages, and user journeys designed for easy navigation and conversion.",
      "Built a WhatsApp AI agent that detects customer intent, confirms requirements, gets vendor pricing, and sends quotations in Hindi, Hinglish and English; negotiation redirects the customer to the vendor, and confirmation shares the vendor’s bank details for payment.",
      "Implemented automated follow-ups for unresponsive customers and payment reminders, reducing manual chasing by vendors.",
    ],
    current: true,
  },
  {
    id: 2,
    type: "work",
    company: "Eddy Tools Tech Solution",
    position: "Trainee Software Developer",
    duration: "May 2026 - Aug 2026",
    description:
      "Worked on building scalable web applications and leading frontend development initiatives.",
    responsibilities: [
      "Lead Funnel Pages development",
      "Create Landing Pages",
      "Participate in Scrum Meetings",
      "Git Collaboration workflows",
      "Sprint Planning sessions",
    ],
    current: false,
  },
  {
    id: 3,
    type: "organization",
    company: "Edu4U Club",
    position: "Design Team Member",
    duration: "2024 - 2026",
    description:
      "Contributed to the design team by creating visual content and improving user experiences.",
    responsibilities: [
      "Design promotional materials",
      "Create social media graphics",
      "Collaborate on event branding",
    ],
    current: false,
  },
];

const education = [
  {
    level: "B.Tech",
    title: "Computer Science and Engineering",
    detail: "Specialization in Health Informatics",
    institution: "VIT Bhopal University",
    score: "8.93",
    scoreLabel: "CGPA",
    icon: GraduationCap,
  },
  {
    level: "Class 12",
    title: "Higher Secondary",
    score: "93%",
    scoreLabel: "Percentage",
    icon: School,
  },
  {
    level: "Class 10",
    title: "Secondary School",
    score: "99.6%",
    scoreLabel: "Percentage",
    icon: School,
  },
];

export default function ExperiencePage() {
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
              Experience &amp; Education
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              My professional journey, organizational involvement and academic
              background.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={index * 0.15}>
                  <HoverCard>
                    <div className="relative flex gap-6 md:gap-8">
                      {/* Timeline Dot */}
                      <div className="hidden md:flex flex-col items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, type: "spring" }}
                          className={`w-16 h-16 rounded-full flex items-center justify-center ${
                            exp.current
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {exp.type === "work" ? (
                            <Building2 className="w-6 h-6" />
                          ) : (
                            <Users className="w-6 h-6" />
                          )}
                        </motion.div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-card rounded-3xl border border-border p-6 md:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center ${
                                  exp.current
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {exp.type === "work" ? (
                                  <Building2 className="w-5 h-5" />
                                ) : (
                                  <Users className="w-5 h-5" />
                                )}
                              </div>
                              <h2 className="text-xl font-bold">{exp.company}</h2>
                            </div>
                            <p className="text-primary font-semibold">
                              {exp.position}
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                            {exp.current && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {exp.description}
                        </p>

                        <div>
                          <h3 className="text-sm font-semibold mb-3">
                            Key Responsibilities
                          </h3>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-sm text-muted-foreground"
                              >
                                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <section className="pt-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
            </ScrollReveal>
            <div className="grid gap-4 md:grid-cols-3">
              {education.map((edu) => {
                const Icon = edu.icon;
                return (
                  <ScrollReveal key={edu.level}>
                    <div className="h-full bg-card rounded-3xl border border-border p-6 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {edu.level}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{edu.title}</h3>
                      {edu.detail && (
                        <p className="text-sm text-muted-foreground">
                          {edu.detail}
                        </p>
                      )}
                      {edu.institution && (
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                      )}
                      <div className="mt-auto pt-6">
                        <p className="text-4xl font-bold text-primary tabular-nums">
                          {edu.score}
                        </p>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                          {edu.scoreLabel}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>

          <Footer />
        </div>
      </PageTransition>
    </PortfolioLayout>
  );
}
