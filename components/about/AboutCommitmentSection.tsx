import Image from 'next/image';

export default function AboutCommitmentSection() {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ 
        minHeight: '580px',
        paddingBottom: '60px',
      }}
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_69467fb3a76b81.50381106_20251220_105131.webp"
        alt="FORLAND Commitment"
        fill
        className="object-cover"
        priority
        quality={100}
        unoptimized={true}
        sizes="100vw"
      />
      {/* Heading at top */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center z-10 pt-12 pb-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          {/* Left diagonal line */}
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />

          {/* Title */}
          <h1 
            className="text-4xl font-normal"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
            }}
          >
            <span style={{ color: '#DF0011' }}>OUR</span>{' '}
            <span style={{ color: '#FFFFFF' }}>COMMITMENTS</span>
          </h1>

          {/* Right diagonal line */}
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />
        </div>

        {/* Images below heading */}
        <div className="flex flex-col items-center gap-8" style={{ width: '100%' }}>
          {/* Container matching reason cards alignment */}
          <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto', position: 'relative' }}>
            {/* First image with content on both sides */}
            <div className="flex items-center" style={{ position: 'relative', minHeight: '173px' }}>
              {/* Left side content - aligned with reason card left column */}
              <div className="flex flex-col" style={{ flex: '1', maxWidth: 'calc((1152px - 30px) / 2)', paddingRight: '135px' }}>
                <h3
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#DF0011',
                    marginBottom: '12px',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  COMMERCIAL LOGISTICS PLATFORM
                </h3>
                <ul
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '160%',
                    color: '#FFFFFF',
                    margin: 0,
                    paddingLeft: '20px',
                    listStyleType: 'disc'
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>Create high quality and high efficiency logistics products.</li>
                  <li style={{ marginBottom: '8px' }}>Provide scientific and accurate logistics solutions to users.</li>
                </ul>
              </div>

              {/* Center image - fixed position */}
              <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                <img
                  src="https://cdn.legendholding.com/images/cdn_69468212a29c47.42339452_20251220_110138.webp"
                  alt="FORLAND Commitment 1"
                  style={{ width: '210px', height: '173px', objectFit: 'contain' }}
                />
              </div>

              {/* Right side content - aligned with reason card right column */}
              <div className="flex flex-col" style={{ flex: '1', maxWidth: 'calc((1152px - 30px) / 2)', marginLeft: 'auto', paddingLeft: '135px' }}>
                <h3
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#DF0011',
                    marginBottom: '12px',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  ALL-TERRAIN TRANSPORT
                </h3>
                <ul
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '160%',
                    color: '#FFFFFF',
                    margin: 0,
                    paddingLeft: '20px',
                    listStyleType: 'disc'
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>Exceptional load capacity and adaptability to difficult roads.</li>
                  <li style={{ marginBottom: '8px' }}>No path, however rugged, can stop it.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second image with content on both sides */}
          <div style={{ maxWidth: '1152px', width: '100%', margin: '0 auto', position: 'relative' }}>
            <div className="flex items-center" style={{ position: 'relative', minHeight: '162px' }}>
              {/* Left side content - aligned with reason card left column */}
              <div className="flex flex-col" style={{ flex: '1', maxWidth: 'calc((1152px - 30px) / 2)', paddingRight: '145px' }}>
                <h3
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#DF0011',
                    marginBottom: '12px',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  CONSTRUCTION VEHICLES
                </h3>
                <ul
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '160%',
                    color: '#FFFFFF',
                    margin: 0,
                    paddingLeft: '20px',
                    listStyleType: 'disc'
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>Vehicles designed for extremely heavy, robust and durable loads.</li>
                  <li style={{ marginBottom: '8px' }}>A revolution for the global development of modern transport.</li>
                </ul>
              </div>

              {/* Center image - fixed position */}
              <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                <img
                  src="https://cdn.legendholding.com/images/cdn_694682e4afc615.15283109_20251220_110508.webp"
                  alt="FORLAND Commitment 2"
                  style={{ width: '222px', height: '162px', objectFit: 'contain' }}
                />
              </div>

              {/* Right side content - aligned with reason card right column */}
              <div className="flex flex-col" style={{ flex: '1', maxWidth: 'calc((1152px - 30px) / 2)', marginLeft: 'auto', paddingLeft: '145px' }}>
                <h3
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#DF0011',
                    marginBottom: '12px',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  SOLUTIONS FOR SPECIAL CONDITIONS
                </h3>
                <p
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '160%',
                    color: '#FFFFFF',
                    margin: 0,
                    paddingLeft: '0'
                  }}
                >
                  With more than 20 years of experience, FORLAND designs vehicles adapted  to the specific transport and operating conditions, meeting the needs of customers around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

