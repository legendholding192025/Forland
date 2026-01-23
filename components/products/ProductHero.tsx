'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProductHeroProps {
  images: string[];
}

export default function ProductHero({ images }: ProductHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

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
      
      {/* Mobile View (below lg) - Previous Implementation */}
      <section 
        className="relative overflow-hidden w-full h-[400px] sm:h-[500px] md:h-[600px] lg:hidden"
        style={{ 
          width: '100%', 
          margin: 0,
          padding: 0
        }}
      >
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
          {images.map((src, index) => (
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
            className="absolute top-8 left-4 sm:top-12 sm:left-8 md:top-16 md:left-12 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)]"
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
            {images.map((_, index) => (
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

      {/* Desktop View (lg and above) - New Implementation */}
      <section className="hidden lg:flex relative h-[85vh] items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {images.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url('${slide}')`,
              backgroundPosition: 'center 100%',
              backgroundSize: 'cover'
            }}
          ></div>
        ))}

        {/* Unified Overlay Layout */}
        <div className="absolute inset-0 z-10">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8 sm:py-10 md:py-12">
            {/* Top Text */}
            <div className="text-left">
              <div 
                className="relative"
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
            </div>

            {/* Bottom Area */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {/* Navigation Dots */}
              <div className="flex justify-center">
                <div className="flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#DF0011] w-8' : 'bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

