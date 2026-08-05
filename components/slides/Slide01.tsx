'use client'

import { motion } from 'framer-motion'
import { Box, Users, Zap, ShieldCheck } from 'lucide-react'
import { fadeUp } from '@/components/motion'

export default function Slide01() {
  return (
    <section className="slide-card items-center justify-center text-center">
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="pill-badge mb-6">
        <Box size={14} /> IDEATHON 2026 &middot; TrustChain Track &middot; Solana Network
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.15}
        className="mb-4 text-[72px] font-bold leading-[1.05] tracking-tight"
      >
        Anchorpoint
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.3}
        className="mb-10 max-w-3xl text-2xl font-medium"
        style={{ color: 'var(--color-purple)' }}
      >
        Automated Decentralized Hackathon Escrow &amp; Payout Platform
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.45}
        className="tile-card highlight-purple flex w-full max-w-4xl items-center justify-around px-8 py-5"
      >
        <div className="flex flex-col gap-1 text-left">
          <span className="mono-text text-lo text-[11px] uppercase tracking-wide">
            Team Name
          </span>
          <span className="flex items-center gap-2 text-base font-semibold" style={{ color: 'var(--color-gold)' }}>
            <Users size={16} /> Team ZeroLatency
          </span>
        </div>
        <div className="h-8 w-px bg-hairline" />
        <div className="flex flex-col gap-1 text-left">
          <span className="mono-text text-lo text-[11px] uppercase tracking-wide">
            Smart Contract
          </span>
          <span className="flex items-center gap-2 text-base font-semibold" style={{ color: 'var(--color-hi)' }}>
            <Zap size={16} style={{ color: 'var(--color-gold)' }} /> Solana Devnet (Anchor / Rust)
          </span>
        </div>
        <div className="h-8 w-px bg-hairline" />
        <div className="flex flex-col gap-1 text-left">
          <span className="mono-text text-lo text-[11px] uppercase tracking-wide">
            Core Mechanism
          </span>
          <span className="flex items-center gap-2 text-base font-semibold" style={{ color: 'var(--color-hi)' }}>
            <ShieldCheck size={16} style={{ color: 'var(--color-purple)' }} /> PDA Escrow + Multi-Sig
          </span>
        </div>
      </motion.div>
    </section>
  )
}
