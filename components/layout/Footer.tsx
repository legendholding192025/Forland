import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      <div
        className="w-full"
        style={{
          minHeight: '290px',
          background: 'linear-gradient(90deg, #000000 0%, #910000 100%)'
        }}
      >
        <div className="h-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0" style={{ maxWidth: '1440px' }}>
          <div className="h-full flex flex-col md:flex-row items-start pt-0 md:pt-12 gap-8 md:gap-6 lg:gap-8 xl:gap-10">
            {/* Left Side - Logo and Content */}
            <div className="flex flex-col gap-4 flex-shrink-0 w-full md:w-auto">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo/header-logo.svg"
                  alt="Forland Logo"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </Link>
              <p
                className="text-white max-w-md"
                style={{
                  fontFamily: 'Effra, Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0%'
                }}
              >
                The strength of a global brand,<br />
                the proximity of a local partner
              </p>
              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#E00E0E'
                  }}
                >
                  Follow Us
                </h3>
                <div className="flex items-center gap-3">
                  <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                    <Image
                      src="/logo/insta.svg"
                      alt="Instagram"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                    <Image
                      src="/logo/fb.svg"
                      alt="Facebook"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                    <Image
                      src="/logo/linkedin.svg"
                      alt="LinkedIn"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity duration-200">
                    <Image
                      src="/logo/TikTok.svg"
                      alt="TikTok"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Sections - Products and Know More */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 lg:gap-12 xl:gap-16 flex-1 justify-center w-full md:w-auto">
              {/* Products Section */}
              <div className="flex flex-col gap-4 flex-shrink-0 w-full sm:w-auto sm:min-w-[150px]">
                <h3
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#E00E0E'
                  }}
                >
                  Products
                </h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/products/h7"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    Forland H7
                  </Link>
                  <Link
                    href="/products/l5"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    Forland L5
                  </Link>
                </div>
              </div>

              {/* Know More Section */}
              <div className="flex flex-col gap-4 flex-shrink-0 w-full sm:w-auto sm:min-w-[150px]">
                <h3
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#E00E0E'
                  }}
                >
                  Know More
                </h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/about"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/newsfeed"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    Newsfeed
                  </Link>
                  <Link
                    href="/service"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Get in Touch */}
            <div className="flex flex-col gap-4 flex-shrink-0 w-full md:w-auto md:min-w-[200px] md:max-w-[280px]">
              <h3
                style={{
                  fontFamily: 'Effra, Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#E00E0E'
                }}
              >
                Get in touch
              </h3>
              <div className="flex flex-col gap-3">
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo/Call.svg"
                    alt="Phone"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <a 
                    href="tel:8001234567"
                    className="text-white hover:opacity-80 transition-opacity duration-200"
                    style={{ 
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    800 123 4567
                  </a>
                </div>
                {/* Email */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo/Email.svg"
                    alt="Email"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <a 
                    href="mailto:commercial.sales@legendmotorsuae.com"
                    className="text-white hover:opacity-80 transition-opacity duration-200 break-words"
                    style={{ 
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '140%',
                      letterSpacing: '0%',
                      wordBreak: 'break-word'
                    }}
                  >
                    commercial.sales@legendmotorsuae.com
                  </a>
                </div>
                {/* Address */}
                <div className="flex items-start gap-2">
                  <Image
                    src="/logo/Location.svg"
                    alt="Location"
                    width={16}
                    height={16}
                    className="w-4 h-4 mt-0.5"
                  />
                  <div 
                    className="text-white"
                    style={{ 
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                  >
                    Plot 59 22nd St - Al Quoz, Al Quoz <br />
                    Industrial Area 2 - Dubai, UAE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full"
        style={{
          minHeight: '48px',
          background: '#262626'
        }}
      >
        <div className="h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-0 py-3 sm:py-0" style={{ maxWidth: '1440px' }}>
          <p
            className="text-center sm:text-left text-sm sm:text-base"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: '10px',
              letterSpacing: '0%',
              color: '#D9D9D9'
            }}
          >
            © FORLAND UAE. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="hover:opacity-80 transition-opacity duration-200 text-center sm:text-left text-sm sm:text-base"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: '10px',
              letterSpacing: '0%',
              color: '#D9D9D9'
            }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

