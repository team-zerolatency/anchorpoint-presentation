'use client'

import { motion } from 'framer-motion'
import { Handshake, Users, Github, Globe, MessageCircle } from 'lucide-react'
import { fadeUp } from '@/components/motion'

export default function Slide12() {
  return (
    <section className="slide-card items-center justify-center text-center">
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="pill-badge mb-6">
        <Handshake size={14} /> AlgOlympia 2026 &middot; TrustChain Track
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.15}
        className="mb-3 text-[76px] font-bold leading-[1.05] tracking-tight"
      >
        Thank You!
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.3}
        className="mb-3.5 text-[28px] font-semibold"
        style={{ color: 'var(--color-purple)' }}
      >
        Anchorpoint Protocol
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.45}
        className="mb-9 max-w-3xl text-xl italic"
        style={{ color: 'var(--color-gold)' }}
      >
        &ldquo;Where every score and every payout has its anchor point on-chain.&rdquo;
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.6}
        className="tile-card highlight-gold flex w-full max-w-4xl items-center justify-around px-9 py-6"
      >
        <div className="flex flex-col gap-1.5 text-left">
          <span className="mono-text text-lo text-[11px] uppercase tracking-wide">Built By</span>
          <span className="flex items-center gap-2 text-base font-semibold" style={{ color: 'var(--color-hi)' }}>
            <Users size={16} style={{ color: 'var(--color-gold)' }} /> Team ZeroLatency
          </span>
        </div>
        <div className="h-9 w-px bg-hairline" />
        <div className="flex flex-col gap-1.5 text-left">
          <span className="mono-text text-lo text-[11px] uppercase tracking-wide">GitHub Repository</span>
          <span className="mono-text flex items-center gap-2 text-[15px] font-semibold" style={{ color: 'var(--color-purple)' }}>
            <Github size={16} /> github.com/haideralyy01
          </span>
        </div>
        <div className="h-9 w-px bg-hairline" />
        <div className="flex flex-col gap-1.5 text-left">
          <span className="mono-text text-lo text-[11px] uppercase tracking-wide">Developer Portfolio</span>
          <span className="mono-text flex items-center gap-2 text-[15px] font-semibold" style={{ color: 'var(--color-success)' }}>
            <Globe size={16} /> haideralyy01.dev
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.75}
        className="mono-text text-lo mt-7 flex items-center gap-2.5 text-[15px]"
      >
        <MessageCircle size={16} style={{ color: 'var(--color-purple)' }} /> We welcome your questions &amp; feedback!
      </motion.div>
    </section>
  )
}
