export default function FeaturesSection() {
  const blocks = [
    {
      height: '288px',
      bg: '#000000',
      image: {
        src: 'https://cdn.legendholding.com/images/cdn_6943c9c03b9210.87412234_20251218_093040.webp',
        width: 311,
        height: 193,
        align: 'left' as const,
      },
      content: {
        title: 'Super large space and exceptional performance',
        titleColor: '#DF0011',
        body: `In the wide cargo body, two rows of logistics pallets can be placed side by side, this securing higher space use and providing users with accurate and scientific logistics solutions`,
        bodyColor: '#CFCFCF',
      },
    },
    {
      height: '288px',
      bg: 'linear-gradient(270deg, #E00E0E 0%, #7A0808 100%)',
      image: {
        src: 'https://cdn.legendholding.com/images/cdn_6943c9f144ce78.41921351_20251218_093129.webp',
        width: 309,
        height: 192,
        align: 'right' as const,
      },
      content: {
        title: 'Robust power and classic high efficiency',
        titleColor: '#FFFFFF',
        body: `DEV2.5/3.0 engine designed by German FEV adopts 16-valve distribution system and timing gear + belt transmission system, with the features of low noise, stable operation, high transmission accuracy, compact structure, reliability and durability.`,
        bodyColor: '#F2F2F2',
      },
    },
    {
      height: '288px',
      bg: '#000000',
      image: {
        src: 'https://cdn.legendholding.com/images/cdn_6943ca18991038.56907373_20251218_093208.webp',
        width: 309,
        height: 192,
        align: 'left' as const,
      },
      content: {
        title: 'Comfortable driving',
        titleColor: '#FFFFFF',
        body: `With car trimmings, the standard configurations include central locking, electric window, remote control key, six-way adjustment hydraulic shock absorption seat, front row can lie down to rest, easy to operate, more comfortable to drive.`,
        bodyColor: '#CFCFCF',
      },
    },
    {
      height: '365px',
      bg: 'linear-gradient(270deg, #E00E0E 0%, #7A0808 100%)',
      images: [
        {
          src: 'https://cdn.legendholding.com/images/cdn_6943caec9378b9.70673658_20251218_093540.webp',
          width: 279,
          height: 186,
        },
        {
          src: 'https://cdn.legendholding.com/images/cdn_6943cb06a21193.47451017_20251218_093606.webp',
          width: 365,
          height: 239,
        },
        {
          src: 'https://cdn.legendholding.com/images/cdn_6943cb2107d9f5.02504410_20251218_093633.webp',
          width: 280,
          height: 187,
        },
      ],
    },
    {
      height: '593px',
      bg: '#000000',
      truckImage: {
        src: 'https://cdn.legendholding.com/images/cdn_694009a235ef95.34125296_20251215_131410.webp',
        width: 1151.320556640625,
        height: 450.13433837890625,
      },
    },
  ];

  return (
    <section className="w-full">
      <div className="w-full">
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
                    <div className="w-full flex items-center justify-center gap-6">
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

                  {'truckImage' in block && block.truckImage && (
                    <div className="w-full flex justify-center items-center">
                      <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                          src={block.truckImage.src}
                          alt="Truck Image L5"
                          width={block.truckImage.width}
                          height={block.truckImage.height}
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
                          <img src="/text/L5-text.svg" alt="L5 Text" width={80} height={24} style={{ display: 'block' }} />
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
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

