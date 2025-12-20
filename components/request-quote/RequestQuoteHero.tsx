import Image from 'next/image';

export default function RequestQuoteHero() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '480px',
      }}
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
      {/* Heading on right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-8 lg:pr-16 flex items-center gap-3">
        {/* Left diagonal line */}
        <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />

        {/* Title */}
        <h1 
          className="text-4xl font-normal"
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
        <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />
      </div>
    </section>
  );
}

