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
    <section className="w-full" style={{ background: '#FFFFFF', padding: '60px 40px' }}>
      {/* Red Header Banner */}
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto 60px auto',
          background: '#DF0011',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 80px'
        }}
      >
        {/* FORLAND Logo */}
        <Image
          src="/logo/white-logo.svg"
          alt="FORLAND Logo"
          width={200}
          height={60}
          className="object-contain"
        />
        
        {/* Title Text */}
        <h2
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFFFFF',
            margin: 0
          }}
        >
          FORLAND DRIVES VALUE
        </h2>
      </div>

      {/* Content Blocks */}
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px'
        }}
      >
        {reasons.map((reason, index) => (
          <div
            key={index}
            style={{
              background: '#000000',
              padding: '30px',
              border: reason.hasBlueBorder ? '2px solid #0066CC' : 'none'
            }}
          >
            <h3
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '120%',
                letterSpacing: '0%',
                color: '#DF0011',
                marginBottom: '20px',
                margin: '0 0 20px 0'
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
                      style={{
                        fontFamily: 'Effra, Arial, sans-serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '16px',
                        lineHeight: '160%',
                        letterSpacing: '0%',
                        color: '#FFFFFF',
                        margin: pIndex === 0 ? '0 0 16px 0' : '0 0 16px 0'
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              {reason.bullets && (
                <ul
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '160%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    margin: '0 0 16px 0',
                    paddingLeft: '20px',
                    listStyleType: 'disc'
                  }}
                >
                  {reason.bullets.map((bullet, bIndex) => (
                    <li
                      key={bIndex}
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
                      style={{
                        fontFamily: 'Effra, Arial, sans-serif',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '16px',
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

