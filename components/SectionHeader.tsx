'use client'

import { motion } from 'framer-motion'

export default function SectionHeader({
  index,
  label,
  accent,
  accentColor = 'purple',
}: {
  index: string
  label: string
  accent: string
  accentColor?: 'purple' | 'gold'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="section-header"
    >
      <span className="index">
        <span style={{ color: '#9a8fb0' }}>{index}</span>{' '}
        <span style={{ color: '#c084fc' }}>/</span>{' '}
        {label}:{' '}
      </span>
      <span className={accentColor === 'gold' ? 'gold' : 'accent'}>{accent}</span>
    </motion.div>
  )
}
