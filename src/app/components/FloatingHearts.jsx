"use client"

import { motion } from "motion/react"

export default function FloatingHearts() {
  const hearts = Array.from({ length: 35 })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-200/60 text-xl"
          initial={{
            y: "100vh",
            x: Math.random() * 100 + "vw",
            opacity: 0,
          }}
          animate={{
            y: "-15vh",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}