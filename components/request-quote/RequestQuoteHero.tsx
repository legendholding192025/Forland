'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function RequestQuoteHero() {
  return (
    <section
      className="relative w-full overflow-hidden aspect-[39/22] sm:aspect-[16/7] md:aspect-[4/1]"
      style={{
        backgroundImage: `url('https://cdn.legendholding.com/images/cdn_6945544a644ce2.36760022_20251219_133402.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        src="https://cdn.legendholding.com/images/cdn_6945544a644ce2.36760022_20251219_133402.webp"
        alt="Request Quote Hero"
        className="sr-only"
      />
      {/* Heading - Centered on mobile, right side on desktop */}
      <div className="absolute inset-0 md:right-0 md:inset-auto md:top-1/2 md:-translate-y-1/2 flex items-center justify-center md:justify-start md:pr-8 lg:pr-16 gap-2 md:gap-3 z-10 px-4">
        {/* Left diagonal line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10" />
        </motion.div>

        {/* Title */}
        <h1 
          className="text-2xl md:text-4xl font-normal"
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>Request</span>{' '}
          <span style={{ color: '#DF0011' }}>a Quote</span>
        </h1>

        {/* Right diagonal line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10" />
        </motion.div>
      </div>
    </section>
  );
}

