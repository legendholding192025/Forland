'use client';

import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="w-full bg-white py-16">
      {/* Red banner (same style as download banner, text changed) */}
      <div
        className="mx-auto mb-8 lg:mb-[60px] max-w-[1152px] bg-[#DF0011] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-6 lg:px-20 lg:py-10 gap-4 lg:gap-0"
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
      </div>

      {/* Form */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1152px' }}>
        <p className="text-black text-lg lg:text-2xl mb-6 lg:mb-10" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
          Our team is entirely at your disposal.
        </p>

        <form
          className="space-y-4 lg:space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Field label="First Name" required name="firstName" />
            <Field label="Last Name" required name="lastName" />
            <Field label="Email" required type="email" name="email" />
            <Field label="Phone Number" required type="tel" name="phone" />
          </div>

          <div>
            <label className="block text-black mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
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

          <div className="flex justify-center pt-4 lg:pt-6">
            <button
              type="submit"
              className="text-white relative overflow-hidden group w-full max-w-[332px] lg:w-[332px] h-[37px] text-lg lg:text-[24px]"
              style={{
                borderRadius: '7px',
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
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
        className="w-full lg:max-w-[555.77px] outline-none text-black px-4"
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

