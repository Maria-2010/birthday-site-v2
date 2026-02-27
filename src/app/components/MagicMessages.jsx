"use client"

import { useState } from "react"
import { motion } from "motion/react"

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

  const [opened, setOpened] = useState(false)
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    if (!opened) {
      setOpened(true)
    } else {
      if (index + 1 < cards.length) {
        setIndex(index + 1)
      } else {
        onNext()
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-700 to-rose-500">

      <div onClick={handleClick} className="cursor-pointer text-center px-6">

        {!opened ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-8xl"
          >
            💌
            <p className="text-white mt-4 text-lg">
              Tap to see the magic ✨
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl text-white max-w-md mx-auto shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">
              {cards[index].header}
            </h2>

            <p className="text-lg leading-relaxed">
              {cards[index].message}
            </p>

            <p className="mt-4 text-sm opacity-60">
              Tap for next 💕
            </p>
          </motion.div>
        )}

      </div>
    </div>
  )
}