'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  // Define messages based on form type
  const getMessages = () => {
    switch (type) {
      case 'test-drive':
        return {
          title: 'Thank you for your Test Drive request',
          subtitle: 'One of our representative would contact you shortly',
        };
      case 'get-in-touch':
        return {
          title: 'Thank you for sharing your experience with us',
          subtitle: 'Our team will be reaching out shortly to provide an update on your submission.',
        };
      case 'service':
        return {
          title: 'Thank you for your Service request',
          subtitle: 'One of our representative would contact you shortly',
        };
      case 'request-quote':
        return {
          title: 'Thank you for your Quote request',
          subtitle: 'One of our representative would contact you shortly',
        };
      default:
        return {
          title: 'Thank you for sharing your experience with us',
          subtitle: 'Our team will be reaching out shortly to provide an update on your submission.',
        };
    }
  };

  const messages = getMessages();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image 
            src="/logo/header-logo.svg" 
            alt="FORLAND Logo" 
            width={200} 
            height={60} 
            className="mx-auto object-contain w-[150px] lg:w-[200px] h-auto" 
          />
        </motion.div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1
            className="text-3xl lg:text-5xl mb-6"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              color: '#000000',
            }}
          >
            <span style={{ color: '#DF0011' }}>Thank you</span>{' '}
            <span style={{ color: '#000000' }}>{messages.title.replace(/^Thank you\s+/i, '')}</span>
          </h1>
          <p
            className="text-lg lg:text-xl"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              color: '#666666',
              lineHeight: '140%',
            }}
          >
            {messages.subtitle}
          </p>
        </motion.div>

        {/* Back to home button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/"
            className="inline-block text-white relative overflow-hidden group"
            style={{
              width: '200px',
              height: '45px',
              borderRadius: '7px',
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              background: 'linear-gradient(90deg, #000000 0%, #910000 100%)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '0';
            }}
          >
            <div 
              className="hover-overlay absolute inset-0 transition-opacity duration-300 pointer-events-none"
              style={{
                background: '#DF0011',
                opacity: 0,
                borderRadius: '7px',
              }}
            ></div>
            <span className="relative z-10 pointer-events-none">Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Image 
                src="/logo/header-logo.svg" 
                alt="FORLAND Logo" 
                width={200} 
                height={60} 
                className="mx-auto object-contain w-[150px] lg:w-[200px] h-auto" 
              />
            </motion.div>
          </div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}

