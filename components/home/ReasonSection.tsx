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
    <section className="w-full py-8 sm:py-12 lg:py-[60px] px-4 sm:px-6 lg:px-10" style={{ background: '#FFFFFF' }}>
      {/* Red Header Banner */}
      <div
        className="max-w-[1152px] mx-auto mb-8 sm:mb-12 lg:mb-[60px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-6 sm:p-8 lg:py-10 lg:px-20"
        style={{
          background: '#DF0011'
        }}
      >
        {/* FORLAND Logo */}
        <Image
          src="/logo/white-logo.svg"
          alt="FORLAND Logo"
          width={200}
          height={60}
          className="object-contain w-32 sm:w-40 lg:w-[200px] h-auto"
        />
        
        {/* Title Text */}
        <h2
          className="text-center sm:text-right"
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(18px, 4vw, 32px)',
            lineHeight: '120%',
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
        className="max-w-[1152px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-[30px]"
      >
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`p-4 sm:p-6 lg:p-[30px] ${index === 4 ? 'md:col-span-2 md:max-w-[50%] md:mx-auto' : ''}`}
            style={{
              background: '#000000',
              border: reason.hasBlueBorder ? '2px solid #0066CC' : 'none'
            }}
          >
            <h3
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(18px, 4vw, 24px)',
                lineHeight: '120%',
                letterSpacing: '0%',
                color: '#DF0011',
                marginBottom: 'clamp(12px, 3vw, 20px)',
                margin: '0 0 clamp(12px, 3vw, 20px) 0'
              }}
            >
              {reason.title}
            </h3>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(13px, 2.5vw, 16px)',
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

