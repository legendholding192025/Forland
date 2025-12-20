import Image from 'next/image';

export default function GetInTouchHero() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '234px',
        backgroundColor: '#000000',
      }}
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_694647b58bac47.20710499_20251220_065237.webp"
        alt="Get in Touch Hero"
        fill
        className="object-cover"
        priority
        quality={100}
        unoptimized={true}
        sizes="100vw"
      />
      {/* Heading centered */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 z-10">
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
          <span style={{ color: '#DF0011' }}>Need Help,</span>{' '}
          <span style={{ color: '#FFFFFF' }}>Get in Touch</span>
        </h1>

        {/* Right diagonal line */}
        <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />
      </div>
    </section>
  );
}

