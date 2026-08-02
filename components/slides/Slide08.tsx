'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Workflow, Play } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const steps = [
  { label: '1. Connect Wallet & Lock Prize Escrow', tag: 'Devnet PDA Vault' },
  { label: '2. Submit Project Artifacts to IPFS', tag: 'Immutable Hash CID' },
  { label: '3. Submit On-Chain Judge Rubric Scores', tag: 'Weighted Rubric' },
  { label: '4. Verify Live Public Leaderboard State', tag: 'Consensus Reached' },
  { label: '5. Trigger Single-Click Batch Payout', tag: 'Instant Execution', gold: true },
]

export default function Slide08() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.demo-line', { scaleY: 0, transformOrigin: 'top center' })
      gsap.set('.demo-step', { opacity: 0, x: -16 })
      gsap.set('.demo-banner', { opacity: 0, y: 16 })

      const tl = gsap.timeline({ delay: 0.3 })
      tl.to('.demo-line', { scaleY: 1, duration: 1, ease: 'power2.inOut' })
        .to('.demo-step', { opacity: 1, x: 0, duration: 0.4, stagger: 0.15, ease: 'power2.out' }, '-=0.7')
        .to('.demo-banner', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="slide-card justify-center">
      <SectionHeader index="07" label="LIVE DEMO" accent="Execution Walkthrough" />

      <div className="flex flex-col gap-4">
        <div className="tile-card px-7 py-5">
          <h3 className="mb-4 flex items-center gap-2.5 text-[17px]" style={{ color: 'var(--color-gold)' }}>
            <Workflow size={18} style={{ color: 'var(--color-purple)' }} /> Demonstration Workflow &amp; Mind Map
          </h3>

          <div className="relative flex flex-col gap-2.5 pl-7">
            <div
              className="demo-line absolute left-[10px] top-[10px] bottom-[10px] w-0.5"
              style={{ background: 'linear-gradient(to bottom, var(--color-purple), var(--color-gold))' }}
            />
            {steps.map((s, i) => (
              <div
                key={s.label}
                className="demo-step relative flex items-center justify-between rounded-lg px-4 py-2"
                style={{
                  backgroundColor: 'var(--color-slide)',
                  border: `1px solid ${s.gold ? 'var(--highlight-gold-border)' : 'var(--color-hairline)'}`,
                }}
              >
                <span
                  className="absolute -left-[23px] h-3 w-3 rounded-full border-2"
                  style={{
                    backgroundColor: s.gold ? 'var(--color-gold)' : 'var(--color-purple)',
                    borderColor: 'var(--color-slide)',
                    boxShadow: `0 0 10px ${s.gold ? 'var(--color-gold)' : 'var(--color-purple)'}`,
                  }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: s.gold ? 'var(--color-gold)' : 'var(--color-hi)' }}
                >
                  {s.label}
                </span>
                <span
                  className="code-badge text-[11px]"
                  style={s.gold ? { color: 'var(--color-gold)', borderColor: 'var(--color-gold)' } : {}}
                >
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="demo-banner tile-card highlight-gold flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ backgroundColor: 'var(--gold-bg)', color: 'var(--color-gold)' }}
            >
              <Play size={18} />
            </div>
            <div>
              <h3 className="mb-0.5 text-[16px]">Solana Devnet Real-Time Verification</h3>
              <p className="text-[13px] text-[color:var(--color-lo)]">
                Every action produces an open transaction signature viewable on Solana Explorer.
              </p>
            </div>
          </div>
          <div
            className="mono-text whitespace-nowrap rounded-lg px-4 py-2.5 text-[13px]"
            style={{ backgroundColor: 'var(--color-slide)', border: '1px solid var(--color-hairline)', color: 'var(--color-purple)' }}
          >
            Tx: 5k9X8jP2mL4qR7vZ1wN3tY6uI0oS2eA8dB7cE6fG5hJ4
          </div>
        </div>
      </div>
    </section>
  )
}
