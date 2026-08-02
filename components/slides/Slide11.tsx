'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { fadeUp } from '@/components/motion'

const phases = [
  {
    tag: 'Phase 1 · Current',
    title: 'Devnet Execution Core',
    color: 'purple',
    items: ['Solana Devnet Anchor contract deployed.', 'On-chain rubric scoring & leaderboard.', 'Single-click multi-sig escrow release.'],
    done: true,
  },
  {
    tag: 'Phase 2 · Next',
    title: 'USDC & Mainnet Launch',
    color: 'gold',
    items: ['SPL Token support (USDC & BONK payouts).', 'Solana Mainnet-Beta deployment.', 'Squads Protocol multi-sig integration.'],
    done: false,
  },
  {
    tag: 'Phase 3 · Future',
    title: 'Reputation Network',
    color: 'default',
    items: ['Multi-event organizer dashboard portal.', 'Cross-hackathon judge scoring reputation.', 'Soulbound NFT achievement badges for winners.'],
    done: false,
  },
]

export default function Slide11() {
  return (
    <section className="slide-card justify-center">
      <SectionHeader index="10" label="ROADMAP" accent="Project Roadmap & Next Steps" />

      <div className="grid grid-cols-3 gap-5">
        {phases.map((p, i) => {
          const colorVar = p.color === 'purple' ? 'var(--color-purple)' : p.color === 'gold' ? 'var(--color-gold)' : 'var(--color-lo)'
          return (
            <motion.div
              key={p.tag}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15 + i * 0.12}
              className={`tile-card flex flex-col gap-3.5 ${p.color === 'purple' ? 'highlight-purple' : p.color === 'gold' ? 'highlight-gold' : ''}`}
            >
              <span className="code-badge w-fit" style={p.color !== 'default' ? { color: colorVar, borderColor: colorVar } : {}}>
                {p.tag}
              </span>
              <h3 className="text-xl" style={{ color: p.color === 'default' ? 'var(--color-hi)' : colorVar }}>
                {p.title}
              </h3>
              <ul className="bullet-list">
                {p.items.map((item) => (
                  <li key={item}>
                    {p.done ? <Check size={15} style={{ color: colorVar }} /> : <ArrowRight size={15} style={{ color: colorVar }} />}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
