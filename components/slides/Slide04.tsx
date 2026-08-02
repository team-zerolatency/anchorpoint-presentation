'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SectionHeader from '@/components/SectionHeader'

const steps = [
  { n: '01', title: 'Escrow Lock', desc: 'Organizer deposits prize SOL/USDC into PDA vault.', tag: 'PDA Vault' },
  { n: '02', title: 'Submission', desc: 'Teams connect wallet; project files write IPFS hash on-chain.', tag: 'IPFS CID' },
  { n: '03', title: 'On-Chain Scoring', desc: 'Judges sign rubric scores directly to Solana accounts.', tag: 'Rubric State' },
  { n: '04', title: 'Live Ranking', desc: 'Leaderboard derives rank from on-chain scores.', tag: 'Verified Rank' },
  { n: '05', title: 'Batch Payout', desc: 'Multi-sig threshold triggers single-click payout.', tag: 'Instant Execution', gold: true },
]

export default function Slide04() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.lifecycle-card', { opacity: 0, y: 30 })
      gsap.to('.lifecycle-card', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        delay: 0.3,
        ease: 'back.out(1.6)',
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="slide-card justify-center">
      <SectionHeader index="03" label="LIFECYCLE" accent="Platform Lifecycle & Execution Flow" />

      <div className="grid grid-cols-5 gap-3.5">
        {steps.map((s) => (
          <div
            key={s.n}
            className={`lifecycle-card tile-card flex h-[340px] flex-col justify-between ${
              s.gold ? 'highlight-gold' : ''
            }`}
          >
            <div>
              <span
                className="mono-text text-[26px] font-bold"
                style={{ color: s.gold ? 'var(--color-gold)' : 'var(--color-purple)' }}
              >
                {s.n}
              </span>
              <h3
                className="mb-2 mt-3 text-[16px]"
                style={{ color: s.gold ? 'var(--color-gold)' : 'var(--color-hi)' }}
              >
                {s.title}
              </h3>
              <p className="text-[13px] leading-snug text-[color:var(--color-lo)]">{s.desc}</p>
            </div>
            <span className="code-badge w-fit" style={s.gold ? { color: 'var(--color-gold)', borderColor: 'var(--color-gold)' } : {}}>
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
