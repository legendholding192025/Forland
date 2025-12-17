'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://cdn.legendholding.com/images/cdn_693a82214a51d0.36842266_20251211_083441.webp',
    'https://cdn.legendholding.com/images/cdn_693fc33e179731.42408997_20251215_081350.webp', // Replace with actual image URL
    'https://cdn.legendholding.com/images/cdn_693fc3d64eb3b1.87446915_20251215_081622.webp', // Replace with actual image URL
    'https://cdn.legendholding.com/images/cdn_693fc402c92b97.96828768_20251215_081706.webp', // Replace with actual image URL
  ];

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section 
      className="relative overflow-hidden w-full"
      style={{ 
        width: '100%', 
        height: '720px',
        margin: 0,
        padding: 0
      }}
    >
      <div className="relative w-full" style={{ width: '100%', height: '720px' }}>
        {heroImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Forland Hero ${index + 1}`}
            fill
            priority={index === 0}
            unoptimized={true}
            className="object-cover transition-opacity duration-500"
            style={{ 
              opacity: index === currentSlide ? 1 : 0,
              position: 'absolute'
            }}
          />
        ))}
        <div 
          className="relative" 
          style={{ 
            position: 'absolute', 
            top: '120px', 
            left: '160px',
            width: 'calc(100% - 320px)',
            minHeight: '200px'
          }}
        >
          {/* Top Left Corner Vector */}
          <Image
            src="/vector/hero-vector.svg"
            alt="Hero Vector"
            width={96}
            height={75}
            className="absolute"
            style={{ top: 0, left: 0, transform: 'translate(-50%, -50%)' }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 200,
              fontSize: '40px',
              color: '#FFFFFF'
            }}
          >
            For Every Load
          </div>
          <div
            style={{
              position: 'absolute',
              top: '45px',
              left: 0,
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 500,
              fontSize: '64px',
              color: '#FFFFFF'
            }}
          >
            For Every
          </div>
          <div
            className="relative inline-block"
            style={{
              position: 'absolute',
              top: '90px',
              left: 0,
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 600,
              fontSize: '110px',
              color: '#FFFFFF'
            }}
          >
            Land.
            {/* Bottom Right Corner Vector - positioned relative to text */}
            <Image
              src="/vector/hero-vector.svg"
              alt="Hero Vector"
              width={96}
              height={75}
              className="absolute"
              style={{ 
                bottom: '6px', 
                right: '-25px', 
                transform: 'translate(25%, 25%)' 
              }}
            />
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div 
          className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 pb-6 z-10"
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: index === currentSlide ? '12px' : '8px',
                height: index === currentSlide ? '12px' : '8px',
                background: index === currentSlide ? '#DF0011E5' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

