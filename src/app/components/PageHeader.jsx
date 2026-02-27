"use client"

import { motion } from "motion/react"

export default function PageHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10"
    >
      <div className="text-5xl mb-2">💌</div>

      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
        Special Message
      </h1>

      <p className="text-lg md:text-xl text-purple-300 mt-2">
        to Mummy!
      </p>
    </motion.div>
  )
}