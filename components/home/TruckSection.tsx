"use client";

import Image from 'next/image';

export default function TruckSection() {
  return (
    <section className="w-full relative">
      <style jsx>{`
        /* Desktop - wrapper divs should not constrain images, use original Image component sizes */
        @media (min-width: 1025px) {
          .red-card-logo-forland {
            width: 110px !important;
            height: 32px !important;
            max-width: 110px !important;
            max-height: 32px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .red-card-logo-model {
            width: 80px !important;
            height: 24px !important;
            max-width: 80px !important;
            max-height: 24px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .red-card-logo-forland :global(img),
          .red-card-logo-forland :global(span),
          .red-card-logo-model :global(img),
          .red-card-logo-model :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .red-block {
            height: 250px !important;
          }
          .text-container {
            width: 90% !important;
            height: auto !important;
            padding: 0 20px;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            text-align: center !important;
          }
          .purchase-text {
            font-size: 32px !important;
            line-height: 1.2 !important;
            text-align: center !important;
          }
          .perfect-truck-text {
            font-size: 48px !important;
            line-height: 1.2 !important;
            display: block;
            text-align: center !important;
          }
          .black-block {
            gap: 80px !important;
            padding: 60px 20px !important;
          }
          .truck-image-container {
            width: 100%;
          }
          .truck-image {
            width: 100% !important;
            height: auto !important;
          }
          .red-card {
            width: 100px !important;
            height: 100px !important;
            bottom: -50px !important;
            left: 20% !important;
            gap: 4px !important;
          }
          .red-card-logo-forland {
            width: 55px !important;
            height: 16px !important;
            max-width: 55px !important;
            max-height: 16px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .red-card-logo-forland :global(img),
          .red-card-logo-forland :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          .red-card-logo-model {
            width: 40px !important;
            height: 12px !important;
            max-width: 40px !important;
            max-height: 12px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .red-card-logo-model :global(img),
          .red-card-logo-model :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          .red-card-text {
            font-size: 11px !important;
          }
          .corner-vector {
            width: 40px !important;
            height: auto !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .red-block {
            height: 380px !important;
          }
          .text-container {
            width: 90% !important;
          }
          .purchase-text {
            font-size: 48px !important;
            line-height: 1.3 !important;
          }
          .perfect-truck-text {
            font-size: 96px !important;
            line-height: 1.3 !important;
          }
          .truck-image-container {
            width: 90%;
          }
          .truck-image {
            width: 100% !important;
            height: auto !important;
          }
          .red-card {
            width: 120px !important;
            height: 120px !important;
            bottom: -50px !important;
          }
          .red-card-logo-forland {
            width: 90px !important;
            height: 26px !important;
            max-width: 90px !important;
            max-height: 26px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .red-card-logo-forland :global(img),
          .red-card-logo-forland :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          .red-card-logo-model {
            width: 65px !important;
            height: 20px !important;
            max-width: 65px !important;
            max-height: 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .red-card-logo-model :global(img),
          .red-card-logo-model :global(span) {
            width: 100% !important;
            height: 100% !important;
            max-width: 100% !important;
            max-height: 100% !important;
          }
          .red-card-text {
            font-size: 14px !important;
          }
          .corner-vector {
            width: 60px !important;
            height: auto !important;
          }
        }
      `}</style>

      {/* Top red block */}
      <div
        className="red-block"
        style={{
          width: '100%',
          height: '480px',
          background: '#DF0011',
          position: 'relative'
        }}
      >
        {/* Text container */}
        <div
          className="text-container"
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '774px',
            height: '247px',
            opacity: 1
          }}
        >
          <div
            className="purchase-text"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '67.12px',
              lineHeight: '136.34px',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}
          >
            Purchase Your <span
              className="perfect-truck-text"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '134.24px',
                lineHeight: '136.34px',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}
            >Perfect Truck</span>
          </div>
        </div>
        
        {/* Top right corner vector */}
        <img
          src="/vector/white.svg"
          alt="Vector"
          className="corner-vector"
          style={{
            position: 'absolute',
            top: 0,
            right: 0
          }}
        />
        
        {/* Bottom left corner vector */}
        <img
          src="/vector/white.svg"
          alt="Vector"
          className="corner-vector"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }}
        />
      </div>

      {/* Bottom black block */}
      <div
        className="black-block"
        style={{
          width: '100%',
          background: '#000000',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '80px',
          padding: '80px 40px'
        }}
      >
        {/* First image with overlapping red card */}
        <div
          className="truck-image-container"
          style={{
            position: 'relative',
            display: 'inline-block'
          }}
        >
          <img
            src="https://cdn.legendholding.com/images/cdn_6940097700d295.64254957_20251215_131327.webp"
            alt="Truck Image 1"
            width={1151.320556640625}
            height={450.13433837890625}
            className="truck-image"
            style={{ display: 'block' }}
          />

          {/* Red Card - 144x144 half on image, half outside */}
          <div
            className="red-card"
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '15%',
              transform: 'translateX(-50%)',
              width: '144px',
              height: '144px',
              background: '#DF0011',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <div className="red-card-logo-forland">
              <Image
                src="/text/forland-text.svg"
                alt="Forland Text"
                width={110}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="red-card-logo-model">
              <Image
                src="/text/H7-text.svg"
                alt="H7 Text"
                width={80}
                height={24}
                className="object-contain"
              />
            </div>
            <div
              className="red-card-text"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              Cargo Truck
            </div>
          </div>
        </div>
        <div 
          className="truck-image-container"
          style={{ position: 'relative', display: 'inline-block' }}
        >
          <img
            src="https://cdn.legendholding.com/images/cdn_694009a235ef95.34125296_20251215_131410.webp"
            alt="Truck Image 2"
            width={1151.320556640625}
            height={450.13433837890625}
            className="truck-image"
            style={{ display: 'block' }}
          />

          {/* Red Card - 144x144 half on image, half outside */}
          <div
            className="red-card"
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '15%',
              transform: 'translateX(-50%)',
              width: '144px',
              height: '144px',
              background: '#DF0011',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <div className="red-card-logo-forland">
              <Image
                src="/text/forland-text.svg"
                alt="Forland Text"
                width={110}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="red-card-logo-model">
              <Image
                src="/text/L5-text.svg"
                alt="L5 Text"
                width={80}
                height={24}
                className="object-contain"
              />
            </div>
            <div
              className="red-card-text"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                textAlign: 'center'
              }}
            >
              Cargo Truck
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}