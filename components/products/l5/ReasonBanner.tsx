import Image from 'next/image';
import Link from 'next/link';

export default function ReasonBanner() {
  return (
    <Link
      href="/brochures/forland-l5.pdf"
      className="block"
      style={{
        maxWidth: '1152px',
        margin: '0 auto 60px auto',
        background: '#DF0011',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 80px',
        textDecoration: 'none',
      }}
    >
      {/* FORLAND Logo */}
      <Image src="/logo/white-logo.svg" alt="FORLAND Logo" width={200} height={60} className="object-contain" />

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
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <span>Download Full Specification Brochure</span>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </h2>
    </Link>
  );
}

