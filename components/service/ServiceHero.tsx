import Image from 'next/image';

export default function ServiceHero() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ 
        height: '480px',
      }}
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_69454d103f4024.28967047_20251219_130312.webp"
        alt="Service Hero"
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

