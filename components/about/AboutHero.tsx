export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden aspect-[39/25] sm:aspect-[16/10] md:aspect-[5/4] lg:aspect-[8/5] xl:aspect-[8/3]"
      style={{
        backgroundImage: `url('https://cdn.legendholding.com/images/cdn_694653bd003775.11085689_20251220_074357.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        src="https://cdn.legendholding.com/images/cdn_694653bd003775.11085689_20251220_074357.webp"
        alt="About Hero"
        className="sr-only"
      />
    </section>
  );
}

