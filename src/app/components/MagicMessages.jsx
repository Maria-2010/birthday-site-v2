"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Heart } from "lucide-react"

export default function MagicMessages({ onNext }) {

  const cards = [
  {
    header: "Like a Mother",
    message:
      "Happy Birthday, Ma’am! You don’t just teach us; you care for us like a mother. Having you in school makes me feel safe and happy every single day."
  },
  {
    header: "My Kind Guide",
    message:
      "Thank you for always being on my side. No matter what the problem is, you always listen and support me. Just knowing you are in my corner gives me so much strength."
  },
  {
    header: "My Inspiration",
    message:
      "You are the reason I love History now! I used to actually hate it, but the way you teach changed everything for me. Thank you for being such an amazing inspiration."
  },
  {
    header: "Stay Happy",
    message:
      "My biggest wish for you is that you should always be happy. You deserve all the smiles and joy in the world."
  }
]

  const [opened, setOpened] = useState(false)
  const [index, setIndex] = useState(0)
  
  const colors = [
  "from-pink-200 to-pink-100",
  "from-purple-200 to-purple-100",
  "from-indigo-200 to-indigo-100",
  "from-rose-200 to-rose-100",
  "from-fuchsia-200 to-fuchsia-100",
]


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
  <div className="min-h-screen flex flex-col items-center justify-center p-6 
  bg-gradient-to-br from-purple-950/30 via-black to-purple-950/30">

    {/* 🔹 Heading Section */}
    <div className="text-center mb-8">

      <div className="text-5xl mb-2">💌</div>

      <h1 className="text-3xl md:text-5xl font-bold text-transparent 
      bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
        Special Messages
      </h1>

      <p className="text-lg md:text-xl text-purple-200 mt-2">
        to you Mummy!
      </p>

    </div>

    {/* Content */}
    <div onClick={handleClick} className="cursor-pointer text-center px-6">

      {!opened ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative w-72 h-48 mx-auto"
        >
          {/* Envelope Body */}
          <div className="absolute bottom-0 w-full h-36 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl shadow-2xl border-2 border-pink-300"></div>

          {/* Envelope Flap */}
          <div className="absolute top-0 left-0 w-full h-0 
            border-l-[144px] border-r-[144px] border-b-[96px] 
            border-l-transparent border-r-transparent border-b-pink-300">
          </div>

          {/* Heart in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="w-14 h-14 text-red-500 fill-current" />
          </div>

          {/* Tap Text */}
          <p className="absolute bottom-3 w-full text-center text-pink-700 font-semibold animate-pulse">
            Tap to open 💕
          </p>
        </motion.div>
      ) : (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={`p-8 rounded-3xl max-w-md mx-auto shadow-2xl
            bg-gradient-to-br ${colors[index % colors.length]}
            text-gray-800 border border-white/30`}
        >
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
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