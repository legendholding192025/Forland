import Image from 'next/image';

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
          <span style={{ color: '#FFFFFF' }}>Newsfeed</span>
        </h1>

        {/* Right diagonal line */}
        <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />
      </div>
    </section>
  );
}

