'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://res.cloudinary.com/dzfhqvxnf/image/upload/v1767613686/H7-Banner-1_2_1_blth7x.png',
    'https://res.cloudinary.com/dzfhqvxnf/image/upload/v1767613593/L5-Banner-1_1_to0mgs.png', // Replace with actual image URL
    'https://res.cloudinary.com/dzfhqvxnf/image/upload/v1767613513/H7-Banner-2_1_rgtaj9.png', // Replace with actual image URL
    'https://res.cloudinary.com/dzfhqvxnf/image/upload/v1767613545/L5-Banner-2_1_sokczh.png', // Replace with actual image URL
  ];

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hero-text-1 {
          font-size: 22px;
        }
        @media (min-width: 640px) {
          .hero-text-1 {
            font-size: 26px;
          }
        }
        @media (min-width: 768px) {
          .hero-text-1 {
            font-size: 30px;
          }
        }
        @media (min-width: 1024px) {
          .hero-text-1 {
            font-size: 40px;
          }
        }
        .hero-text-2 {
          font-size: 28px;
          top: 32px;
        }
        @media (min-width: 640px) {
          .hero-text-2 {
            font-size: 36px;
            top: 38px;
          }
        }
        @media (min-width: 768px) {
          .hero-text-2 {
            font-size: 42px;
            top: 42px;
          }
        }
        @media (min-width: 1024px) {
          .hero-text-2 {
            font-size: 64px;
            top: 45px;
          }
        }
        .hero-text-3 {
          font-size: 42px;
          top: 64px;
        }
        @media (min-width: 640px) {
          .hero-text-3 {
            font-size: 56px;
            top: 72px;
          }
        }
        @media (min-width: 768px) {
          .hero-text-3 {
            font-size: 80px;
            top: 84px;
          }
        }
        @media (min-width: 1024px) {
          .hero-text-3 {
            font-size: 110px;
            top: 90px;
          }
        }
        .hero-vector {
          width: 48px;
          height: auto;
        }
        @media (min-width: 640px) {
          .hero-vector {
            width: 64px;
          }
        }
        @media (min-width: 768px) {
          .hero-vector {
            width: 80px;
          }
        }
        @media (min-width: 1024px) {
          .hero-vector {
            width: 96px;
            height: 75px;
          }
        }
      `}} />
      <section 
        className="relative overflow-hidden w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px]"
        style={{ 
          width: '100%', 
          margin: 0,
          padding: 0
        }}
      >
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px]">
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
          className="absolute top-8 left-4 sm:top-12 sm:left-8 md:top-16 md:left-12 lg:top-[120px] lg:left-[160px] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-320px)]"
          style={{ 
            minHeight: '200px'
          }}
        >
          {/* Top Left Corner Vector */}
          <motion.div
            className="hero-vector absolute"
            style={{ top: 0, left: 0 }}
            initial={{ opacity: 0, scale: 0.8, rotate: 45, x: '-50%', y: '-50%' }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, x: '-50%', y: '-50%' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Image
              src="/vector/hero-vector.svg"
              alt="Hero Vector"
              width={96}
              height={75}
              className="hero-vector"
            />
          </motion.div>
          <div
            className="hero-text-1 absolute top-0 left-0 text-white"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 200,
            }}
          >
            For Every Load
          </div>
          <div
            className="hero-text-2 absolute left-0 text-white"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 500,
            }}
          >
            For Every
          </div>
          <div
            className="hero-text-3 absolute text-white left-0"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 600,
            }}
          >
            Land.
            {/* Bottom Right Corner Vector - positioned relative to text */}
            <motion.div
              className="hero-vector absolute"
              style={{ 
                bottom: '6px', 
                right: '-25px'
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: -45, x: '25%', y: '25%' }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, x: '25%', y: '25%' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            >
              <Image
                src="/vector/hero-vector.svg"
                alt="Hero Vector"
                width={96}
                height={75}
                className="hero-vector"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div 
          className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 pb-4 sm:pb-6 z-10"
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
    </>
  );
}