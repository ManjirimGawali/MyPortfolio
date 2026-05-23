"use client";

import { motion } from "framer-motion";
import { Building2, Users, Calendar, ChevronRight } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import { PageTransition, ScrollReveal, HoverCard } from "@/components/animations";
import { Footer } from "@/components/footer";

const experiences = [
  {
    id: 1,
    type: "work",
    company: "Eddy Tools Tech Solution",
    position: "Trainee Software Developer",
    duration: "May 2026 - Present",
    description:
      "Working on building scalable web applications and leading frontend development initiatives.",
    responsibilities: [
      "Lead Funnel Pages development",
      "Create Landing Pages",
      "Participate in Scrum Meetings",
      "Git Collaboration workflows",
      "Sprint Planning sessions",
    ],
    current: true,
  },
  {
    id: 2,
    type: "organization",
    company: "Edu4U Club",
    position: "Design Team Member",
    duration: "2024 - Present",
    description:
      "Contributing to the design team by creating visual content and improving user experiences.",
    responsibilities: [
      "Design promotional materials",
      "Create social media graphics",
      "Collaborate on event branding",
    ],
    current: true,
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
              Experience
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              My professional journey and organizational involvement, showcasing
              growth and contributions.
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
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                            {exp.current && (
                              <span className="ml-2 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
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
                                className="flex items-center gap-3 text-sm text-muted-foreground"
                              >
                                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                                {resp}
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

          <Footer />
        </div>
      </PageTransition>
    </PortfolioLayout>
  );
}
