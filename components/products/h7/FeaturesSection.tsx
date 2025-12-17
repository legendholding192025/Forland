export default function FeaturesSection() {
  const blocks = [
    {
      height: '288px',
      bg: '#000000',
      image: {
        src: 'https://cdn.legendholding.com/images/cdn_69427a156e6085.94279820_20251217_093829.webp',
        width: 311,
        height: 193,
        align: 'left' as const,
      },
      content: {
        title: 'Most attractive appearance',
        titleColor: '#DF0011',
        body: `European truck design concept makes the vehicle more beautiful and produces spacious driving space.
With car trimmings, its accuracy and control approach car level while providing comfortable driving experience.`,
        bodyColor: '#CFCFCF',
      },
    },
    {
      height: '288px',
      bg: '#DF0011',
      image: {
        src: 'https://cdn.legendholding.com/images/cdn_69427a71046ba8.41991395_20251217_094001.webp',
        width: 309,
        height: 192,
        align: 'right' as const,
      },
      content: {
        title: 'High load, efficiency and speed',
        titleColor: '#FFFFFF',
        body: `The vehicle matches high strength frame, aluminum gearbox, aluminum alloy rim, fuel tank, air reservoir, tubeless tire, integral casting rear axle with equal height teeth, gradual leaf spring, and aluminum cargo body.
It has the advantages of light weight, high power, fast running, and low fuel consumption.`,
        bodyColor: '#F2F2F2',
      },
    },
    {
      height: '288px',
      bg: '#000000',
      image: {
        src: 'https://cdn.legendholding.com/images/cdn_69427aaf8f1dd0.81359421_20251217_094103.webp',
        width: 309,
        height: 192,
        align: 'left' as const,
      },
      content: {
        title: 'Super large cargo body and more load',
        titleColor: '#FFFFFF',
        body: `The super-large volume of the cargo body is 67.8 m³, the longest cargo body can reach 9.6m.
Even more, the loading space is large, and the height of the cargo platform is 1.22m, which makes loading and unloading more convenient.`,
        bodyColor: '#CFCFCF',
      },
    },
    {
      height: '365px',
      bg: '#DF0011',
      images: [
        {
          src: 'https://cdn.legendholding.com/images/cdn_6942a4fce0a404.83684126_20251217_124132.webp',
          width: 279,
          height: 186,
        },
        {
          src: 'https://cdn.legendholding.com/images/cdn_6942a58f104ae5.31009882_20251217_124359.webp',
          width: 365,
          height: 239,
        },
        {
          src: 'https://cdn.legendholding.com/images/cdn_6942a5a61788a0.85500238_20251217_124422.webp',
          width: 280,
          height: 187,
        },
      ],
    },
    { height: '593px', bg: '#000000' },
  ];

  return (
    <section className="w-full">
      <div className="w-full relative">
        {blocks.map((block, idx) => (
          <div
            key={idx}
            className="w-full flex items-center"
            style={{
              height: block.height,
              background: block.bg,
            }}
          >
            <div className="w-full">
              {/* Keep background full-width, but constrain content to site container width */}
              <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
                <div className="w-full flex items-center">
                  {block.image && block.image.align === 'left' && (
                    <div className="pl-8 sm:pl-12 lg:pl-28">
                      <img
                        src={block.image.src}
                        alt=""
                        width={block.image.width}
                        height={block.image.height}
                        style={{ objectFit: 'contain', display: 'block' }}
                      />
                    </div>
                  )}

                  {block.content && block.image?.align === 'left' && (
                    <div className="flex-1 px-8 sm:px-12 lg:px-20">
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                          fontSize: '28px',
                          lineHeight: '120%',
                          color: block.content.titleColor,
                          margin: 0,
                        }}
                      >
                        {block.content.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                          fontSize: '18px',
                          lineHeight: '150%',
                          color: block.content.bodyColor,
                          margin: 0,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {block.content.body}
                      </p>
                    </div>
                  )}

                  {block.content && block.image?.align === 'right' && (
                    <div className="flex-1 px-8 sm:px-12 lg:px-20">
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                          fontSize: '28px',
                          lineHeight: '120%',
                          color: block.content.titleColor,
                          margin: 0,
                        }}
                      >
                        {block.content.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                          fontSize: '18px',
                          lineHeight: '150%',
                          color: block.content.bodyColor,
                          margin: 0,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {block.content.body}
                      </p>
                    </div>
                  )}

                  {!block.content && <div className="flex-1" />}

                  {'images' in block && block.images && (
                    <div className="w-full flex items-center justify-center gap-6 -mt-4">
                      {block.images.map((img, i) => (
                        <img
                          key={`${img.src}-${i}`}
                          src={img.src}
                          alt=""
                          width={img.width}
                          height={img.height}
                          style={{ objectFit: 'contain', display: 'block' }}
                        />
                      ))}
                    </div>
                  )}

                  {block.image && block.image.align === 'right' && (
                    <div className="pr-8 sm:pr-12 lg:pr-28">
                      <img
                        src={block.image.src}
                        alt=""
                        width={block.image.width}
                        height={block.image.height}
                        style={{ objectFit: 'contain', display: 'block' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Truck image overlay (absolute so it's not pushed down by the 5th block height) */}
        <div className="absolute left-0 right-0 z-20" style={{ top: '1200px' }}>
          <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
            <div className="flex justify-center">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src="https://cdn.legendholding.com/images/cdn_6940097700d295.64254957_20251215_131327.webp"
                  alt="Truck Image 1"
                  width={1151.320556640625}
                  height={450.13433837890625}
                  style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                />

                {/* Red Card - 144x144 half on image, half outside */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-60px',
                    left: '15%',
                    transform: 'translateX(-50%)',
                    width: '144px',
                    height: '144px',
                    background: '#DF0011',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <img
                    src="/text/forland-text.svg"
                    alt="Forland Text"
                    width={110}
                    height={32}
                    style={{ display: 'block' }}
                  />
                  <img src="/text/H7-text.svg" alt="H7 Text" width={80} height={24} style={{ display: 'block' }} />
                  <div
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '18px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#FFFFFF',
                      textAlign: 'center',
                    }}
                  >
                    Cargo Truck
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


