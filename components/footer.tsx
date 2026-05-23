"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-center py-8 mt-16 border-t border-border"
    >
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        Made with{" "}
        <Heart className="w-4 h-4 text-primary fill-primary inline-block animate-pulse" />{" "}
        by Manjiri
      </p>
    </motion.footer>
  );
}
