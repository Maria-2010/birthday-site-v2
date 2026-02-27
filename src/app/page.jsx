"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence } from "motion/react"
import Loader from "./components/Loader"
import Countdown from "./components/Countdown"
import Celebration from "./components/Celebration"
import HappyBirthday from "./components/HappyBirthday"
import MagicMessages from "./components/MagicMessages"
import PhotoGallery from "./components/PhotoGallery"
import Letter from "./components/Letter"
import { motion } from "motion/react"
import FloatingHearts from "./components/FloatingHearts"

export default function BirthdayApp() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  
  const audioRef = useRef(null)
const [musicStarted, setMusicStarted] = useState(false)

  const birthdayDate = new Date("2026-01-02T00:00:00")
  const [isBirthdayOver, setisBirthdayOver] = useState(new Date().getTime() >= birthdayDate.getTime())

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
  if (musicStarted && audioRef.current) {
    audioRef.current.volume = 0.5
    audioRef.current.play()
  }
}, [musicStarted])

const stopMusic = () => {
  if (audioRef.current) {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
  }
}

  const screens = [
  !isBirthdayOver
    ? <Countdown 
        key="countdown" 
        onComplete={() => setisBirthdayOver(true)} 
        birthdayDate={birthdayDate} 
      />
    : <Celebration 
        key="celebration" 
        onNext={() => setCurrentScreen(1)} 
        onMusicStart={() => setMusicStarted(true)} 
      />,

  <HappyBirthday 
    key="happy" 
    onNext={() => setCurrentScreen(2)} 
  />,

  <MagicMessages 
    key="magic" 
    onNext={() => setCurrentScreen(3)} 
  />,

  <PhotoGallery 
    key="gallery" 
    onNext={() => setCurrentScreen(4)} 
  />,

  <Letter key="letter" stopMusic={stopMusic} />,
]

    return (
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950/30 via-black to-purple-950/30">

    {/* Floating Hearts */}
    <FloatingHearts />
    {/* Header */}
<div className="fixed top-6 left-0 w-full text-center z-30 pointer-events-none">
  <div className="text-4xl mb-2">💌</div>

  <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
    Special Message
  </h1>

  <p className="text-lg md:text-xl text-purple-200 mt-1">
    to Mummy!
  </p>
</div>

    {/* Background */}

    {/* Radial Effects */}
    <div className="fixed inset-0 z-0 blur-[120px] opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 25%, rgba(255, 99, 165, 0.6), transparent 40%)",
      }}
    />

    <div className="fixed inset-0 z-0 blur-[120px] opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.6), transparent 40%)",
      }}
    />

    <div className="fixed inset-0 z-0 blur-[160px] opacity-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(228, 193, 255, 0.4), transparent 40%)",
      }}
    />

    {/* Music */}
    <audio ref={audioRef} src="/music.mp3" loop />

    {/* Screens */}
      <div className="relative z-10 pt-36 md:pt-32">
      <AnimatePresence mode="wait">
  {isLoading ? (
    <Loader key="loader" />
  ) : (
    screens[currentScreen]
  )}
</AnimatePresence>
    </div>

    {/* Watermark */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed bottom-4 right-4 text-[13px] text-white/40 pointer-events-none z-50 font-light"
    >
      @Claina🥰
    </motion.div>

  </div>
)