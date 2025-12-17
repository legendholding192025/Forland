import Image from 'next/image';

export default function ProductSection() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col items-center">
          <div className="text-center mb-20">
            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                marginBottom: '24px',
                width: '511px',
                height: '29px',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                margin: '0 auto 24px auto',
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
              <span style={{ color: '#DF0011' }}>A RANGE OF PRODUCTS TO</span> FIT YOUR BUSINESS
              <img
                src="/vector/small.svg"
                alt="Vector"
                style={{ display: 'inline-block' }}
              />
            </h2>
            <h3
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '64px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000'
              }}
            >
              Drive The Future, <span style={{ color: '#DF0011' }}>Drive Forland</span>
            </h3>
          </div>
          
          {/* Product Boxes */}
          <div className="flex gap-20 justify-center flex-wrap">
            <div className="relative" style={{ width: '528px', height: '485px' }}>
              {/* Gray Box - Bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '528px',
                  height: '197px',
                  background: '#343434',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                 <img
                   src="/img/white.png"
                   alt="White Image"
                   style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', marginTop: '-70px', position: 'relative', zIndex: 20 }}
                 />
              </div>
              {/* Red Box - Centered on top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '328px',
                  height: '288px',
                  background: '#DF0011',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  zIndex: 5
                }}
              >
                <Image
                  src="/text/forland-text.svg"
                  alt="Forland Text"
                  width={200}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src="/text/H7-text.svg"
                  alt="H7 Text"
                  width={150}
                  height={50}
                  className="object-contain"
                />
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '36.3px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    textAlign: 'center'
                  }}
                >
                  Cargo Truck
                </div>
              </div>
            </div>
            
            <div className="relative" style={{ width: '528px', height: '485px' }}>
              {/* Gray Box - Top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '528px',
                  height: '197px',
                  background: '#343434',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                 <img
                   src="/img/red.png"
                   alt="Red Image"
                   style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', marginTop: '-70px', position: 'relative', zIndex: 20 }}
                 />
              </div>
              {/* Red Box - Centered on bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '328px',
                  height: '288px',
                  background: '#DF0011',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px'
                }}
              >
                <Image
                  src="/text/forland-text.svg"
                  alt="Forland Text"
                  width={200}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src="/text/L5-text.svg"
                  alt="L5 Text"
                  width={150}
                  height={50}
                  className="object-contain"
                />
                <div
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '36.3px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#FFFFFF',
                    textAlign: 'center'
                  }}
                >
                  Cargo Truck
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

