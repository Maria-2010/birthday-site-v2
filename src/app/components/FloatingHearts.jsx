"use client"

import { motion } from "motion/react"

export default function FloatingHearts() {

  const hearts = Array.from({ length: 30 })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => {

        const left = Math.random() * 100
        const size = 10 + Math.random() * 10
        const duration = 12 + Math.random() * 8
        const delay = Math.random() * 5

        return (
          <motion.div
            key={i}
            style={{
              left: `${left}vw`,
              fontSize: `${size}px`,
            }}
            className="absolute text-white/20"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
          >
            🤍
          </motion.div>
        )
      })}
    </div>
  )
}