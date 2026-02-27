"use client"

import { motion } from "motion/react"

export default function FloatingHearts() {
  const hearts = Array.from({ length: 25 })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
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
              position: "absolute",
            }}
            className="text-white/30"
            initial={{ y: 120 }}    // start just below screen
            animate={{ y: -10 }}    // end just above screen
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          >
            ❤️
          </motion.div>
        )
      })}
    </div>
  )
}