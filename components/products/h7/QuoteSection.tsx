'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function QuoteSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const form = e.currentTarget || formRef.current;
    if (!form) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const data = {
      first_name: formData.get('firstName') as string,
      last_name: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string || null,
    };

    try {
      const { error } = await supabase
        .from('request_quote')
        .insert([data]);

      if (error) throw error;

      router.push('/thank-you');
    } catch (error: any) {
      setIsSubmitting(false);
      setSubmitStatus({ type: 'error', message: error.message || 'Failed to submit. Please try again.' });
    }
  };

  return (
    <section className="w-full bg-white py-16">
      {/* Red banner (same style as download banner, text changed) */}
      <motion.div
        className="mx-auto mb-8 lg:mb-[60px] max-w-[1152px] bg-[#DF0011] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-6 lg:px-20 lg:py-10 gap-4 lg:gap-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <Image 
          src="/logo/white-logo.svg" 
          alt="FORLAND Logo" 
          width={200} 
          height={60} 
          className="object-contain w-[120px] lg:w-[200px] h-auto" 
        />
        <h2
          className="text-lg lg:text-[32px] m-0 text-center lg:text-left"
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFFFFF',
          }}
        >
          REQUEST A QUOTE OR RECEIVE A CALL
        </h2>
      </motion.div>

      {/* Form */}
      <motion.div 
        className="mx-auto px-4 sm:px-6 lg:px-8" 
        style={{ maxWidth: '1152px' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      >
        <p className="text-black text-lg lg:text-2xl mb-6 lg:mb-10" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
          Our team is entirely at your disposal.
        </p>

        {submitStatus.type === 'error' && (
          <div
            className="mb-6 p-4 rounded-lg bg-red-50 text-red-800"
            style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}
          >
            {submitStatus.message}
          </div>
        )}
        <form
          ref={formRef}
          className="space-y-4 lg:space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Field label="First Name" required name="firstName" />
            <Field label="Last Name" required name="lastName" />
            <Field label="Email" required type="email" name="email" />
            <Field label="Phone Number" required type="tel" name="phone" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <label className="block text-black mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
                <span style={{ color: '#DF0011' }}>*</span> Subject
              </label>
              <select
                name="subject"
                required
                className="w-full lg:max-w-[555.77px] outline-none px-4 focus:ring-2 focus:ring-[#DF0011] focus:!border-[#DF0011] transition-all duration-200"
                style={{
                  height: '38.46px',
                  borderRadius: '9.62px',
                  border: '0.96px solid #2F2F2F',
                  background: '#F5F5F5',
                  color: '#000000',
                  fontFamily: 'Effra, Arial, sans-serif',
                  fontWeight: 400,
                }}
              >
                <option value="" style={{ color: '#000000' }}>Select a subject</option>
                <option value="general-inquiry">General Inquiry</option>
                <option value="product-information">Product Information</option>
                <option value="pricing">Pricing</option>
                <option value="test-drive">Test Drive</option>
                <option value="service">Service</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div></div>
          </div>

          <div>
            <label className="block text-black mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
              Message
            </label>
            <textarea
              name="message"
              className="w-full px-4 py-3 outline-none text-black focus:ring-2 focus:ring-[#DF0011] focus:!border-[#DF0011] transition-all duration-200"
              style={{
                height: '82px',
                borderRadius: '9.62px',
                border: '0.96px solid #2F2F2F',
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
              }}
            />
          </div>

          <div className="flex justify-center pt-4 lg:pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white relative overflow-hidden group w-full max-w-[332px] lg:w-[332px] h-[37px] text-lg lg:text-[24px] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                borderRadius: '7px',
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                background: 'linear-gradient(90deg, #000000 0%, #910000 100%)',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement;
                  if (overlay) overlay.style.opacity = '1';
                }
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
              <span className="relative z-10 pointer-events-none">
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

function Field({
  label,
  required,
  name,
  type = 'text',
}: {
  label: string;
  required?: boolean;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-black" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
        {required ? <span style={{ color: '#DF0011' }}>*</span> : null}
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full lg:max-w-[555.77px] outline-none text-black px-4 focus:ring-2 focus:ring-[#DF0011] focus:!border-[#DF0011] transition-all duration-200"
        style={{
          height: '38.46px',
          borderRadius: '9.62px',
          border: '0.96px solid #2F2F2F',
          fontFamily: 'Effra, Arial, sans-serif',
          fontWeight: 400,
        }}
      />
    </div>
  );
}


