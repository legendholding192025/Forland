import Image from 'next/image';

export default function TestDriveHero() {
  return (
    <section 
      className="relative w-full overflow-hidden h-[300px] md:h-[480px]"
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_69463e3f0cf6a0.99697292_20251220_061215.webp"
        alt="Test Drive Hero"
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

