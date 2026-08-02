'use client'

import { motion } from 'framer-motion'
import { Lock, Users, Database } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { fadeUp } from '@/components/motion'

const items = [
  {
    icon: Lock,
    title: 'Proof of Funds',
    desc: 'Prize pools are pre-funded into a program-owned escrow PDA before submissions open. No admin or central wallet can access or withdraw funds alone.',
    highlight: 'purple',
  },
  {
    icon: Users,
    title: 'Multi-Sig Threshold',
    desc: 'A strict threshold of independent judge signatures (e.g. 2-of-3) is required on-chain before the program executes payout instructions.',
    highlight: 'gold',
  },
  {
    icon: Database,
    title: 'Immutable Records',
    desc: 'Scores and submission IPFS CIDs are written once per judge/team pair. They can never be overwritten or silently altered off-chain.',
    highlight: 'purple',
  },
]

export default function Slide07() {
  return (
    <section className="slide-card justify-center">
      <SectionHeader index="06" label="SECURITY" accent="Trust & Security Guarantees" />

      <div className="grid grid-cols-3 gap-5">
        {items.map((item, i) => {
          const isGold = item.highlight === 'gold'
          return (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15 + i * 0.12}
              className={`tile-card flex flex-col gap-4 p-7 ${isGold ? 'highlight-gold' : 'highlight-purple'}`}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: isGold ? 'rgba(250,204,21,0.15)' : 'rgba(192,132,252,0.15)',
                  color: isGold ? 'var(--color-gold)' : 'var(--color-purple)',
                }}
              >
                <item.icon size={22} />
              </div>
              <h3 className="text-xl" style={{ color: isGold ? 'var(--color-gold)' : 'var(--color-hi)' }}>
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-lo)]">{item.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
