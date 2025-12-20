import Image from 'next/image';

export default function AboutHero() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '720px',
      }}
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_694653bd003775.11085689_20251220_074357.webp"
        alt="About Hero"
        fill
        className="object-cover"
        priority
        quality={100}
        unoptimized={true}
        sizes="100vw"
      />
    </section>
  );
}

