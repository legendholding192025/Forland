'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TestDriveForm() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1152px' }}>
        {/* Heading Section */}
        <div className="flex items-center justify-center gap-2 lg:gap-3 mb-8 lg:mb-16">
          {/* Left diagonal line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.1 }}
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
            <span style={{ color: '#DF0011' }}>Book a</span>{' '}
            <span style={{ color: '#000000' }}>Test Drive</span>
          </h1>

          {/* Right diagonal line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 lg:w-10 lg:h-10" />
          </motion.div>
        </div>

        <div>
          {/* Send us a message section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
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
                    className="w-full outline-none px-4 focus:ring-2 focus:ring-[#DF0011] focus:!border-[#DF0011] transition-all duration-200"
                    style={{
                      maxWidth: '555.77px',
                      height: '38.46px',
                      borderRadius: '9.62px',
                      border: '0.96px solid #2F2F2F',
                      background: '#F5F5F5',
                      color: '#000000',
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
                    className="w-full outline-none px-4 focus:ring-2 focus:ring-[#DF0011] focus:!border-[#DF0011] transition-all duration-200"
                    style={{
                      maxWidth: '555.77px',
                      height: '38.46px',
                      borderRadius: '9.62px',
                      border: '0.96px solid #2F2F2F',
                      background: '#F5F5F5',
                      color: '#000000',
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

