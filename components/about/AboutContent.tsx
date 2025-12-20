import Image from 'next/image';

export default function AboutContent() {
  return (
    <section className="w-full py-20" style={{ background: '#FFFFFF' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col items-center">

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
                color: '#000000',
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
                color: '#000000',
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
                color: '#000000',
                marginTop: 0,
                marginBottom: '32px'
              }}
            >
              Since its inception in 1999 in China, <strong>Forland</strong> has established itself as a reference brand in the world of light and medium commercial vehicles, combining sustainability, performance and innovation.
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
                color: '#000000',
                marginTop: 0,
                marginBottom: 0
              }}
            >
              Over the decades, <strong>Forland</strong> has evolved to meet the needs of a demanding clientele around the world.
            </p>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: '32px',
                marginBottom: '32px'
              }}
            >
              From the beginning, the brand has attracted the attention of customers thanks to a variety of models, ranging from light vehicles to off-road and special vehicles. With a strategy focused on innovation and performance, Forland has grown and conquered more than 50 countries, selling more than 6 million vehicles globally.
            </p>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
                marginBottom: 0
              }}
            >
              After more than 20 years of rapid development, FORLAND has grown from being a "leading brand in China" to "world-renowned brand", offering transport solutions adapted to various sectors, with the best value for money.
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
                <Image
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
                    color: '#000000',
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
                    color: '#000000'
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
                <Image
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
                    color: '#000000',
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
                    color: '#000000'
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
                <Image
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
                    color: '#000000',
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
                    color: '#000000'
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
                <Image
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
                    color: '#000000',
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
                    color: '#000000'
                  }}
                >
                  Development
                </div>
              </div>
            </div>
          </div>

          {/* Additional Text Section Below Stats */}
          <div className="mt-16" style={{ textAlign: 'left', maxWidth: '1200px', width: '100%' }}>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
                marginBottom: '32px'
              }}
            >
              Thanks to its commitment to innovation and production expertise, Forland quickly conquered international markets.
            </p>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
                marginBottom: '32px'
              }}
            >
              Present in 50 countries and strong of its heritage, the brand has adapted its products to the specific needs of each region while maintaining high standards of safety and efficiency.
            </p>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
                marginBottom: 0
              }}
            >
              Today, Forland is much more than just a vehicle manufacturer: it is a trusted partner, offering vehicles designed to improve productivity and support the growth of the activities of all its customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
