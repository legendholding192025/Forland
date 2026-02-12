'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductSection() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col items-center">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2
              className="flex flex-wrap items-center justify-center gap-2 mx-auto mb-4 sm:mb-6 lg:mb-[24px]"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: 'clamp(12px, 3vw, 24px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
                maxWidth: '100%',
                textAlign: 'center'
              }}
            >
              <motion.img
                src="/vector/small.svg"
                alt="Vector"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-auto lg:h-auto"
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
              <span style={{ color: '#DF0011' }}>A RANGE OF PRODUCTS TO</span> FIT YOUR BUSINESS
              <motion.img
                src="/vector/small.svg"
                alt="Vector"
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-auto lg:h-auto"
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              />
            </h2>
            <h3
              className="px-4"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: 'clamp(24px, 6vw, 64px)',
                lineHeight: '110%',
                letterSpacing: '0%',
                color: '#000000'
              }}
            >
              Drive The Future, <span style={{ color: '#DF0011' }}>Drive Forland</span>
            </h3>
          </div>
          
          {/* Product Boxes */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 justify-center items-center w-full">
            <Link href="/products/h7" className="relative w-[90%] max-w-[400px] sm:max-w-[450px] lg:w-[528px] cursor-pointer" style={{ aspectRatio: '528/485' }}>
              {/* Gray Box - Bottom */}
              <div
                className="absolute bottom-0 left-0 w-full flex items-center justify-center"
                style={{
                  height: '40.6%',
                  background: '#343434',
                  zIndex: 10
                }}
              >
                 <img
                   src="/img/white.png"
                   alt="White Image"
                   className="max-w-full max-h-full object-contain relative transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
                   style={{ marginTop: '-14.4%', zIndex: 20 }}
                 />
              </div>
              {/* Red Box - Centered on top */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4"
                style={{
                  width: '62.1%',
                  height: '59.4%',
                  background: '#DF0011',
                  zIndex: 5
                }}
                initial={{ y: '40.6%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                <Image
                  src="/text/forland-text.svg"
                  alt="Forland Text"
                  width={200}
                  height={60}
                  className="object-contain w-[50%] h-auto"
                />
                <Image
                  src="/text/H7-text.svg"
                  alt="H7 Text"
                  width={150}
                  height={50}
                  className="object-contain w-[38%] h-auto"
                />
                <div
                  className="text-white text-center"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: 'clamp(20px, 5vw, 36.3px)',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  Cargo Truck
                </div>
              </motion.div>
            </Link>
            
            <Link href="/products/l5" className="relative w-[90%] max-w-[400px] sm:max-w-[450px] lg:w-[528px] cursor-pointer" style={{ aspectRatio: '528/485' }}>
              {/* Gray Box - Top */}
              <div
                className="absolute top-0 left-0 w-full flex items-center justify-center"
                style={{
                  height: '40.6%',
                  background: '#343434',
                  zIndex: 10
                }}
              >
                 <img
                   src="/img/red.png"
                   alt="Red Image"
                   className="max-w-full max-h-full object-contain relative transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
                   style={{ marginTop: '-14.4%', zIndex: 20 }}
                 />
              </div>
              {/* Red Box - Centered on bottom */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4"
                style={{
                  width: '62.1%',
                  height: '59.4%',
                  background: '#DF0011',
                  zIndex: 5
                }}
                initial={{ y: '-40.6%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                <Image
                  src="/text/forland-text.svg"
                  alt="Forland Text"
                  width={200}
                  height={60}
                  className="object-contain w-[50%] h-auto"
                />
                <Image
                  src="/text/L5-text.svg"
                  alt="L5 Text"
                  width={150}
                  height={50}
                  className="object-contain w-[38%] h-auto"
                />
                <div
                  className="text-white text-center"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: 'clamp(20px, 5vw, 36.3px)',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  Cargo Truck
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

