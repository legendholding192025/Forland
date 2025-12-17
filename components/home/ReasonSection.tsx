import Image from 'next/image';

export default function ReasonSection() {
  const reasons = [
    {
      title: 'Robustness To Any Proof',
      description: 'Designed to withstand the most demanding conditions, FORLAND vehicles offer unparalleled strength through high-quality materials and state-of-the-art engineering.'
    },
    {
      title: 'Optimized Performance',
      description: 'Our vehicles combine power and reliability to ensure consistent performance, even on the most challenging roads. FORLAND is the promise of a fluid and efficient driving.',
      hasBlueBorder: true
    },
    {
      title: 'Exceptional Driving Comfort',
      description: 'The ergonomics of the cabin is designed for the well-being of the driver: optimized space, comfortable seats and onboard technologies facilitate every journey, even the longest.'
    },
    {
      title: 'Energy Efficiency',
      description: 'FORLAND is committed to reducing fuel consumption without compromising on performance. Our latest generation engines are designed for better energy management and controlled operating costs.'
    },
    {
      title: 'Modern & Functional Design',
      description: 'FORLAND vehicles are distinguished by a design that is both bold and ergonomic, combining aesthetics and practicality. Every detail is designed to deliver a dynamic look and an optimized driving experience.'
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
          5 Good Reasons To Choose FORLAND
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
              border: reason.hasBlueBorder ? '2px solid #0066CC' : 'none',
              gridColumn: index === 4 ? '1 / -1' : 'auto',
              maxWidth: index === 4 ? '50%' : '100%',
              margin: index === 4 ? '0 auto' : '0'
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
            <p
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
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

