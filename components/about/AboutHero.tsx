import Image from 'next/image';

export default function AboutHero() {
  return (
    <section 
      className="relative w-full overflow-hidden h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[720px]"
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

