'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutCommitmentSection() {
  return (
    <section 
      className="relative w-full min-h-[900px] sm:min-h-[800px] lg:min-h-[580px] pb-12 lg:pb-[60px]"
    >
      <Image
        src="https://cdn.legendholding.com/images/cdn_69467fb3a76b81.50381106_20251220_105131.webp"
        alt="FORLAND Commitment"
        fill
        className="object-cover"
        priority
        quality={100}
        unoptimized={true}
        sizes="100vw"
      />
      {/* Heading at top */}
      <div className="relative lg:absolute lg:top-0 lg:left-0 lg:right-0 flex flex-col items-center z-10 pt-6 pb-6 lg:pt-12 lg:pb-12">
        <div className="flex items-center justify-center gap-2 lg:gap-3 mb-6 lg:mb-8">
          {/* Left diagonal line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 lg:w-10 lg:h-10" />
          </motion.div>

          {/* Title */}
          <h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-normal"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
            }}
          >
            <span style={{ color: '#DF0011' }}>OUR</span>{' '}
            <span style={{ color: '#FFFFFF' }}>COMMITMENTS</span>
          </h1>

          {/* Right diagonal line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 lg:w-10 lg:h-10" />
          </motion.div>
        </div>

        {/* Images below heading */}
        <div className="flex flex-col items-center gap-6 lg:gap-8 px-4" style={{ width: '100%' }}>
          {/* Container matching reason cards alignment */}
          <div className="max-w-[1152px] w-full mx-auto relative">
            {/* First image with content on both sides */}
            <div className="flex flex-col lg:flex-row items-center relative min-h-[200px] lg:min-h-[173px] gap-6 lg:gap-0">
              {/* Center image - appears first on mobile */}
              <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 order-1 lg:order-2 flex items-center justify-center w-full lg:w-auto">
                <img
                  src="https://cdn.legendholding.com/images/cdn_69468212a29c47.42339452_20251220_110138.webp"
                  alt="FORLAND Commitment 1"
                  className="w-[150px] h-auto sm:w-[180px] lg:w-[210px] lg:h-[173px] block mx-auto lg:mx-0"
                  style={{ objectFit: 'contain', display: 'block' }}
                />
              </div>

              {/* Left side content - appears second on mobile */}
              <div className="flex flex-col w-full lg:w-auto lg:flex-1 lg:max-w-[calc((1152px-30px)/2)] lg:pr-[135px] order-2 lg:order-1">
                <h3
                  className="text-lg lg:text-[24px] mb-3 lg:mb-3"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#DF0011',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  COMMERCIAL LOGISTICS PLATFORM
                </h3>
                <ul
                  className="text-sm lg:text-[16px] pl-5 lg:pl-5"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '160%',
                    color: '#FFFFFF',
                    margin: 0,
                    listStyleType: 'disc'
                  }}
                >
                  <li className="mb-2 lg:mb-2">Create high quality and high efficiency logistics products.</li>
                  <li className="mb-2 lg:mb-2">Provide scientific and accurate logistics solutions to users.</li>
                </ul>
              </div>

              {/* Right side content - appears third on mobile */}
              <div className="flex flex-col w-full lg:w-auto lg:flex-1 lg:max-w-[calc((1152px-30px)/2)] lg:ml-auto lg:pl-[135px] order-3">
                <h3
                  className="text-lg lg:text-[24px] mb-3 lg:mb-3"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#DF0011',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  ALL-TERRAIN TRANSPORT
                </h3>
                <ul
                  className="text-sm lg:text-[16px] pl-5 lg:pl-5"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '160%',
                    color: '#FFFFFF',
                    margin: 0,
                    listStyleType: 'disc'
                  }}
                >
                  <li className="mb-2 lg:mb-2">Exceptional load capacity and adaptability to difficult roads.</li>
                  <li className="mb-2 lg:mb-2">No path, however rugged, can stop it.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second image with content on both sides */}
          <div className="max-w-[1152px] w-full mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center relative min-h-[200px] lg:min-h-[162px] gap-6 lg:gap-0">
              {/* Center image - appears first on mobile */}
              <div className="relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 order-1 lg:order-2 flex items-center justify-center w-full lg:w-auto">
                <img
                  src="https://cdn.legendholding.com/images/cdn_694682e4afc615.15283109_20251220_110508.webp"
                  alt="FORLAND Commitment 2"
                  className="w-[150px] h-auto sm:w-[180px] lg:w-[222px] lg:h-[162px] block mx-auto lg:mx-0"
                  style={{ objectFit: 'contain', display: 'block' }}
                />
              </div>

              {/* Left side content - appears second on mobile */}
              <div className="flex flex-col w-full lg:w-auto lg:flex-1 lg:max-w-[calc((1152px-30px)/2)] lg:pr-[145px] order-2 lg:order-1">
                <h3
                  className="text-lg lg:text-[24px] mb-3 lg:mb-3"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#DF0011',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  CONSTRUCTION VEHICLES
                </h3>
                <ul
                  className="text-sm lg:text-[16px] pl-5 lg:pl-5"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '160%',
                    color: '#FFFFFF',
                    margin: 0,
                    listStyleType: 'disc'
                  }}
                >
                  <li className="mb-2 lg:mb-2">Vehicles designed for extremely heavy, robust and durable loads.</li>
                  <li className="mb-2 lg:mb-2">A revolution for the global development of modern transport.</li>
                </ul>
              </div>

              {/* Right side content - appears third on mobile */}
              <div className="flex flex-col w-full lg:w-auto lg:flex-1 lg:max-w-[calc((1152px-30px)/2)] lg:ml-auto lg:pl-[145px] order-3">
                <h3
                  className="text-lg lg:text-[24px] mb-3 lg:mb-3"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: '#DF0011',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}
                >
                  SOLUTIONS FOR SPECIAL CONDITIONS
                </h3>
                <p
                  className="text-sm lg:text-[16px] mb-0"
                  style={{
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '160%',
                    color: '#FFFFFF',
                    margin: 0,
                    paddingLeft: '0'
                  }}
                >
                  With more than 20 years of experience, FORLAND designs vehicles adapted  to the specific transport and operating conditions, meeting the needs of customers around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

