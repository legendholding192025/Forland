'use client';

import Image from 'next/image';

export default function ServiceForm() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1152px' }}>
        {/* Heading Section */}
        <div className="flex items-center justify-center gap-2 lg:gap-3 mb-8 lg:mb-16">
          {/* Left diagonal line */}
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 lg:w-10 lg:h-10" />

          {/* Title */}
          <h1 
            className="text-2xl sm:text-3xl lg:text-4xl font-normal"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
            }}
          >
            <span style={{ color: '#DF0011' }}>Book Your</span>{' '}
            <span style={{ color: '#000000' }}>Service</span>
          </h1>

          {/* Right diagonal line */}
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 lg:w-10 lg:h-10" />
        </div>

        <div>
          {/* Send us a message section */}
          <div>
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

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
              }}
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
                  className="w-full px-4 py-3 outline-none text-black"
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
                  className="text-white relative overflow-hidden group"
                  style={{
                    width: '332px',
                    height: '37px',
                    borderRadius: '7px',
                    fontFamily: 'Effra, Arial, sans-serif',
                    fontWeight: 400,
                    fontSize: '24px',
                    background: 'linear-gradient(90deg, #000000 0%, #910000 100%)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                  <span className="relative z-10 pointer-events-none">Send Message</span>
                </button>
              </div>
            </form>
          </div>

          {/* Or Contact Us section - below the form */}
          <div className="mt-12">
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
                  href="tel:8001234567"
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
                  800 123 4567
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
          </div>
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
        className="w-full outline-none text-black px-4"
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

