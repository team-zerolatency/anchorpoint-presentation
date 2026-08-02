'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SectionHeader from '@/components/SectionHeader'

export default function Slide10() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.stat-card', { opacity: 0, y: 24 })
      gsap.to('.stat-card', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.3, ease: 'power2.out' })

      const counter = document.querySelector('.stat-percent')
      if (counter) {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: 100,
          duration: 1.2,
          delay: 0.6,
          ease: 'power2.out',
          onUpdate: () => {
            counter.textContent = `${Math.round(obj.val)}%`
          },
        })
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="slide-card justify-center">
      <SectionHeader index="09" label="IMPACT" accent="Quantifiable Impact" />

      <div className="grid grid-cols-3 gap-5">
        <div className="stat-card tile-card highlight-gold flex flex-col items-center justify-center px-6 py-9 text-center">
          <span className="mono-text text-[54px] font-bold leading-none" style={{ color: 'var(--color-gold)' }}>
            &lt; 2s
          </span>
          <h3 className="my-4 text-lg">Instant Payout Speed</h3>
          <p className="text-sm text-[color:var(--color-lo)]">
            Replaces 30+ day administrative payment delays with sub-2 second Solana finality.
          </p>
        </div>

        <div className="stat-card tile-card highlight-purple flex flex-col items-center justify-center px-6 py-9 text-center">
          <span className="stat-percent mono-text text-[54px] font-bold leading-none" style={{ color: 'var(--color-purple)' }}>
            0%
          </span>
          <h3 className="my-4 text-lg">On-Chain Auditable</h3>
          <p className="text-sm text-[color:var(--color-lo)]">
            Every submission CID and judge score is permanently verifiable on Solana Explorer.
          </p>
        </div>

        <div className="stat-card tile-card highlight-gold flex flex-col items-center justify-center px-6 py-9 text-center">
          <span className="mono-text text-[54px] font-bold leading-none" style={{ color: 'var(--color-gold)' }}>
            ZERO
          </span>
          <h3 className="my-4 text-lg">Trust Required in Admin</h3>
          <p className="text-sm text-[color:var(--color-lo)]">
            Smart contract code enforces escrow rules. No human holds private keys to the vault.
          </p>
        </div>
      </div>
    </section>
  )
}
