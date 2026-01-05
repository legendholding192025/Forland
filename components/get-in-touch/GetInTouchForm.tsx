'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function GetInTouchForm() {
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
      message: formData.get('message') as string || null,
    };

    try {
      const { error } = await supabase
        .from('get_in_touch')
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
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1152px' }}>
        <div>
          {/* Send us a message section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <h2
              className="mb-2"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '28px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#DF0011',
              }}
            >
              Send us a message
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: '#666666',
              }}
            >
              Fill out the form below and we will get back to you as soon as possible.
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
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="First Name" required name="firstName" />
                <Field label="Last Name" required name="lastName" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="Email" required type="email" name="email" />
                <Field label="Phone Number" required type="tel" name="phone" />
              </div>

              <div>
                <label className="block text-black mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
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

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    width: '332px',
                    height: '37px',
                    borderRadius: '7px',
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontSize: '24px',
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

          {/* Or Contact Us section - below the form */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <h2
              className="mb-6"
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '28px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#DF0011',
              }}
            >
              Or Contact Us
            </h2>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/Call.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7151%) hue-rotate(353deg) brightness(96%) contrast(95%)' }}
                />
                <a 
                  href="tel:80010888"
                  className="text-black hover:opacity-80 transition-opacity duration-200"
                  style={{ 
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  800 10 888
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/Email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7151%) hue-rotate(353deg) brightness(96%) contrast(95%)' }}
                />
                <a 
                  href="mailto:commercial.sales@legendmotorsuae.com"
                  className="text-black hover:opacity-80 transition-opacity duration-200 break-words"
                  style={{ 
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    wordBreak: 'break-word'
                  }}
                >
                  commercial.sales@legendmotorsuae.com
                </a>
              </div>
              {/* Address */}
              <div className="flex items-start gap-3">
                <Image
                  src="/logo/Location.svg"
                  alt="Location"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-0.5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7151%) hue-rotate(353deg) brightness(96%) contrast(95%)' }}
                />
                <div 
                  className="text-black"
                  style={{ 
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0%'
                  }}
                >
                  Plot 59 22nd St - Al Quoz<br />
                  Al Quoz Industrial Area 2 - Dubai, UAE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
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
        className="w-full outline-none text-black px-4 focus:ring-2 focus:ring-[#DF0011] focus:!border-[#DF0011] transition-all duration-200"
        style={{
          maxWidth: '555.77px',
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

