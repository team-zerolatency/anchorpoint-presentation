'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Circle, Check, Zap } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const rows = [
  { rank: '#1', team: 'Team SolanaStrike', wallet: '7x9K...mQ41', score: '96.5 / 100', payout: '3.0 SOL ($450)', color: 'var(--color-gold)', border: 'var(--highlight-gold-border)' },
  { rank: '#2', team: 'Team CyberVault', wallet: '3m1P...k8L9', score: '92.0 / 100', payout: '1.5 SOL ($225)', color: 'var(--color-purple)', border: 'var(--color-hairline)' },
  { rank: '#3', team: 'Team BlockShield', wallet: '9r4K...pL22', score: '88.5 / 100', payout: '0.5 SOL ($75)', color: 'var(--color-hi)', border: 'var(--color-hairline)' },
]

export default function Slide07() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.lb-row', { opacity: 0, x: -20 })
      gsap.set('.lb-banner', { opacity: 0, scale: 0.96 })
      const tl = gsap.timeline({ delay: 0.3 })
      tl.to('.lb-row', { opacity: 1, x: 0, duration: 0.4, stagger: 0.15, ease: 'power2.out' })
        .to('.lb-banner', { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.1')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="slide-card justify-center">
      <SectionHeader index="08" label="EXECUTION" accent="Instant Batch Payout & Live Leaderboard" />

      <div className="flex flex-col gap-5">
        <div className="tile-card px-6 py-5">
          <div className="mb-3.5 flex items-center justify-between">
            <span className="text-base font-semibold" style={{ color: 'var(--color-hi)' }}>Final Event Leaderboard (Verified On-Chain State)</span>
            <span className="code-badge">
              <Circle size={9} fill="var(--color-success)" style={{ color: 'var(--color-success)' }} /> Multi-Sig Threshold Met (2/3)
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {rows.map((r) => (
              <div
                key={r.rank}
                className="lb-row flex items-center justify-between rounded-[10px] px-4.5 py-2.5"
                style={{ backgroundColor: 'var(--color-slide)', border: `1px solid ${r.border}` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold" style={{ color: r.color }}>
                    {r.rank}
                  </span>
                  <span className="text-[15px] font-semibold" style={{ color: 'var(--color-hi)' }}>{r.team}</span>
                  <span className="mono-text text-xs" style={{ color: 'var(--color-hi)' }}>{r.wallet}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm" style={{ color: 'var(--color-hi)' }}>
                    Score: <strong>{r.score}</strong>
                  </span>
                  <span className="text-[15px] font-bold" style={{ color: r.color }}>
                    {r.payout}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lb-banner tile-card highlight-gold flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: 'var(--success-bg)', color: 'var(--color-success)' }}
            >
              <Check size={18} />
            </div>
            <div>
              <div className="text-[15px] font-semibold" style={{ color: 'var(--color-hi)' }}>
                Single-Click Multi-Sig Escrow Release Executed (5.0 SOL Total)
              </div>
              <div className="mono-text mt-0.5 text-xs" style={{ color: 'var(--color-hi)' }}>
                Devnet Tx: <span style={{ color: 'var(--color-purple)' }}>5k9X8jP2mL4qR7vZ1wN3tY6uI0oS2eA8dB7cE6fG5hJ4</span>
              </div>
            </div>
          </div>
          <span className="mono-text flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: 'var(--color-success)' }}>
            <Zap size={14} /> Finality: 1.8s
          </span>
        </div>
      </div>
    </section>
  )
}
