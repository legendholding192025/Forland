export default function TestDriveHero() {
  return (
    <section
      className="relative w-full overflow-hidden aspect-[39/22] sm:aspect-[16/7] md:aspect-[4/1]"
      style={{
        backgroundImage: `url('https://cdn.legendholding.com/images/cdn_69463e3f0cf6a0.99697292_20251220_061215.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        src="https://cdn.legendholding.com/images/cdn_69463e3f0cf6a0.99697292_20251220_061215.webp"
        alt="Test Drive Hero"
        className="sr-only"
      />
    </section>
  );
}

