import Image from 'next/image';

export default function TruckSection() {
  return (
    <section className="w-full relative">
      {/* Top red block */}
      <div
        style={{
          width: '100%',
          height: '480px',
          background: '#DF0011',
          position: 'relative'
        }}
      >
        {/* Text container */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '328px',
            transform: 'translateY(-50%)',
            width: '774px',
            height: '247px',
            opacity: 1
          }}
        >
          <div
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '67.12px',
              lineHeight: '136.34px',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}
          >
            Purchase Your <span
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '134.24px',
                lineHeight: '136.34px',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}
            >Perfect Truck</span>
          </div>
        </div>
        
        {/* Top right corner vector */}
        <img
          src="/vector/white.svg"
          alt="Vector"
          style={{
            position: 'absolute',
            top: 0,
            right: 0
          }}
        />
        
        {/* Bottom left corner vector */}
        <img
          src="/vector/white.svg"
          alt="Vector"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }}
        />
      </div>

      {/* Bottom black block */}
      <div
        style={{
          width: '100%',
          background: '#000000',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '80px',
          padding: '80px 40px'
        }}
      >
        {/* First image with overlapping red card */}
        <div
          style={{
            position: 'relative',
            display: 'inline-block'
          }}
        >
          <img
            src="https://cdn.legendholding.com/images/cdn_6940097700d295.64254957_20251215_131327.webp"
            alt="Truck Image 1"
            width={1151.320556640625}
            height={450.13433837890625}
            style={{ display: 'block' }}
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
              gap: '8px'
            }}
          >
            <Image
              src="/text/forland-text.svg"
              alt="Forland Text"
              width={110}
              height={32}
              className="object-contain"
            />
            <Image
              src="/text/H7-text.svg"
              alt="H7 Text"
              width={80}
              height={24}
              className="object-contain"
            />
            <div
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '18px',
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
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src="https://cdn.legendholding.com/images/cdn_694009a235ef95.34125296_20251215_131410.webp"
            alt="Truck Image 2"
            width={1151.320556640625}
            height={450.13433837890625}
            style={{ display: 'block' }}
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
              gap: '8px'
            }}
          >
            <Image
              src="/text/forland-text.svg"
              alt="Forland Text"
              width={110}
              height={32}
              className="object-contain"
            />
            <Image
              src="/text/L5-text.svg"
              alt="L5 Text"
              width={80}
              height={24}
              className="object-contain"
            />
            <div
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '18px',
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
    </section>
  );
}


