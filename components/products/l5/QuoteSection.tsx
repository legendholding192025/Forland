'use client';

import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="w-full bg-white py-16">
      {/* Red banner (same style as download banner, text changed) */}
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto 60px auto',
          background: '#DF0011',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 80px',
        }}
      >
        <Image src="/logo/white-logo.svg" alt="FORLAND Logo" width={200} height={60} className="object-contain" />
        <h2
          style={{
            fontFamily: 'Effra, Arial, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFFFFF',
            margin: 0,
          }}
        >
          REQUEST A QUOTE OR RECEIVE A CALL
        </h2>
      </div>

      {/* Form */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1152px' }}>
        <p className="text-black text-2xl mb-10" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
          Our team is entirely at your disposal.
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
            <Field label="Email" required type="email" name="email" />
            <Field label="Phone Number" required type="tel" name="phone" />
          </div>

          <div>
            <label className="block text-black mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif' }}>
              Message
            </label>
            <textarea
              name="message"
              className="w-full border border-[#2F2F2F] rounded-md px-4 py-3 outline-none text-black"
              style={{ minHeight: '140px' }}
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
        className="w-full border border-[#2F2F2F] rounded-md px-4 py-3 outline-none text-black"
      />
    </div>
  );
}

