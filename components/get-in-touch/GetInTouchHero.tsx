'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GetInTouchHero() {
  return (
    <section 
      className="relative w-full overflow-hidden h-[286px]"
      style={{ 
        backgroundColor: '#000000',
      }}
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_694e7951293693.75946638_20251226_120225.webp"
        alt="Get in Touch Hero"
        fill
        className="object-cover"
        style={{ objectPosition: 'center 75%' }}
        priority
        quality={100}
        unoptimized={true}
        sizes="100vw"
      />
      {/* Heading centered */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 z-10 px-4">
        {/* Left diagonal line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.1 }}
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
          <span style={{ color: '#DF0011' }}>Need Help,</span>{' '}
          <span style={{ color: '#FFFFFF' }}>Get in Touch</span>
        </h1>

        {/* Right diagonal line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10" />
        </motion.div>
      </div>
    </section>
  );
}

