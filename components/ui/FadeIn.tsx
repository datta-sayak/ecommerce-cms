'use client';

import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewMargin?: string;
}

export const FadeIn = memo(function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
  viewMargin = '-100px',
}: FadeInProps) {
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialProps = {
    opacity: 0,
    ...directionOffset[direction],
  };

  return (
    <motion.div
      initial={initialProps}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: viewMargin as any }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});
