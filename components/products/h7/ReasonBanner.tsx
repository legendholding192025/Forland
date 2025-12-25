import Image from 'next/image';
import Link from 'next/link';

export default function ReasonBanner() {
  return (
    <Link
      href="/brochures/forland-h7.pdf"
      className="block mx-auto mb-8 lg:mb-[60px] max-w-[1152px] bg-[#DF0011] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-6 lg:px-20 lg:py-10 gap-4 lg:gap-0 no-underline"
    >
      {/* FORLAND Logo */}
      <Image 
        src="/logo/white-logo.svg" 
        alt="FORLAND Logo" 
        width={200} 
        height={60} 
        className="object-contain w-[120px] lg:w-[200px] h-auto" 
      />

      {/* Title Text */}
      <h2
        className="text-lg lg:text-[32px] flex items-center gap-2 lg:gap-3 m-0"
        style={{
          fontFamily: 'Effra, Arial, sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#FFFFFF',
        }}
      >
        <span>Download Full Specification Brochure</span>
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          aria-hidden="true"
          className="w-5 h-5 lg:w-8 lg:h-8"
        >
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


