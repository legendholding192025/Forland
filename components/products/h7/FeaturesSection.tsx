'use client';

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
        body: `European truck design concept makes the vehicle more beautiful and produces spacious driving space. With car trimmings, its accuracy and control approach car level while providing comfortable driving experience.`,
        bodyColor: '#CFCFCF',
      },
    },
    {
      height: '288px',
      bg: 'linear-gradient(270deg, #E00E0E 0%, #7A0808 100%)',
      image: {
        src: 'https://cdn.legendholding.com/images/cdn_69427a71046ba8.41991395_20251217_094001.webp',
        width: 309,
        height: 192,
        align: 'right' as const,
      },
      content: {
        title: 'High load, efficiency and speed',
        titleColor: '#FFFFFF',
        body: `The vehicle matches high strength frame, aluminum gearbox, aluminum alloy rim, fuel tank, air reservoir, tubeless tire, integral casting rear axle with equal height teeth, gradual leaf spring, and aluminum cargo body. It has the advantages of light weight, high power, fast running, and low fuel consumption.`,
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
        body: `The super-large volume of the cargo body is 67.8 m³, the longest cargo body can reach 9.6m. Even more, the loading space is large, and the height of the cargo platform is 1.22m, which makes loading and unloading more convenient.`,
        bodyColor: '#CFCFCF',
      },
    },
    {
      height: '365px',
      bg: 'linear-gradient(270deg, #E00E0E 0%, #7A0808 100%)',
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
    {
      height: '593px',
      bg: '#000000',
      truckImage: {
        src: 'https://cdn.legendholding.com/images/cdn_6940097700d295.64254957_20251215_131327.webp',
        width: 1151.320556640625,
        height: 450.13433837890625,
      },
    },
  ];

  return (
    <section className="w-full">
      <style jsx>{`
        @media (min-width: 1024px) {
          .feature-block-0 { height: 288px !important; }
          .feature-block-1 { height: 288px !important; }
          .feature-block-2 { height: 288px !important; }
          .feature-block-3 { height: 365px !important; }
          .feature-block-4 { height: 593px !important; }
        }
        /* Desktop - wrapper divs should not constrain images, use original Image component sizes */
        @media (min-width: 1025px) {
          .feature-red-card-logo-forland {
            width: 110px !important;
            height: 32px !important;
            max-width: 110px !important;
            max-height: 32px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .feature-red-card-logo-model {
            width: 80px !important;
            height: 24px !important;
            max-width: 80px !important;
            max-height: 24px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .feature-red-card-logo-forland :global(img),
          .feature-red-card-logo-forland :global(span),
          .feature-red-card-logo-model :global(img),
          .feature-red-card-logo-model :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .feature-red-card {
            width: 100px !important;
            height: 100px !important;
            bottom: -50px !important;
            left: 20% !important;
            gap: 4px !important;
          }
          .feature-red-card-logo-forland {
            width: 55px !important;
            height: 16px !important;
            max-width: 55px !important;
            max-height: 16px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .feature-red-card-logo-forland :global(img),
          .feature-red-card-logo-forland :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          .feature-red-card-logo-model {
            width: 40px !important;
            height: 12px !important;
            max-width: 40px !important;
            max-height: 12px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .feature-red-card-logo-model :global(img),
          .feature-red-card-logo-model :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          .feature-red-card-text {
            font-size: 11px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .feature-red-card {
            width: 120px !important;
            height: 120px !important;
            bottom: -50px !important;
          }
          .feature-red-card-logo-forland {
            width: 90px !important;
            height: 26px !important;
            max-width: 90px !important;
            max-height: 26px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .feature-red-card-logo-forland :global(img),
          .feature-red-card-logo-forland :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          .feature-red-card-logo-model {
            width: 65px !important;
            height: 20px !important;
            max-width: 65px !important;
            max-height: 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .feature-red-card-logo-model :global(img),
          .feature-red-card-logo-model :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          .feature-red-card-text {
            font-size: 14px !important;
          }
        }
      `}</style>
      <div className="w-full">
        {blocks.map((block, idx) => (
          <div
            key={idx}
            className={`w-full flex items-center py-8 lg:py-0 feature-block-${idx}`}
            style={{
              background: block.bg,
            }}
          >
            <div className="w-full">
              {/* Keep background full-width, but constrain content to site container width */}
              <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
                <div className="w-full flex flex-col lg:flex-row items-center">
                  {block.image && block.image.align === 'left' && (
                    <div className="w-full lg:w-auto mb-6 lg:mb-0 pl-0 lg:pl-8 xl:pl-12 2xl:pl-28 flex justify-center lg:justify-start">
                      <img
                        src={block.image.src}
                        alt=""
                        width={block.image.width}
                        height={block.image.height}
                        className="w-[200px] lg:w-auto h-auto"
                        style={{ objectFit: 'contain', display: 'block' }}
                      />
                    </div>
                  )}

                  {block.content && block.image?.align === 'left' && (
                    <div className="flex-1 w-full lg:w-auto px-4 lg:px-8 xl:px-12 2xl:px-20 text-center lg:text-left">
                      <h3
                        className="mb-3 lg:mb-4 text-xl lg:text-[28px]"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                          lineHeight: '120%',
                          color: block.content.titleColor,
                          margin: 0,
                        }}
                      >
                        {block.content.title}
                      </h3>
                      <p
                        className="text-sm lg:text-[18px]"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
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
                    <div className="flex-1 w-full lg:w-auto px-4 lg:px-8 xl:px-12 2xl:px-20 text-center lg:text-left order-2 lg:order-1">
                      <h3
                        className="mb-3 lg:mb-4 text-xl lg:text-[28px]"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                          lineHeight: '120%',
                          color: block.content.titleColor,
                          margin: 0,
                        }}
                      >
                        {block.content.title}
                      </h3>
                      <p
                        className="text-sm lg:text-[18px]"
                        style={{
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
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

                  {!block.content && <div className="flex-1 hidden lg:block" />}

                  {'images' in block && block.images && (
                    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 py-8 lg:py-0">
                      {block.images.map((img, i) => (
                        <img
                          key={`${img.src}-${i}`}
                          src={img.src}
                          alt=""
                          width={img.width}
                          height={img.height}
                          className={`h-auto ${
                            i === 1 
                              ? 'w-[220px] sm:w-[240px] lg:w-auto' 
                              : 'w-[150px] sm:w-[180px] lg:w-auto'
                          }`}
                          style={{ objectFit: 'contain', display: 'block' }}
                        />
                      ))}
                    </div>
                  )}

                  {block.image && block.image.align === 'right' && (
                    <div className="w-full lg:w-auto mb-6 lg:mb-0 pr-0 lg:pr-8 xl:pr-12 2xl:pr-28 flex justify-center lg:justify-end order-1 lg:order-2">
                      <img
                        src={block.image.src}
                        alt=""
                        width={block.image.width}
                        height={block.image.height}
                        className="w-[200px] lg:w-auto h-auto"
                        style={{ objectFit: 'contain', display: 'block' }}
                      />
                    </div>
                  )}

                  {'truckImage' in block && block.truckImage && (
                    <div className="w-full flex justify-center items-center py-8 lg:py-0">
                      <div style={{ position: 'relative', display: 'inline-block' }}>
                        <img
                          src={block.truckImage.src}
                          alt="Truck Image H7"
                          width={block.truckImage.width}
                          height={block.truckImage.height}
                          className="w-full lg:w-auto h-auto"
                          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                        />

                        {/* Red Card - responsive size */}
                        <div
                          className="feature-red-card flex"
                          style={{
                            position: 'absolute',
                            bottom: '-60px',
                            left: '15%',
                            transform: 'translateX(-50%)',
                            width: '144px',
                            height: '144px',
                            background: '#DF0011',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                          }}
                        >
                          <div className="feature-red-card-logo-forland">
                            <img
                              src="/text/forland-text.svg"
                              alt="Forland Text"
                              width={110}
                              height={32}
                              style={{ display: 'block', width: '100%', height: 'auto' }}
                            />
                          </div>
                          <div className="feature-red-card-logo-model">
                            <img 
                              src="/text/H7-text.svg" 
                              alt="H7 Text" 
                              width={80} 
                              height={24} 
                              style={{ display: 'block', width: '100%', height: 'auto' }} 
                            />
                          </div>
                          <div
                            className="feature-red-card-text"
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


