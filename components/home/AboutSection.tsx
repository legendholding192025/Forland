import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full py-20" style={{ background: '#000000' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col items-center">
          {/* About Forland Header with vector images */}
          <div className="relative mb-12" style={{ textAlign: 'center', width: '100%' }}>
            <h4
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#910000',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <img
                src="/vector/small.svg"
                alt="Vector"
                style={{ display: 'inline-block' }}
              />
              About Forland
              <img
                src="/vector/small.svg"
                alt="Vector"
                style={{ display: 'inline-block' }}
              />
            </h4>
          </div>

          {/* Main Title Section */}
          <div className="mb-8" style={{ textAlign: 'left', width: '100%', maxWidth: '1200px' }}>
            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '58.61px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                margin: 0,
                maxWidth: '768px',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ color: '#DF0011' }}>FORLAND, </span>
              <span>A SUCCESS STORY</span>
            </h2>
            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '58.61px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                margin: 0,
                maxWidth: '768px',
                whiteSpace: 'nowrap'
              }}
            >
              SINCE 1999
            </h2>
          </div>

          {/* Descriptive Text Section */}
          <div className="mb-16" style={{ textAlign: 'left', maxWidth: '1200px', width: '100%' }}>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                marginTop: 0,
                marginBottom: '32px'
              }}
            >
              Since its inception in 1999 in China, <strong>Forland</strong> has established itself as a benchmark brand in the world of light and medium commercial vehicles, combining sustainability, performance and innovation.
              <br />
            </p>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                marginTop: 0,
                marginBottom: 0
              }}
            >
              Over the decades, <strong>Forland</strong> has evolved to meet the needs of a demanding clientele around the world.
            </p>
          </div>

          {/* Statistical / Key Achievements Section */}
          <div className="flex flex-wrap justify-center gap-8" style={{ gap: '32px', maxWidth: '1200px', width: '100%' }}>
            {/* Box 1: 1999 - Creation */}
            <div
              style={{
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '16px'
              }}
            >
              {/* Red box with Calendar Icon */}
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  background: '#DF0011',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1
                }}
              >
                <img
                  src="/logo/1.svg"
                  alt="Icon 1"
                  width={48}
                  height={48}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              {/* Text outside red box */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '28px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    marginBottom: '8px'
                  }}
                >
                  1999
                </div>
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#FFFFFF'
                  }}
                >
                  Creation of Forland
                </div>
              </div>
            </div>

            {/* Box 2: +6M - Vehicles sold */}
            <div
              style={{
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '16px'
              }}
            >
              {/* Red box with Truck Icon */}
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  background: '#DF0011',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1
                }}
              >
                <img
                  src="/logo/2.svg"
                  alt="Icon 2"
                  width={48}
                  height={48}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              {/* Text outside red box */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '28px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    marginBottom: '8px'
                  }}
                >
                  +6M
                </div>
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#FFFFFF'
                  }}
                >
                  Vehicles sold
                </div>
              </div>
            </div>

            {/* Box 3: 50 countries - International presence */}
            <div
              style={{
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '16px'
              }}
            >
              {/* Red box with Globe Icon */}
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  background: '#DF0011',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1
                }}
              >
                <img
                  src="/logo/3.svg"
                  alt="Icon 3"
                  width={48}
                  height={48}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              {/* Text outside red box */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '28px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    marginBottom: '8px'
                  }}
                >
                  50 countries
                </div>
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#FFFFFF'
                  }}
                >
                  International presence
                </div>
              </div>
            </div>

            {/* Box 4: +20 Years - Development */}
            <div
              style={{
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '16px'
              }}
            >
              {/* Red box with Bar Chart Icon */}
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  background: '#DF0011',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1
                }}
              >
                <img
                  src="/logo/4.svg"
                  alt="Icon 4"
                  width={48}
                  height={48}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              {/* Text outside red box */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '28px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    marginBottom: '8px'
                  }}
                >
                  +20 Years
                </div>
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#FFFFFF'
                  }}
                >
                  Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

