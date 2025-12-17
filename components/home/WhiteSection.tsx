export default function WhiteSection() {
  return (
    <section
      className="w-full relative"
      style={{
        height: '290px',
        background: '#FFFFFF',
        position: 'relative'
      }}
    >
      {/* Top right corner vector */}
      <img
        src="/vector/white.svg"
        alt="Vector"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          filter: 'brightness(0) saturate(100%) invert(14%) sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(0.88)'
        }}
      />
      
      {/* Top left corner vector */}
      <img
        src="/vector/white.svg"
        alt="Vector"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          filter: 'brightness(0) saturate(100%) invert(14%) sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(0.88)'
        }}
      />

      {/* Center Text */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}
      >
        <span
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '84px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            whiteSpace: 'nowrap'
          }}
        >
          The Future{' '}
          <span
            style={{
              fontWeight: 600
            }}
          >
            is Forland.
          </span>
        </span>
      </div>
    </section>
  );
}

