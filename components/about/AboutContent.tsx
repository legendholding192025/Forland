'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutContent() {
  const [counters, setCounters] = useState({
    year: 0,
    vehicles: 0,
    countries: 0,
    years: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        year: Math.floor(1999 * easeOutQuart),
        vehicles: Math.floor(6 * easeOutQuart),
        countries: Math.floor(50 * easeOutQuart),
        years: Math.floor(20 * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters({
          year: 1999,
          vehicles: 6,
          countries: 50,
          years: 20
        });
      }
    }, stepDuration);
  };
  return (
    <section ref={sectionRef} className="w-full py-12 lg:py-20" style={{ background: '#FFFFFF' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col items-center">

          {/* Main Title Section */}
          <div className="mb-6 lg:mb-8" style={{ textAlign: 'left', width: '100%', maxWidth: '1200px' }}>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[58.61px] whitespace-normal lg:whitespace-nowrap"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                margin: 0,
                maxWidth: '768px',
              }}
            >
              <span style={{ color: '#DF0011' }}>FORLAND, </span>
              <span>A SUCCESS STORY</span>
            </h2>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[58.61px] whitespace-normal lg:whitespace-nowrap"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                margin: 0,
                maxWidth: '768px',
              }}
            >
              SINCE 1999
            </h2>
          </div>

          {/* Descriptive Text Section */}
          <div className="mb-12 lg:mb-16" style={{ textAlign: 'left', maxWidth: '1200px', width: '100%' }}>
            <p
              className="text-sm sm:text-base lg:text-[24px] mb-6 lg:mb-8"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
              }}
            >
              Since its inception in 1999 in China, <strong>Forland</strong> has established itself as a reference brand in the world of light and medium commercial vehicles, combining sustainability, performance and innovation.
              <br />
            </p>
            <p
              className="text-sm sm:text-base lg:text-[24px] mb-0 lg:mb-0"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
              }}
            >
              Over the decades, <strong>Forland</strong> has evolved to meet the needs of a demanding clientele around the world.
            </p>
            <p
              className="text-sm sm:text-base lg:text-[24px] mt-6 lg:mt-8 mb-6 lg:mb-8"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000000',
              }}
            >
              From the beginning, the brand has attracted the attention of customers thanks to a variety of models, ranging from light vehicles to off-road and special vehicles. With a strategy focused on innovation and performance, Forland has grown and conquered more than 50 countries, selling more than 6 million vehicles globally.
            </p>
            <p
              className="text-sm sm:text-base lg:text-[24px] mb-0"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
              }}
            >
              After more than 20 years of rapid development, FORLAND has grown from being a "leading brand in China" to "world-renowned brand", offering transport solutions adapted to various sectors, with the best value for money.
            </p>
          </div>

          {/* Statistical / Key Achievements Section */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8" style={{ maxWidth: '1200px', width: '100%' }}>
            {/* Box 1: 1999 - Creation */}
            <div
              className="w-[150px] sm:w-[180px] lg:w-[200px]"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '12px'
              }}
            >
              {/* Red box with Calendar Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                style={{
                  background: '#DF0011',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1
                }}
              >
                <motion.img
                  src="/logo/1.svg"
                  alt="Icon 1"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  animate={{ 
                    y: [0, -6, 0, 6, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: 'linear',
                    repeat: Infinity,
                    times: [0, 0.25, 0.5, 0.75, 1],
                  }}
                />
              </div>
              {/* Text outside red box */}
              <div style={{ textAlign: 'center' }}>
                <div
                  className="text-xl sm:text-2xl lg:text-[28px] mb-2 lg:mb-2"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                  }}
                >
                  {counters.year}
                </div>
                <div
                  className="text-xs sm:text-sm lg:text-[14px]"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#000000'
                  }}
                >
                  Creation of Forland
                </div>
              </div>
            </div>

            {/* Box 2: +6M - Vehicles sold */}
            <div
              className="w-[150px] sm:w-[180px] lg:w-[200px]"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '12px'
              }}
            >
              {/* Red box with Truck Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                style={{
                  background: '#DF0011',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1
                }}
              >
                <motion.img
                  src="/logo/2.svg"
                  alt="Icon 2"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  animate={{ 
                    y: [0, -6, 0, 6, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: 'linear',
                    repeat: Infinity,
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 0.5
                  }}
                />
              </div>
              {/* Text outside red box */}
              <div style={{ textAlign: 'center' }}>
                <div
                  className="text-xl sm:text-2xl lg:text-[28px] mb-2 lg:mb-2"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                  }}
                >
                  +{counters.vehicles}M
                </div>
                <div
                  className="text-xs sm:text-sm lg:text-[14px]"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#000000'
                  }}
                >
                  Vehicles sold
                </div>
              </div>
            </div>

            {/* Box 3: 50 countries - International presence */}
            <div
              className="w-[150px] sm:w-[180px] lg:w-[200px]"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '12px'
              }}
            >
              {/* Red box with Globe Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                style={{
                  background: '#DF0011',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1
                }}
              >
                <motion.img
                  src="/logo/3.svg"
                  alt="Icon 3"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  animate={{ 
                    y: [0, -6, 0, 6, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: 'linear',
                    repeat: Infinity,
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 1
                  }}
                />
              </div>
              {/* Text outside red box */}
              <div style={{ textAlign: 'center' }}>
                <div
                  className="text-xl sm:text-2xl lg:text-[28px] mb-2 lg:mb-2"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                  }}
                >
                  {counters.countries} countries
                </div>
                <div
                  className="text-xs sm:text-sm lg:text-[14px]"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#000000'
                  }}
                >
                  International presence
                </div>
              </div>
            </div>

            {/* Box 4: +20 Years - Development */}
            <div
              className="w-[150px] sm:w-[180px] lg:w-[200px]"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '12px'
              }}
            >
              {/* Red box with Bar Chart Icon */}
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                style={{
                  background: '#DF0011',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1
                }}
              >
                <motion.img
                  src="/logo/4.svg"
                  alt="Icon 4"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  animate={{ 
                    y: [0, -6, 0, 6, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: 'linear',
                    repeat: Infinity,
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 1.5
                  }}
                />
              </div>
              {/* Text outside red box */}
              <div style={{ textAlign: 'center' }}>
                <div
                  className="text-xl sm:text-2xl lg:text-[28px] mb-2 lg:mb-2"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#000000',
                  }}
                >
                  +{counters.years} Years
                </div>
                <div
                  className="text-xs sm:text-sm lg:text-[14px]"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#000000'
                  }}
                >
                  Development
                </div>
              </div>
            </div>
          </div>

          {/* Additional Text Section Below Stats */}
          <div className="mt-12 lg:mt-16" style={{ textAlign: 'left', maxWidth: '1200px', width: '100%' }}>
            <p
              className="text-sm sm:text-base lg:text-[24px] mb-6 lg:mb-8"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
              }}
            >
              Thanks to its commitment to innovation and production expertise, Forland quickly conquered international markets.
            </p>
            <p
              className="text-sm sm:text-base lg:text-[24px] mb-6 lg:mb-8"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
              }}
            >
              Present in 50 countries and strong of its heritage, the brand has adapted its products to the specific needs of each region while maintaining high standards of safety and efficiency.
            </p>
            <p
              className="text-sm sm:text-base lg:text-[24px] mb-0"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#000000',
                marginTop: 0,
              }}
            >
              Today, Forland is much more than just a vehicle manufacturer: it is a trusted partner, offering vehicles designed to improve productivity and support the growth of the activities of all its customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
