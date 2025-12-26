import Image from 'next/image';

export default function AboutReasonSection() {
  const reasons = [
    {
      title: 'FORLAND is reinventing the future of transportation with cutting-edge technology and unmatched quality.',
      paragraphs: [
        'Forland is continually reinventing itself to meet the challenges of tomorrow by investing in modern technologies, including energy efficiency and emission reductions.',
        'The brand is committed to providing environmentally friendly solutions without compromising performance.'
      ]
    },
    {
      title: 'FORLAND: Pioneer of the industry with modern and smart factories',
      paragraphs: [
        'Based on the concept of "Zero Emission, Reduced Contact, Automation", FORLAND has created a world-class factory integrating a modern and automated production line.',
        'Thanks to the introduction and improvement of digital and smart technologies, FORLAND guarantees innovative and environmentally friendly production.'
      ],
      hasBlueBorder: true
    },
    {
      title: 'FORLAND: A commitment to excellence, intelligent manufacturing and rigorous testing for exceptional quality',
      paragraphs: [
        'Each FORLAND vehicle is subject to strict  quality controls:'
      ],
      bullets: [
        'Extreme tests over 300 000 km in conditions of high  temperature, intense cold and high altitude.',
        'Sustainability tests over 600 000 km of rough roads.',
        'Automated collision tests to ensure safety and durability.'
      ],
      paragraphsAfterBullets: [
        'FORLAND masters every step of the production process to ensure  exceptional performance and impeccable quality for every vehicle  manufactured.'
      ]
    },
    {
      title: 'FORLAND strengthens future competitiveness through strong R&D investment and continuous innovation',
      paragraphs: [
        'As a leading manufacturer of commercial vehicles in China, the Forland brand has always been committed to technological innovation and product development. It has not only significantly increased its investment in research and development funds, but has also established a high-quality research and development team and put in place advanced R&D infrastructure.',
        'Through continuous technological innovation and product development, Forland has achieved remarkable results in the field of new energy commercial vehicles and has continuously introduced product innovations, establishing a solid basis for its future competitiveness in the market.'
      ]
    }
  ];

  return (
    <section className="w-full py-10 px-5 lg:py-[60px] lg:px-10" style={{ background: '#FFFFFF' }}>
      {/* Red Header Banner */}
      <div
        className="mx-auto mb-8 lg:mb-[60px] max-w-[1152px] bg-[#DF0011] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-6 lg:px-20 lg:py-10 gap-4 lg:gap-0"
      >
        {/* FORLAND Logo */}
        <Image
          src="/logo/white-logo.svg"
          alt="FORLAND Logo"
          width={200}
          height={60}
          className="object-contain w-[120px] lg:w-[200px] h-auto"
        />
        
        {/* Title Text */}
        <h2
          className="text-lg lg:text-[32px] m-0 text-center lg:text-left"
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFFFFF',
          }}
        >
          FORLAND DRIVES VALUE
        </h2>
      </div>

      {/* Content Blocks */}
      <div
        className="max-w-[1152px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px]"
      >
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-black p-6 lg:p-[30px]"
            style={{
              border: reason.hasBlueBorder ? '2px solid #0066CC' : 'none'
            }}
          >
            <h3
              className="text-lg lg:text-[24px] mb-4 lg:mb-5"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '120%',
                letterSpacing: '0%',
                color: '#DF0011',
                margin: 0
              }}
            >
              {reason.title}
            </h3>
            <div>
              {reason.paragraphs && (
                <div>
                  {reason.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm lg:text-[16px] mb-4 lg:mb-4"
                      style={{
                        fontFamily: 'Effra, Arial, sans-serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        lineHeight: '160%',
                        letterSpacing: '0%',
                        color: '#FFFFFF',
                        margin: 0
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              {reason.bullets && (
                <ul
                  className="text-sm lg:text-[16px] mb-4 lg:mb-4 pl-5 lg:pl-5"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    margin: 0,
                    listStyleType: 'disc'
                  }}
                >
                  {reason.bullets.map((bullet, bIndex) => (
                    <li
                      key={bIndex}
                      className="mb-3 lg:mb-3"
                      style={{
                        marginBottom: '12px'
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {reason.paragraphsAfterBullets && (
                <div>
                  {reason.paragraphsAfterBullets.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm lg:text-[16px] mb-0"
                      style={{
                        fontFamily: 'Effra, Arial, sans-serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        lineHeight: '160%',
                        letterSpacing: '0%',
                        color: '#FFFFFF',
                        margin: 0
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

