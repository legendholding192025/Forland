'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const leftNavigationItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Products', 
      href: '/products',
      dropdown: [
        { label: 'FORLAND H7', href: '/products/h7' },
        { label: 'FORLAND L5', href: '/products/l5' },
      ]
    },
    { label: 'Test Drive', href: '/test-drive' },
  ];

  const rightNavigationItems = [
    { label: 'About', href: '/about' },
    { 
      label: 'Contact', 
      href: '/contact',
      dropdown: [
        { label: 'Get a Quote', href: '/request-quote' },
        { label: 'Book a Service', href: '/service' },
      ]
    },
    { label: 'News', href: '/news' },
  ];

  const allNavigationItems = [...leftNavigationItems, ...rightNavigationItems];

  return (
    <>
      {/* Social Details Header */}
      <div 
        className="w-full"
        style={{
          width: '100%',
          height: '50px',
          opacity: 1,
          background: 'linear-gradient(90deg, #910000 0%, #000000 100%)'
        }}
      >
        <div className="h-full mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo/Location.svg"
                alt="Location"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <div 
                className="text-white"
                style={{ 
                  fontFamily: 'Effra, Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '11.5px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                Plot 59 22nd St - Al Quoz, Al Quoz Industrial Area 2 - Dubai, UAE
              </div>
            </div>
            <div className="flex items-center gap-4">
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
                    fontSize: '11.5px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  800 123 4567
                </a>
              </div>
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
                  className="text-white hover:opacity-80 transition-opacity duration-200"
                  style={{ 
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '11.5px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  commercial.sales@legendmotorsuae.com
                </a>
              </div>
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
        </div>
      </div>

      {/* Main Header */}
      <header 
        className="sticky top-0 z-50 w-full"
        style={{
          width: '100%',
          height: '50px',
          opacity: 1,
          background: 'linear-gradient(90deg, #DF0011 0%, #910000 100%)'
        }}
      >
      <div className="h-full mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
        <div className="flex h-full items-center justify-between relative">
          {/* Left Navigation */}
          <nav className="hidden md:flex md:items-center flex-1">
            {leftNavigationItems.map((item, index) => (
              <div 
                key={item.href} 
                className="flex items-center h-full relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  if (item.dropdown) setActiveDropdown(item.label);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setActiveDropdown(null);
                  }, 150);
                }}
              >
                {index > 0 && (
                  <span 
                    className="mx-4"
                    style={{ 
                      width: '0px',
                      height: '17px',
                      borderLeft: '1px solid white',
                      opacity: 1,
                      display: 'inline-block'
                    }}
                  ></span>
                )}
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                    }
                  }}
                  className="text-white hover:text-gray-200 transition-colors duration-200 flex items-center h-full gap-1 no-underline"
                  style={{ 
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-3 h-3 transition-transform duration-200"
                      style={{
                        transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.dropdown && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 bg-white rounded-md shadow-lg z-50"
                    style={{
                      background: '#FFFFFF',
                      minWidth: '150px',
                      width: 'auto',
                      marginTop: '0px',
                      paddingTop: '4px',
                      paddingBottom: '8px'
                    }}
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setActiveDropdown(item.label);
                    }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem, index) => (
                      <div key={dropdownItem.href}>
                        <Link
                          href={dropdownItem.href}
                          className="flex items-center gap-2 py-2 hover:bg-gray-100 transition-colors duration-200"
                          style={{ 
                            fontFamily: 'Effra, Arial, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#000000',
                            paddingLeft: '12px',
                            paddingRight: '12px',
                            cursor: 'pointer'
                          }}
                        >
                          {dropdownItem.label === 'FORLAND H7' && (
                            <>
                              <Image
                                src="/text/forland-menu.svg"
                                alt="Forland"
                                width={60}
                                height={20}
                                className="object-contain"
                              />
                              <Image
                                src="/text/H7-menu.svg"
                                alt="H7"
                                width={24}
                                height={12}
                                className="object-contain"
                              />
                            </>
                          )}
                          {dropdownItem.label === 'FORLAND L5' && (
                            <>
                              <Image
                                src="/text/forland-menu.svg"
                                alt="Forland"
                                width={60}
                                height={20}
                                className="object-contain"
                              />
                              <Image
                                src="/text/L5-menu.svg"
                                alt="L5"
                                width={24}
                                height={12}
                                className="object-contain"
                              />
                            </>
                          )}
                          {dropdownItem.label !== 'FORLAND H7' && dropdownItem.label !== 'FORLAND L5' && (
                            dropdownItem.label
                          )}
                        </Link>
                        {index < item.dropdown.length - 1 && (
                          <div style={{ height: '1px', background: '#E5E5E5', margin: '4px 12px' }}></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/header-logo.svg"
                alt="Forland Logo"
                width={120}
                height={40}
                priority
                className="h-auto"
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex md:items-center flex-1 justify-end">
            {rightNavigationItems.map((item, index) => (
              <div 
                key={item.href} 
                className="flex items-center h-full relative"
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  if (item.dropdown) setActiveDropdown(item.label);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setActiveDropdown(null);
                  }, 150);
                }}
              >
                {index > 0 && (
                  <span 
                    className="mx-4"
                    style={{ 
                      width: '0px',
                      height: '17px',
                      borderLeft: '1px solid white',
                      opacity: 1,
                      display: 'inline-block'
                    }}
                  ></span>
                )}
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                    }
                  }}
                  className="text-white hover:text-gray-200 transition-colors duration-200 flex items-center h-full gap-1 no-underline"
                  style={{ 
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-3 h-3 transition-transform duration-200"
                      style={{
                        transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {item.dropdown && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 bg-white rounded-md shadow-lg z-50"
                    style={{
                      background: '#FFFFFF',
                      minWidth: '150px',
                      width: 'auto',
                      marginTop: '0px',
                      paddingTop: '4px',
                      paddingBottom: '8px'
                    }}
                    onMouseEnter={() => {
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      setActiveDropdown(item.label);
                    }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem, index) => (
                      <div key={dropdownItem.href}>
                        <Link
                          href={dropdownItem.href}
                          className="block py-2 hover:bg-gray-100 transition-colors duration-200"
                          style={{ 
                            fontFamily: 'Effra, Arial, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            color: '#000000',
                            paddingLeft: '12px',
                            paddingRight: '12px',
                            cursor: 'pointer'
                          }}
                        >
                          {dropdownItem.label}
                        </Link>
                        {index < item.dropdown.length - 1 && (
                          <div style={{ height: '1px', background: '#E5E5E5', margin: '4px 12px' }}></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
            aria-expanded="false"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1" style={{ background: 'linear-gradient(90deg, #DF0011 0%, #910000 100%)' }}>
            {allNavigationItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-black/10 rounded-md transition-colors duration-200"
                  style={{ 
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-white hover:text-gray-200 hover:bg-black/10 rounded-md transition-colors duration-200"
                        style={{ 
                          fontFamily: 'Effra, Arial, sans-serif',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%'
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
    </>
  );
}

