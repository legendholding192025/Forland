"use client";

import { motion } from 'framer-motion';

export default function WhiteSection() {
  return (
    <section
      className="w-full relative white-section"
      style={{
        height: '290px',
        background: '#FFFFFF',
        position: 'relative'
      }}
    >
      <style jsx global>{`
        .white-section-vector {
          width: 288px;
          height: auto;
        }
        @media (max-width: 768px) {
          .white-section {
            height: 200px !important;
          }
          .center-text {
            width: 90% !important;
            padding: 0 20px;
          }
          .main-text {
            font-size: 32px !important;
            white-space: normal !important;
            line-height: 1.2 !important;
          }
          .white-section-vector {
            width: 80px !important;
            height: auto !important;
          }
        }
        @media (max-width: 480px) {
          .white-section-vector {
            width: 60px !important;
            height: auto !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .white-section {
            height: 240px !important;
          }
          .center-text {
            width: 90% !important;
            padding: 0 20px;
          }
          .main-text {
            font-size: 56px !important;
            white-space: normal !important;
            line-height: 1.2 !important;
          }
          .white-section-vector {
            width: 60px !important;
            height: auto !important;
          }
        }
      `}</style>

      {/* Top right corner vector */}
      <motion.img
        src="/vector/white.svg"
        alt="Vector"
        className="white-section-vector"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          filter: 'brightness(0) saturate(100%) invert(14%) sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(0.88)'
        }}
        initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      
      {/* Top left corner vector */}
      <motion.img
        src="/vector/white.svg"
        alt="Vector"
        className="white-section-vector"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          filter: 'brightness(0) saturate(100%) invert(14%) sepia(100%) saturate(10000%) hue-rotate(0deg) brightness(0.88)'
        }}
        initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      />

      {/* Center Text */}
      <div
        className="center-text"
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}
      >
        <span
          className="main-text"
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '84px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000',
            whiteSpace: 'nowrap'
          }}
        >
          The Future{' '}
          <span
            style={{
              fontWeight: 600
            }}
          >
            is Forland.
          </span>
        </span>
      </div>
    </section>
  );
}

