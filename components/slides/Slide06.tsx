'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { fadeUp } from '@/components/motion'

const rows = [
  { layer: 'Smart Contract', tech: ['Rust', 'Anchor Framework'], role: 'Program-owned escrow vault & multi-sig score state.' },
  { layer: 'Backend API', tech: ['Express', 'TypeScript', 'Zod'], role: 'Re-verifies on-chain signatures before database write.' },
  { layer: 'Database', tech: ['PostgreSQL', 'Prisma 7'], role: 'High-speed read cache (never the primary source of truth).' },
  { layer: 'Frontend Portal', tech: ['Next.js', 'Tailwind', 'Wallet Adapter'], role: 'Web3 wallet connection, submission form, and leaderboard.' },
  { layer: 'Storage & RPC', tech: ['IPFS / Arweave', 'Helius RPC'], role: 'Decentralized video/deck storage & high-throughput RPCs.' },
]

export default function Slide06() {
  return (
    <section className="slide-card justify-center">
      <SectionHeader index="05" label="TECH STACK" accent="Technical Stack & Infrastructure" />

      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.15} className="tile-card overflow-hidden p-0!">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr style={{ backgroundColor: 'var(--color-panel)' }}>
              <th className="px-6 py-4 text-[15px]" style={{ color: 'var(--color-purple)', fontFamily: 'var(--font-display)' }}>Layer</th>
              <th className="px-6 py-4 text-[15px]" style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-display)' }}>Technologies</th>
              <th className="px-6 py-4 text-[15px]" style={{ color: 'var(--color-hi)', fontFamily: 'var(--font-display)' }}>Role in System</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: 'var(--color-slide)' }}>
            {rows.map((r, i) => (
              <tr key={r.layer} style={{ borderTop: i > 0 ? '1px solid var(--color-hairline)' : undefined }}>
                <td className="px-6 py-4 text-sm font-semibold" style={{ color: 'var(--color-hi)' }}>{r.layer}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {r.tech.map((t) => (
                      <span key={t} className="code-badge">{t}</span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--color-hi)' }}>{r.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  )
}
