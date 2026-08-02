'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Check } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { fadeUp } from '@/components/motion'

const onChain = [
  { label: 'Escrow Funds', desc: 'Locked inside PDA vault accounts on Solana Devnet.' },
  { label: 'Rubric Scores', desc: 'Immutable state written per judge/team pair.' },
  { label: 'Submission Hashes', desc: 'IPFS CIDs recorded on-chain for tamper proofing.' },
  { label: 'Payout Execution', desc: 'Multi-sig CPI transfers straight to winner wallets.' },
]

const offChain = [
  { label: 'Project Deliverables', desc: 'Heavy decks, code repos, and videos stored on IPFS.' },
  { label: 'PostgreSQL Cache', desc: 'Fast UI read-mirror via Prisma 7 (never source of truth).' },
  { label: 'Express API', desc: 'Validates on-chain signatures before syncing DB records.' },
  { label: 'Next.js Portal', desc: 'Responsive UI with Solana Wallet Adapter hooks.' },
]

export default function Slide05() {
  return (
    <section className="slide-card justify-center">
      <SectionHeader index="04" label="ARCHITECTURE" accent="Trust Layer vs. Speed Layer" />

      <div className="grid grid-cols-2 gap-6">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.15} className="tile-card highlight-purple">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck size={24} style={{ color: 'var(--color-purple)' }} />
            <h3 className="text-[22px]" style={{ color: 'var(--color-purple)' }}>
              On-Chain (Trust Layer)
            </h3>
          </div>
          <ul className="bullet-list">
            {onChain.map((item) => (
              <li key={item.label}>
                <Check size={15} style={{ color: 'var(--color-purple)' }} />
                <strong>{item.label}:</strong> {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.3} className="tile-card highlight-gold">
          <div className="mb-5 flex items-center gap-3">
            <Zap size={24} style={{ color: 'var(--color-gold)' }} />
            <h3 className="text-[22px]" style={{ color: 'var(--color-gold)' }}>
              Off-Chain (Speed Layer)
            </h3>
          </div>
          <ul className="bullet-list">
            {offChain.map((item) => (
              <li key={item.label}>
                <Check size={15} style={{ color: 'var(--color-gold)' }} />
                <strong>{item.label}:</strong> {item.desc}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
