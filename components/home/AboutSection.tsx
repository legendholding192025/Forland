import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-20" style={{ background: '#000000' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col items-center">
          {/* About Forland Header with vector images */}
          <div className="relative mb-6 sm:mb-8 lg:mb-12 text-center w-full">
            <h4
              className="flex flex-wrap items-center justify-center gap-2"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(14px, 3vw, 24px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#910000',
                margin: 0
              }}
            >
              <img
                src="/vector/small.svg"
                alt="Vector"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-auto lg:h-auto"
                style={{ display: 'inline-block' }}
              />
              About Forland
              <img
                src="/vector/small.svg"
                alt="Vector"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-auto lg:h-auto"
                style={{ display: 'inline-block' }}
              />
            </h4>
          </div>

          {/* Main Title Section */}
          <div className="mb-6 sm:mb-8 lg:mb-8 text-left sm:text-center lg:text-left w-full max-w-[1200px] px-4 sm:px-6 lg:pl-10">
            <h2
              className="lg:whitespace-nowrap"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(28px, 6vw, 58.61px)',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                margin: 0,
                maxWidth: '768px'
              }}
            >
              <span style={{ color: '#DF0011' }}>FORLAND, </span>
              <span>A SUCCESS STORY</span>
            </h2>
            <h2
              className="lg:whitespace-nowrap"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(28px, 6vw, 58.61px)',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                margin: 0,
                maxWidth: '768px'
              }}
            >
              SINCE 1999
            </h2>
          </div>

          {/* Descriptive Text Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16 text-left max-w-[1200px] w-full px-4 sm:px-6 lg:pl-10">
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: 'clamp(14px, 3vw, 24px)',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                marginTop: 0,
                marginBottom: 'clamp(16px, 4vw, 32px)'
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
                fontSize: 'clamp(14px, 3vw, 24px)',
                lineHeight: '140%',
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
          <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-[1200px] w-full px-4">
            {/* Box 1: 1999 - Creation */}
            <div
              className="flex flex-col items-center justify-start gap-3 sm:gap-4"
              style={{
                width: '100%',
                maxWidth: '200px',
                margin: '0 auto'
              }}
            >
              {/* Red box with Calendar Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center"
                style={{
                  background: '#DF0011',
                  opacity: 1
                }}
              >
                <img
                  src="/logo/1.svg"
                  alt="Icon 1"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
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
                    fontSize: 'clamp(20px, 4vw, 28px)',
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
                    fontSize: 'clamp(11px, 2vw, 14px)',
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
              className="flex flex-col items-center justify-start gap-3 sm:gap-4"
              style={{
                width: '100%',
                maxWidth: '200px',
                margin: '0 auto'
              }}
            >
              {/* Red box with Truck Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center"
                style={{
                  background: '#DF0011',
                  opacity: 1
                }}
              >
                <img
                  src="/logo/2.svg"
                  alt="Icon 2"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
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
                    fontSize: 'clamp(20px, 4vw, 28px)',
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
                    fontSize: 'clamp(11px, 2vw, 14px)',
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
              className="flex flex-col items-center justify-start gap-3 sm:gap-4"
              style={{
                width: '100%',
                maxWidth: '200px',
                margin: '0 auto'
              }}
            >
              {/* Red box with Globe Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center"
                style={{
                  background: '#DF0011',
                  opacity: 1
                }}
              >
                <img
                  src="/logo/3.svg"
                  alt="Icon 3"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
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
                    fontSize: 'clamp(20px, 4vw, 28px)',
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
                    fontSize: 'clamp(11px, 2vw, 14px)',
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
              className="flex flex-col items-center justify-start gap-3 sm:gap-4"
              style={{
                width: '100%',
                maxWidth: '200px',
                margin: '0 auto'
              }}
            >
              {/* Red box with Bar Chart Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center"
                style={{
                  background: '#DF0011',
                  opacity: 1
                }}
              >
                <img
                  src="/logo/4.svg"
                  alt="Icon 4"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
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
                    fontSize: 'clamp(20px, 4vw, 28px)',
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
                    fontSize: 'clamp(11px, 2vw, 14px)',
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

