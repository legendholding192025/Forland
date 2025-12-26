import Image from 'next/image';

export default function RequestQuoteHero() {
  return (
    <section 
      className="relative w-full overflow-hidden h-[220px] sm:h-[280px] md:h-[480px]"
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_6945544a644ce2.36760022_20251219_133402.webp"
        alt="Request Quote Hero"
        fill
        className="object-cover"
        priority
        quality={100}
        unoptimized={true}
        sizes="100vw"
      />
      {/* Heading - Centered on mobile, right side on desktop */}
      <div className="absolute inset-0 md:right-0 md:inset-auto md:top-1/2 md:-translate-y-1/2 flex items-center justify-center md:justify-start md:pr-8 lg:pr-16 gap-2 md:gap-3 z-10 px-4">
        {/* Left diagonal line */}
        <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10" />

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
        <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 md:w-10 md:h-10" />
      </div>
    </section>
  );
}

