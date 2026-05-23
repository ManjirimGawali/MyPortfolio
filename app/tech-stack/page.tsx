"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio-layout";
import {
  PageTransition,
  ScrollReveal,
  HoverCard,
  StaggerContainer,
} from "@/components/animations";
import { Footer } from "@/components/footer";

const techCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Java", "C++", "JavaScript", "Dart"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Frontend",
    icon: Layout,
    items: ["HTML", "Tailwind CSS", "React", "React Native", "Next.js"],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node", "Express", "JWT", "REST APIs"],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "Firebase", "PostgreSQL"],
    color: "from-orange-500/10 to-amber-500/10",
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "AWS", "Figma", "Postman"],
    color: "from-red-500/10 to-rose-500/10",
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    items: ["ChatGPT", "Claude", "Gemini", "Cursor", "Copilot", "Perplexity"],
    color: "from-indigo-500/10 to-violet-500/10",
  },
];

export default function TechStackPage() {
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
              Tech Stack
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Technologies and tools I use to bring ideas to life, from concept
              to deployment.
            </motion.p>
          </div>

          {/* Tech Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ScrollReveal delay={index * 0.1}>
                  <HoverCard>
                    <div
                      className={`bg-gradient-to-br ${category.color} bg-card rounded-3xl border border-border p-6 h-full`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-lg font-semibold">
                          {category.title}
                        </h2>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, i) => (
                          <motion.span
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 text-sm font-medium bg-background/80 text-foreground rounded-full border border-border cursor-default"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </HoverCard>
                </ScrollReveal>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Skills Summary */}
          <ScrollReveal delay={0.4}>
            <div className="bg-card rounded-3xl border border-border p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Always Learning, Always Growing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I believe in continuous learning and staying updated with the
                latest technologies. Currently exploring advanced AI tools and
                cloud technologies to build more intelligent and scalable
                applications.
              </p>
            </div>
          </ScrollReveal>

          <Footer />
        </div>
      </PageTransition>
    </PortfolioLayout>
  );
}
