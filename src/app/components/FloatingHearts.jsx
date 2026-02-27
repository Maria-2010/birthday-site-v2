"use client"

import { motion } from "motion/react"

export default function FloatingHearts() {

  const hearts = Array.from({ length: 30 })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-base"
          initial={{
            y: "100vh",
            x: Math.random() * 100 + "vw",
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
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