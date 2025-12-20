'use client';

import Image from 'next/image';

export default function TestDriveForm() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1152px' }}>
        {/* Heading Section */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {/* Left diagonal line */}
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />

          {/* Title */}
          <h1 
            className="text-4xl font-normal"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
            }}
          >
            <span style={{ color: '#DF0011' }}>Book a</span>{' '}
            <span style={{ color: '#000000' }}>Test Drive</span>
          </h1>

          {/* Right diagonal line */}
          <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />
        </div>

        <div>
          {/* Send us a message section */}
          <div>

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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-black mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
                    <span style={{ color: '#DF0011' }}>*</span> Model
                  </label>
                  <select
                    name="model"
                    required
                    className="w-full border border-[#2F2F2F] rounded-md px-4 py-3 outline-none text-black bg-white"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    <option value="">Select a model</option>
                    <option value="h7">H7</option>
                    <option value="l5">L5</option>
                  </select>
                </div>
                <div>
                  <label className="block text-black mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
                    <span style={{ color: '#DF0011' }}>*</span> Emirates
                  </label>
                  <select
                    name="emirates"
                    required
                    className="w-full border border-[#2F2F2F] rounded-md px-4 py-3 outline-none text-black bg-white"
                    style={{
                      fontFamily: 'Effra, Arial, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    <option value="">Select an emirate</option>
                    <option value="abu-dhabi">Abu Dhabi</option>
                    <option value="dubai">Dubai</option>
                    <option value="sharjah">Sharjah</option>
                    <option value="ajman">Ajman</option>
                    <option value="umm-al-quwain">Umm Al Quwain</option>
                    <option value="ras-al-khaimah">Ras Al Khaimah</option>
                    <option value="fujairah">Fujairah</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-black mb-2" style={{ fontFamily: 'Effra, Arial, sans-serif', fontWeight: 400 }}>
                  Additional Information (Optional)
                </label>
                <textarea
                  name="additionalInfo"
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
                  <span className="relative z-10 pointer-events-none">Book Test Drive</span>
                </button>
              </div>
            </form>
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
        className="w-full border border-[#2F2F2F] rounded-md px-4 py-3 outline-none text-black"
      />
    </div>
  );
}

