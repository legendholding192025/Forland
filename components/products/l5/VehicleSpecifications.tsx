'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function VehicleSpecifications() {
  return (
    <div className="space-y-8 md:space-y-12 px-4 lg:px-0">
      {/* Main Dimensions Section */}
      <section>
        <SectionHeader icon={<Image src="/logo/dimensions.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />} title="Main Dimensions" />
        <div className="mt-6 lg:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 w-full max-w-[800px]">
            <div className="rounded-xl bg-white px-4 py-4 lg:py-5 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
              <SpecList
                rows={[
                  { label: 'Overall dimensions (mm)', value: '6950×2275×2380 | 7950×2275×2380' },
                  { label: 'Cabin width (mm)', value: '2060' },
                ]}
              />
            </div>
            <div className="rounded-xl bg-white px-4 py-4 lg:py-5 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
              <SpecList
                rows={[
                  { label: 'Wheelbase (mm)', value: '3800 | 4500' },
                  { label: 'Cargo length (mm)', value: '5000 | 6000' },
                ]}
              />
            </div>
            <div className="rounded-xl bg-white px-4 py-4 lg:py-5 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
              <SpecList
                rows={[
                  { label: 'GVW (kg)', value: '8500' },
                  { label: 'Payload (kg)', value: '6000' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Power and Transmission Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Power Section */}
        <section>
          <SectionHeader icon={<Image src="/logo/power.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />} title="Power" />
          <div className="mt-6 lg:mt-10">
            <SpecCard>
              <SpecList
                rows={[
                  { label: 'Engine brand', value: 'Cummins' },
                  { label: 'Model', value: 'ISF3.8S5154' },
                  { label: 'Displacement (L)', value: '3.76' },
                  { label: 'Max power (Hp/rpm)', value: '154' },
                  { label: 'Max torque (N·m/rpm)', value: '491' },
                  { label: 'Exhaust emission standard', value: 'Euro V' },
                ]}
              />
            </SpecCard>
          </div>
        </section>

        {/* Transmission Section */}
        <section>
          <SectionHeader icon={<Image src="/logo/transmission.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />} title="Transmission" />
          <div className="mt-6 lg:mt-10">
            <SpecCard>
              <SpecList
                rows={[
                  { label: 'Model', value: 'ZF6S500' },
                  { label: 'Technology type', value: '6MT' },
                  { label: 'Clutch', value: 'Φ350' },
                  { label: 'Max speed (km/h)', value: '120' },
                ]}
              />
            </SpecCard>
          </div>
        </section>
      </div>

      {/* Chassis Section */}
      <section>
        <SectionHeader icon={<Image src="/logo/chassis.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />} title="Chassis" />
        <div className="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <SpecCard>
            <SpecList
              rows={[
                { label: 'Frame', value: '', subValue: '192×60×6' },
                { label: 'Axle', value: 'Front', subValue: '2.4T' },
                { label: '', value: 'Rear', subValue: '1080C/6.5T/4.33(4.875)' },
                { label: 'Suspension', value: 'Front', subValue: 'Non-independent suspension with spring' },
                { label: '', value: 'Rear', subValue: 'Non-independent suspension with spring' },
                { label: 'Steering system', value: '', subValue: 'Round ball power steering' },
                { label: 'Fuel tank', value: '', subValue: '200' },
                { label: 'Tire', value: '', subValue: '215/75R17.5.2+4/1' },
              ]}
            />
          </SpecCard>

          <SpecCard>
            <SpecList
              rows={[
                { label: 'Brake system', value: 'Brake Brand', subValue: 'KNORR-BREMSE' },
                { label: '', value: 'Brake type', subValue: 'Air' },
                { label: '', value: 'Front', subValue: 'Disc' },
                { label: '', value: 'Rear', subValue: 'Drum' },
                { label: '', value: 'Exhaust brake', subValue: 'STD' },
                { label: 'ABS', value: '', subValue: 'ESP/ESC - ASR - ABS' },
                { label: '', value: '', subValue: 'Automatic adjustment of braking clearance' },
              ]}
            />
          </SpecCard>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <SectionHeader icon={<Image src="/logo/features.svg" alt="" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10" />} title="Features" />
        <div className="mt-6 lg:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <SpecCard>
            <ul className="space-y-2 text-sm lg:text-base text-black">
              <li>Battery : 24V</li>
              <li>Radio</li>
              <li>MP3</li>
            </ul>
          </SpecCard>
          <SpecCard>
            <ul className="space-y-2 text-sm lg:text-base text-black">
              <li>Central lock + electronic control window</li>
              <li>High Slope Start Assist System</li>
              <li>Multi-function steering wheel</li>
            </ul>
          </SpecCard>
          <SpecCard>
            <ul className="space-y-2 text-sm lg:text-base text-black">
              <li>Automatic headlights</li>
              <li>Cruise control</li>
              <li>Back-up alarm</li>
            </ul>
          </SpecCard>
        </div>
      </section>
    </div>
  );
}

function SpecCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl bg-white px-4 lg:px-6 py-4 lg:py-5 shadow-[0_1px_0_rgba(0,0,0,0.06)]">{children}</div>;
}

type SpecListRow = {
  label: string;
  value?: string;
  subValue?: string;
};

function SpecList({ rows }: { rows: SpecListRow[] }) {
  return (
    <div className="space-y-3">
      {rows.map((row, idx) => (
        <SpecRow key={`${row.label}-${row.value}-${idx}`} label={row.label} value={row.value} subValue={row.subValue} />
      ))}
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="relative flex items-center gap-2 lg:gap-3">
      {/* Left line (same as ProductSection heading) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 lg:w-10 lg:h-10" />
      </motion.div>

      {/* Icon */}
      <div className="flex items-center justify-center">{icon}</div>

      {/* Title */}
      <h2 className="text-lg lg:text-2xl font-normal text-black">
        <span className="font-medium">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
      </h2>

      {/* Right line (same as ProductSection heading) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      >
        <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-6 h-6 lg:w-10 lg:h-10" />
      </motion.div>
    </div>
  );
}

function SpecRow({ label, value, subValue }: { label: string; value?: string; subValue?: string }) {
  const gridCols = subValue ? 'minmax(220px, auto) 70px 1fr' : 'minmax(220px, auto) 1fr';
  
  return (
    <>
      {/* Mobile Layout */}
      <div className="flex flex-col gap-1 md:hidden">
        <span className="text-sm text-black">{label}</span>
        <div className="flex flex-wrap items-center gap-1">
          {value && !subValue && (
            <>
              {value.includes(' | ') ? (
                value.split(' | ').map((val, idx, arr) => (
                  <React.Fragment key={idx}>
                    <span className="text-sm text-[#EE2222] font-normal">{val.trim()}</span>
                    {idx < arr.length - 1 && (
                      <span className="w-px h-4 bg-[#EE2222] mx-1" />
                    )}
                  </React.Fragment>
                ))
              ) : (
                <span className="text-sm text-[#EE2222] font-normal">{value}</span>
              )}
            </>
          )}
          {value && subValue && (
            <>
              <span className="text-sm text-black pr-1">{value}</span>
              <span className="text-sm text-[#EE2222] font-normal">{subValue}</span>
            </>
          )}
          {!value && subValue && (
            <span className="text-sm text-[#EE2222] font-normal">{subValue}</span>
          )}
        </div>
      </div>

      {/* Desktop Layout - Original Grid */}
      <div className="hidden md:grid items-start gap-y-1 min-w-0" style={{ gridTemplateColumns: gridCols, columnGap: '4px' }}>
      <span className="text-base text-black break-words">{label}</span>

      {value && !subValue && (
        <div className="flex justify-start items-center" style={{ gap: '4px' }}>
          {value.includes(' | ') ? (
            value.split(' | ').map((val, idx, arr) => (
              <React.Fragment key={idx}>
                <span className="text-base text-[#EE2222] font-normal break-words whitespace-normal min-w-0">{val.trim()}</span>
                {idx < arr.length - 1 && (
                  <span 
                    style={{ 
                      width: '1px', 
                      height: '16px', 
                      backgroundColor: '#EE2222',
                      display: 'inline-block',
                      marginLeft: '2px',
                      marginRight: '2px'
                    }}
                  />
                )}
              </React.Fragment>
            ))
          ) : (
            <span className="text-base text-[#EE2222] font-normal break-words whitespace-normal min-w-0">{value}</span>
          )}
        </div>
      )}

      {value && subValue && (
        <>
          <span className="text-base text-black pr-1">{value}</span>
          <div className="flex justify-start">
            <span className="text-base text-[#EE2222] font-normal break-words whitespace-normal min-w-0">{subValue}</span>
          </div>
        </>
      )}

      {!value && subValue && (
        <>
          <span></span>
          <div className="flex justify-start">
            <span className="text-base text-[#EE2222] font-normal break-words whitespace-normal min-w-0">{subValue}</span>
          </div>
        </>
      )}
      {!value && !subValue && (
        <>
          <span></span>
          <span className="text-base text-[#EE2222] font-normal"></span>
        </>
      )}
    </div>

    </>
  );
}
