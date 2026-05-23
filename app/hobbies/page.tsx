"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  PenLine,
  Music,
  BookOpen,
  Palette,
  Plane,
  X,
  ImageIcon,
  ExternalLink,
  Play,
  BookMarked,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { PortfolioLayout } from "@/components/portfolio-layout";
import {
  PageTransition,
  ScrollReveal,
  HoverCard,
  StaggerContainer,
} from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const hobbies = [
  {
    id: 1,
    name: "Photography",
    icon: Camera,
    description: "Capturing moments and telling stories through the lens.",
    color: "from-rose-500/20 to-pink-500/20",
    exploreIcon: ImageIcon,
    exploreLabel: "View Gallery",
    content: {
      type: "gallery",
      title: "My Photography Gallery",
      subtitle: "A collection of my favorite shots",
      gallery: [
        "/images/beachimage.jpeg",
        "/images/beach.png",
        "/images/coffee.png",
        "/images/panchmarhi.png",

      ],
      description:
        "Photography has been my creative outlet for years. I love capturing landscapes, street scenes, and candid moments that tell a story.",
    },
  },
  // {
  //   id: 2,
  //   name: "Blogging",
  //   icon: PenLine,
  //   description: "Sharing thoughts, tutorials, and experiences through writing.",
  //   color: "from-blue-500/20 to-indigo-500/20",
  //   exploreIcon: ExternalLink,
  //   exploreLabel: "Read Blog",
  //   content: {
  //     type: "blog",
  //     title: "My Blog Posts",
  //     subtitle: "Tech tutorials, thoughts, and experiences",
  //     posts: [
  //       {
  //         title: "Getting Started with React Hooks",
  //         excerpt: "A beginner-friendly guide to understanding and using React Hooks effectively...",
  //         date: "March 2024",
  //       },
  //       {
  //         title: "My Journey into Full Stack Development",
  //         excerpt: "How I transitioned from frontend to full stack development and what I learned...",
  //         date: "February 2024",
  //       },
  //       {
  //         title: "Building Accessible Web Applications",
  //         excerpt: "Best practices for creating inclusive and accessible web experiences...",
  //         date: "January 2024",
  //       },
  //     ],
  //     description:
  //       "I write about web development, coding tutorials, and my experiences in tech. Blogging helps me solidify my learning and share knowledge with others.",
  //   },
  // },
  {
  id: 2,
  name: "Sketching",
  icon: Palette,
  description:
    "Expressing creativity through pencil sketches and artwork.",
  color: "from-blue-500/20 to-indigo-500/20",
  exploreIcon: PenLine,
  exploreLabel: "My Sketches",

  content: {
    type: "gallery",
    title: "My Sketch Collection",
    subtitle: "Sketches and artwork I enjoy creating",

    gallery: [
      "/images/shivaji.png",
      "/images/ganpati1.png",
      "/images/ganpati2.png",
    ],

    description:
      "Sketching helps me relax and express creativity beyond coding. I enjoy creating portraits, nature sketches, and experimenting with different styles.",
  },
},
  {
    id: 3,
    name: "Book Reading",
    icon: BookOpen,
    description: "Exploring new worlds and ideas through books.",
    color: "from-amber-500/20 to-orange-500/20",
    exploreIcon: BookMarked,
    exploreLabel: "Reading List",
    content: {
      type: "books",
      title: "My Bookshelf",
      subtitle: "Books that shaped my thinking",
      books: [
        {
          title: "The Alchemist",
          author: "Paulo Coelho",
          status: "Completed",
        },
        {
          title: "I Came Upon a Lighthouse",
          author: "Shantanu Naidu",
          status: "Completed",
        },
        {
          title: "Ikigai",
          author: "Héctor García & Francesc Miralles",
          status: "Completed",
        },
        {
          title: "Norwegian Wood",
          author: "Haruki Murakami",
          status: "Completed",
        },
        {
          title: "Looking for Alaska",
          author: "John Green",
          status: "Up Next",
        },
      ],
      description:
        "I love reading books on self-improvement, technology, and psychology. Reading expands my perspective and helps me grow both personally and professionally.",
    },
  },
  {
    id: 4,
    name: "Travel",
    icon: Plane,
    description: "Discovering new places, cultures, and experiences.",
    color: "from-emerald-500/20 to-teal-500/20",
    exploreIcon: MapPin,
    exploreLabel: "Places Visited",
    content: {
      type: "travel",
      title: "My Travel Adventures",
      subtitle: "Places I have explored",
      places: [
        {
          name: "Ooty & Coonoor",
          highlight: "Misty hills, tea plantations, scenic toy train rides, and peaceful landscapes.",
        },
        { name: "Mysore", highlight: "Known for its royal palaces, rich heritage, beautiful gardens, and vibrant culture." },
        { name: "Konkan", highlight: "Stunning coastline, lush greenery, beaches, and charming villages along the western coast." },
        { name:  "Hyderabad", highlight:  "A perfect blend of history and modern life, famous for Charminar and delicious biryani." },
        {
    name: "Pachmarhi",
    highlight:
      "Known as the Queen of Satpura, filled with waterfalls, caves, forests, and serene beauty.",
  },
  {
    name: "Ujjain & Indore",
    highlight:
      "Spiritual experiences in Ujjain combined with Indore's food culture and vibrant city life.",
  },
  {
    name: "Mumbai",
    highlight:
      "The city of dreams with iconic landmarks, marine views, and endless energy.",
  },
   {
    name: "Pune",
    highlight:
      "A vibrant city with pleasant weather, cultural heritage, and a growing tech ecosystem.",
  },
      ],
      bucketList: ["Manali", "Sikkim", "Darjeeling", "Goa"],
      description:
        "Travel opens my mind to new cultures and perspectives. I love exploring new places, trying local cuisines, and meeting people from different backgrounds.",
    },
  },
];

type HobbyContent = (typeof hobbies)[number]["content"];

export default function HobbiesPage() {
  const [selectedHobby, setSelectedHobby] = useState<
    (typeof hobbies)[0] | null
  >(null);

  const renderContent = (content: HobbyContent) => {
    switch (content.type) {
      case "gallery":
        return (
          <div className="space-y-6">
            <p className="text-muted-foreground">{content.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.gallery?.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-muted"
                >
                  <Image
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm">
              More photos coming soon...
            </p>
          </div>
        );

      // case "blog":
      //   return (
      //     <div className="space-y-6">
      //       <p className="text-muted-foreground">{content.description}</p>
      //       <div className="space-y-4">
      //         {content.posts?.map((post, index) => (
      //           <motion.div
      //             key={index}
      //             initial={{ opacity: 0, x: -20 }}
      //             animate={{ opacity: 1, x: 0 }}
      //             transition={{ delay: index * 0.1 }}
      //             className="p-4 bg-accent/50 rounded-2xl hover:bg-accent transition-colors"
      //           >
      //             <div className="flex items-start justify-between gap-4">
      //               <div>
      //                 <h4 className="font-semibold mb-1">{post.title}</h4>
      //                 <p className="text-sm text-muted-foreground">
      //                   {post.excerpt}
      //                 </p>
      //               </div>
      //               <span className="text-xs text-muted-foreground whitespace-nowrap">
      //                 {post.date}
      //               </span>
      //             </div>
      //           </motion.div>
      //         ))}
      //       </div>
      //     </div>
      //   );

     case "sketching":
  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        {content.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.gallery?.map((sketch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="
              overflow-hidden
              rounded-2xl
              bg-accent/50
              p-3
            "
          >
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={sketch}
                alt={`Sketch ${index + 1}`}
                fill
                className="
                  object-cover
                  hover:scale-110
                  transition-transform
                  duration-500
                "
              />
            </div>

            <p className="text-center text-sm mt-3 text-muted-foreground">
              Sketch {index + 1}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm">
        More artwork coming soon...
      </p>
    </div>
  );

      case "books":
        return (
          <div className="space-y-6">
            <p className="text-muted-foreground">{content.description}</p>
            <div className="space-y-3">
              {content.books?.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-accent/50 rounded-2xl"
                >
                  <div>
                    <h4 className="font-semibold">{book.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      by {book.author}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      book.status === "Completed"
                        ? "bg-green-500/10 text-green-600"
                        : book.status === "Reading"
                          ? "bg-blue-500/10 text-blue-600"
                          : "bg-amber-500/10 text-amber-600"
                    }`}
                  >
                    {book.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "travel":
        return (
          <div className="space-y-6">
            <p className="text-muted-foreground">{content.description}</p>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Places Visited
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.places?.map((place, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-accent/50 rounded-2xl"
                  >
                    <h5 className="font-semibold text-primary">{place.name}</h5>
                    <p className="text-sm text-muted-foreground">
                      {place.highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Bucket List</h4>
              <div className="flex flex-wrap gap-2">
                {content.bucketList?.map((place, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {place}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
              Hobbies
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              Beyond coding, here are the things that bring joy and balance to
              my life.
            </motion.p>
          </div>

          {/* Hobbies Grid */}
          {/* <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ScrollReveal delay={index * 0.1}>
                  <HoverCard>
                    <div
                      className={`bg-gradient-to-br ${hobby.color} bg-card rounded-3xl border border-border p-6 h-full flex flex-col`}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <hobby.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold mb-2">
                        {hobby.name}
                      </h2>
                      <p className="text-muted-foreground text-sm flex-1 mb-4">
                        {hobby.description}
                      </p>
                      <Button
                        onClick={() => setSelectedHobby(hobby)}
                        variant="outline"
                        className="rounded-full w-full"
                      >
                        <hobby.exploreIcon className="w-4 h-4 mr-2" />
                        {hobby.exploreLabel}
                      </Button>
                    </div>
                  </HoverCard>
                </ScrollReveal>
              </motion.div>
            ))}
          </StaggerContainer> */}

          {/* Premium Hobbies Grid */}

          <StaggerContainer
className="
grid
grid-cols-1
sm:grid-cols-2
gap-5
"
>

{hobbies.map((hobby,index)=>(

<ScrollReveal
key={hobby.id}
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

onClick={()=>
setSelectedHobby(hobby)
}

className={`
relative
overflow-hidden

rounded-[28px]

bg-gradient-to-br
${hobby.color}

border
border-[#EBE2D9]

p-5

cursor-pointer

shadow-[0_8px_20px_rgba(0,0,0,0.04)]

hover:shadow-[0_18px_45px_rgba(139,94,52,0.08)]

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

backdrop-blur-lg

border
border-white

shadow-sm

flex
items-center
justify-center
"
>

<hobby.icon
className="
w-6
h-6
text-[#6B5643]
"
/>

</div>

<hobby.exploreIcon
className="
w-4
h-4
text-[#6B5643]
"
/>

</div>


<h2
className="
text-[28px]
font-bold
text-[#2D1D13]
mb-1
"
>

{hobby.name}

</h2>


<p
className="
text-sm
text-[#756353]

mb-4
leading-6
"
>

{hobby.description}

</p>


<div
className="
w-10
h-[2px]

rounded-full

mb-5

bg-[#D8C1A8]
"
/>


<button

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

<div
className="
flex
justify-center
items-center
gap-2
"
>

<hobby.exploreIcon
className="w-4 h-4"
/>

{hobby.exploreLabel}

</div>

</button>

</div>

</motion.div>

</ScrollReveal>

))}

</StaggerContainer>

          {/* Fun Fact */}
          <ScrollReveal delay={0.4}>
            <div className="bg-card rounded-3xl border border-border p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Balance is the Key
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I believe that hobbies and creative pursuits help maintain a
                healthy work-life balance. They spark creativity and bring fresh
                perspectives to problem-solving in development.
              </p>
            </div>
          </ScrollReveal>

          <Footer />
        </div>

        {/* Hobby Detail Modal */}
        <AnimatePresence>
          {selectedHobby && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedHobby(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-card rounded-3xl border border-border p-8 max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <selectedHobby.icon className="w-5 h-5 text-primary" />
                    </div>
                    {selectedHobby.content.title}
                  </h2>
                  <button
                    onClick={() => setSelectedHobby(null)}
                    className="p-2 rounded-full hover:bg-accent transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-muted-foreground mb-6">
                  {selectedHobby.content.subtitle}
                </p>

                {renderContent(selectedHobby.content)}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransition>
    </PortfolioLayout>
  );
}
