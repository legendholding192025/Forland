'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NewsfeedHero() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '480px',
      }}
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_6948fe3f897273.25411755_20251222_081559.webp"
        alt="Newsfeed Hero"
        fill
        className="object-cover"
        priority
        quality={100}
        unoptimized={true}
        sizes="100vw"
      />
      {/* Heading on left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-8 lg:pl-16 flex items-center gap-3 z-10">
        {/* Left diagonal line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />
        </motion.div>

        {/* Title */}
        <h1 
          className="text-4xl font-normal"
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>Newsfeed</span>
        </h1>

        {/* Right diagonal line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />
        </motion.div>
      </div>
    </section>
  );
}

