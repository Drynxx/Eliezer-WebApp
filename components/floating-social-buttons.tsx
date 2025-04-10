"use client"

import { Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingSocialButtons() {
  return (
    <div className="fixed left-6 bottom-6 z-40 flex flex-col gap-3">
      <motion.a
        href="https://www.facebook.com/profile.php?id=61565136025145"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Facebook"
      >
        <Facebook className="h-6 w-6 text-white" />
      </motion.a>

      <motion.a
        href="https://www.instagram.com/eliezer.cleaning/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  )
}
