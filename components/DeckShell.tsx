'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Sun, Moon, Maximize, Minimize, ChevronLeft, ChevronRight } from 'lucide-react'

export default function DeckShell({ slides }: { slides: React.ComponentType[] }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= slides.length) return
      setDirection(next > index ? 1 : -1)
      setIndex(next)
    },
    [index, slides.length]
  )

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => setMounted(true), [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const fsHandler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', fsHandler)

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(index + 1)
      if (e.key === 'ArrowLeft') goTo(index - 1)
    }
    window.addEventListener('keydown', keyHandler)

    return () => {
      document.removeEventListener('fullscreenchange', fsHandler)
      window.removeEventListener('keydown', keyHandler)
    }
  }, [index, goTo])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta < -50) goTo(index + 1) // swipe left -> next
    if (delta > 50) goTo(index - 1) // swipe right -> prev
  }

  const Slide = slides[index]

  return (
    <div ref={containerRef}>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative h-screen w-full overflow-hidden bg-canvas text-zinc-900 dark:text-white"
        style={{ backgroundColor: 'var(--color-canvas)' }}
      >
        {/* Top-right controls */}
        <div className="fixed right-6 top-6 z-50 flex gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-zinc-300 bg-white/80 p-2.5 backdrop-blur transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/80"
          >
            {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
          </button>
          <button
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
            className="rounded-full border border-zinc-300 bg-white/80 p-2.5 backdrop-blur transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/80"
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>

        {/* Slide content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full bg-canvas"
          >
            <Slide />
          </motion.div>
        </AnimatePresence>

        {/* Bottom nav — arrows + progress dots */}
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4">
          <button
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="rounded-full border border-zinc-300 bg-white/80 p-2 backdrop-blur transition hover:scale-105 disabled:opacity-30 dark:border-zinc-700 dark:bg-zinc-900/80"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-6 bg-linear-to-l from-purple-400 to-yellow-400'
                    : 'w-1.5 bg-zinc-400/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(index + 1)}
            disabled={index === slides.length - 1}
            aria-label="Next slide"
            className="rounded-full border border-zinc-300 bg-white/80 p-2 backdrop-blur transition hover:scale-105 disabled:opacity-30 dark:border-zinc-700 dark:bg-zinc-900/80"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
