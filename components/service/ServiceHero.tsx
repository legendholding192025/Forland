export default function ServiceHero() {
  return (
    <section
      className="relative w-full overflow-hidden aspect-[39/22] sm:aspect-[16/7] md:aspect-[4/1]"
      style={{
        backgroundImage: `url('https://cdn.legendholding.com/images/cdn_69454d103f4024.28967047_20251219_130312.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        src="https://cdn.legendholding.com/images/cdn_69454d103f4024.28967047_20251219_130312.webp"
        alt="Service Hero"
        className="sr-only"
      />
    </section>
  );
}

