'use client'

import { motion } from 'framer-motion'
import { Unlink, FileSpreadsheet, History } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { fadeUp } from '@/components/motion'

const problems = [
  {
    icon: Unlink,
    title: 'Disconnected Tooling',
    desc: 'Submissions, rubrics, judging, and prize payouts live in separate, siloed off-chain platforms with no cryptographic connection.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Spreadsheet Scoring',
    desc: 'Judge scores sit in private spreadsheets that nobody outside event organizers can verify, audit, or cross-check.',
  },
  {
    icon: History,
    title: '30+ Day Payout Delays',
    desc: 'Prize money takes weeks or months to clear administrative hurdles, with zero proof of pre-funded prize pools upfront.',
  },
]

export default function Slide02() {
  return (
    <section className="slide-card justify-center">
      <SectionHeader index="01" label="PROBLEM" accent="Manual Trust & Fragmented Systems" />

      <div className="grid grid-cols-3 gap-5">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.15 + i * 0.12}
            className="tile-card highlight-red flex flex-col gap-4"
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-[10px]"
              style={{ backgroundColor: 'var(--danger-bg)', color: 'var(--color-danger)' }}
            >
              <p.icon size={20} />
            </div>
            <h3 className="text-xl" style={{ color: 'var(--color-danger)' }}>
              {p.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[color:var(--color-lo)]">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
