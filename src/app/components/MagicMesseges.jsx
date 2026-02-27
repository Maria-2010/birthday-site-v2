"use client"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export default function MagicMessages({ onNext }) {

  const cards = [
    {
      header: "With Love",
      message:
        "You are the heart of our home and the person who makes everything better just by being there. Your love and warmth light up my life every single day."
    },
    {
      header: "My Superhero",
      message:
        "Thank you for always believing in me, even when I didn't believe in myself. Your strength and kindness are what I admire most in the world."
    },
    {
      header: "Dream Big",
      message:
        "May this year bring you as much happiness as you give to everyone else. I hope all your heart’s desires come true, because you deserve the absolute best."
    },
    {
      header: "New Adventures",
      message:
        "You're absolutely wonderful and deserve to travel, laugh, and explore all the beautiful things this world has to offer. I can’t wait for our next adventure together!"
    },
    {
      header: "You're Amazing",
      message:
        "You are truly one of a kind, Mummy. You deserve all the happiness in the world today and every day. I love you more than words can say!"
    }
  ]

  const [index, setIndex] = useState(0)

  const nextCard = () => {
    if (index + 1 === cards.length) {
      onNext()
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-purple-900 via-pink-700 to-rose-500">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={nextCard}
          className="cursor-pointer max-w-xl w-full 
            bg-white/10 backdrop-blur-xl 
            p-8 rounded-3xl shadow-2xl 
            border border-pink-300/40 text-center"
        >
          <h2 className="text-3xl font-bold text-yellow-300 mb-4">
            {cards[index].header}
          </h2>

          <p className="text-lg text-white leading-relaxed">
            {cards[index].message}
          </p>

          <p className="mt-6 text-sm text-white/60">
            Tap to continue 💕
          </p>
        </motion.div>
      </AnimatePresence>

    </div>
  )
}