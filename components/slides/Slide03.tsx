'use client'

import { motion } from 'framer-motion'
import { Lock, ShieldCheck, Zap } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { fadeUp } from '@/components/motion'

const pillars = [
  {
    icon: Lock,
    title: 'Escrow Lock',
    desc: 'Prize funds are pre-funded into a program-owned Solana account (PDA) before project submissions ever open.',
    highlight: 'purple',
  },
  {
    icon: ShieldCheck,
    title: 'On-Chain Scoring',
    desc: 'Judge scores are written once as permanent, verifiable on-chain account state records that cannot be altered.',
    highlight: 'purple',
  },
  {
    icon: Zap,
    title: 'Multi-Sig Payout',
    desc: "Funds auto-release directly to winners' public wallet addresses the moment judge consensus thresholds are met.",
    highlight: 'gold',
  },
]

export default function Slide03() {
  return (
    <section className="slide-card justify-center">
      <SectionHeader index="02" label="THE SOLUTION" accent="One Trustless Pipeline" />

      <div className="grid grid-cols-3 gap-5">
        {pillars.map((p, i) => {
          const isGold = p.highlight === 'gold'
          return (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15 + i * 0.12}
              className={`tile-card flex flex-col gap-4 ${isGold ? 'highlight-gold' : 'highlight-purple'}`}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-[10px]"
                style={{
                  backgroundColor: isGold ? 'var(--gold-bg)' : 'var(--purple-bg)',
                  color: isGold ? 'var(--color-gold)' : 'var(--color-purple)',
                }}
              >
                <p.icon size={20} />
              </div>
              <h3 className="text-xl" style={{ color: isGold ? 'var(--color-gold)' : 'var(--color-hi)' }}>
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-lo)]">{p.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
