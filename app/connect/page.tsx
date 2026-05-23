
"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Code2,
  Mail,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

import { useState } from "react";

import { PortfolioLayout } from "@/components/portfolio-layout";

import {
  PageTransition,
  ScrollReveal,
  StaggerContainer,
} from "@/components/animations";

import { Footer } from "@/components/footer";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/manjiri-gawali-89556a25b/",
    username: "Manjiri Gawali",
    color: "from-[#E8ECFF] to-[#DDE3FF]",
    accent: "#6F7EFF",
  },

  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ManjirimGawali",
    username: "@ManjirimGawali",
    color: "from-[#F7F4F0] to-[#F0ECE8]",
    accent: "#6B4C35",
  },

  {
    name: "LeetCode",
    icon: Code2,
    href: "https://leetcode.com/u/manjiri_1003/",
    username: "manjiri_gawali",
    color: "from-[#FFF0E1] to-[#FFE7D4]",
    accent: "#F39C42",
  },

  {
    name: "Email",
    icon: Mail,
    href: "mailto:manjirigawali39@gmail.com",
    username: "manjirigawali39@gmail.com",
    color: "from-[#FFE9EF] to-[#FFDCE7]",
    accent: "#FF88A7",
    copyable: true,
  },
];

export default function ConnectPage() {
  const [copiedEmail, setCopiedEmail] =
    useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(
      "manjirigawali39@gmail.com"
    );

    setCopiedEmail(true);

    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  return (
    <PortfolioLayout>
      <PageTransition>

        <div className="space-y-7">

          <div className="text-center mb-6">

            <motion.div
              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}
            >

              <div className="
              text-[#9E7756]
              text-sm
              mb-2
              ">
                ✦
              </div>

              <h1 className="
              text-4xl
              font-bold
              mb-3
              ">
                Let's Connect
              </h1>

              <p className="
              text-sm
              text-muted-foreground
              max-w-lg
              mx-auto
              leading-7
              ">
                I'm always open to opportunities,
                collaborations and conversations.
                Feel free to reach out.
              </p>

            </motion.div>

          </div>


          <StaggerContainer
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            "
          >

            {socialLinks.map((link,index)=>(

            <ScrollReveal
            key={link.name}
            delay={index*.1}
            >

            <motion.div

            whileHover={{
              y:-5,
              scale:1.01
            }}

            transition={{
              type:"spring",
              stiffness:300
            }}

            className={`
            relative
            overflow-hidden

            rounded-[28px]

            bg-gradient-to-br
            ${link.color}

            border
            border-[#E7D6C6]

            p-5

            shadow-[0_8px_20px_rgba(0,0,0,0.04)]

            hover:shadow-[0_18px_45px_rgba(216,193,168,0.15)]

            transition-all
            duration-500
            `}
            >

            {/* blur */}

            <div
            className="
            absolute

            -right-10
            top-10

            w-32
            h-32

            rounded-full

            bg-white/30

            blur-2xl

            opacity-70
            "
            />

            {/* dots */}

            <div
            className="
            absolute

            right-6
            bottom-6

            grid
            grid-cols-3
            gap-1

            opacity-10
            "
            >

            {[...Array(9)].map((_,i)=>(

            <div
            key={i}
            className="
            w-1
            h-1
            rounded-full
            bg-[#B08C6A]
            "
            />

            ))}

            </div>


            <div className="relative z-10">

            <div
            className="
            flex
            justify-between
            items-start
            mb-5
            "
            >

            <div
            className="
            w-14
            h-14

            rounded-2xl

            bg-white/70

            border
            border-white

            backdrop-blur-lg

            shadow-sm

            flex
            items-center
            justify-center
            "
            >

            <link.icon
            className="
            w-6
            h-6
            "
            style={{
              color:link.accent
            }}
            />

            </div>

            {link.copyable ? (

            <button
            onClick={copyEmail}
            >

            {copiedEmail ?

            <Check className="w-4 h-4 text-green-500"/>

            :

            <Copy
            className="
            w-4
            h-4
            text-[#6B5643]
            "
            />

            }

            </button>

            ):(

            <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            >

            <ExternalLink
            className="
            w-4
            h-4
            text-[#6B5643]
            "
            />

            </a>

            )}

            </div>

            <h2
            className="
            text-[30px]
            font-bold
            text-[#2D1D13]
            mb-1
            "
            >
            {link.name}
            </h2>

            <p
            className="
            text-sm
            text-[#756353]
            mb-4
            "
            >
            {link.username}
            </p>

            <div
            className="
            w-10
            h-[2px]
            rounded-full
            mb-5
            "
            style={{
              background:"#D8C1A8"
            }}
            />

            <button
            onClick={
              link.copyable
              ?copyEmail
              :undefined
            }

            className="
            w-full
            h-11

            rounded-full

            bg-white

            border
            border-[#D8C1A8]

            text-[#6B5643]

            text-sm
            font-medium

            shadow-[0_6px_16px_rgba(216,193,168,0.35)]

            hover:bg-[#FDF8F4]

            hover:shadow-[0_12px_24px_rgba(216,193,168,0.50)]

            hover:-translate-y-[2px]

            transition-all
            duration-300
            "
            >

            {link.copyable ? (

            copiedEmail
            ?"Copied!"
            :"Copy Email"

            ):(

            <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"

            className="
            flex
            justify-center
            items-center
            gap-2
            "
            >

            Visit Profile

            <ExternalLink
            className="
            w-3
            h-3
            text-[#6B5643]
            "
            />

            </a>

            )}

            </button>

            </div>

            </motion.div>

            </ScrollReveal>

            ))}

          </StaggerContainer>

          <Footer/>

        </div>

      </PageTransition>
    </PortfolioLayout>
  );
}