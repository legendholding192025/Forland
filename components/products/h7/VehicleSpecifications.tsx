'use client';

import type React from 'react';
import Image from 'next/image';

export function VehicleSpecifications() {
  return (
    <div className="space-y-12">
      {/* Main Dimensions Section */}
      <section>
        <SectionHeader icon={<DimensionsIcon />} title="Main Dimensions" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpecCard>
            <SpecList
              rows={[
                { label: 'Overall dimensions (mm)', value: '8920×2460×2760 | 10070×2460×2760' },
                { label: 'Cabin width (mm)', value: '2200' },
              ]}
            />
          </SpecCard>
          <SpecCard>
            <SpecList
              rows={[
                { label: 'Wheelbase (mm)', value: '5150 | 5750' },
                { label: 'Cargo length (mm)', value: '6800 | 7800' },
              ]}
            />
          </SpecCard>
          <SpecCard>
            <SpecList
              rows={[
                { label: 'GVW (kg)', value: '16000' },
                { label: 'Payload (kg)', value: '12000' },
              ]}
            />
          </SpecCard>
        </div>
      </section>

      {/* Power and Transmission Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Power Section */}
        <section>
          <SectionHeader icon={<PowerIcon />} title="Power" />
          <div className="mt-10">
            <SpecCard>
              <SpecList
                rows={[
                  { label: 'Model', value: 'ISF4.5S5210' },
                  { label: 'Displacement (L)', value: '4.46' },
                  { label: 'Max power (Hp/rpm)', value: '210' },
                  { label: 'Max torque (N·m/rpm)', value: '760' },
                  { label: 'Exhaust emission standard', value: 'Euro V' },
                ]}
              />
            </SpecCard>
          </div>
        </section>

        {/* Transmission Section */}
        <section>
          <SectionHeader icon={<TransmissionIcon />} title="Transmission" />
          <div className="mt-10">
            <SpecCard>
              <SpecList
                rows={[
                  { label: 'Model', value: '8JS85TE, FAST' },
                  { label: 'Technology type', value: '8MT' },
                  { label: 'Clutch', value: 'φ395' },
                  { label: 'Max speed (km/h)', value: '110' },
                ]}
              />
            </SpecCard>
          </div>
        </section>
      </div>

      {/* Chassis Section */}
      <section>
        <SectionHeader icon={<ChassisIcon />} title="Chassis" />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpecCard>
            <SpecList
              rows={[
                { label: 'Frame', value: '234×65×6' },
                { label: 'Axle', value: 'Front', subValue: '4.2T' },
                { label: '', value: 'Rear', subValue: '1098Z/13.5T/4.875(4.33)' },
                { label: 'Suspension', value: 'Front', subValue: 'Non-independent suspension with spring' },
                { label: '', value: 'Rear', subValue: 'Non-independent suspension with spring' },
                { label: 'Steering system', value: 'Round ball power steering' },
                { label: 'Fuel tank', value: '450(600)' },
                { label: 'Tire', value: '275/80R22.5, 2+4/1' },
              ]}
            />
          </SpecCard>

          <SpecCard>
            <SpecList
              rows={[
                { label: 'Brake system', value: 'Brake Brand', subValue: 'KNORR-BREMSE' },
                { label: '', value: 'Brake type', subValue: 'Air' },
                { label: '', value: 'Front', subValue: 'Drum' },
                { label: '', value: 'Rear', subValue: 'Drum' },
                { label: '', value: 'Exhaust brake', subValue: 'STD' },
                { label: 'ABS', value: 'ESP/ESC - ASR - ABS' },
                { label: '', value: '', subValue: 'Automatic adjustment of braking clearance' },
              ]}
            />
          </SpecCard>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <SectionHeader icon={<FeaturesIcon />} title="Features" />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpecCard>
            <ul className="space-y-2 text-base text-black">
              <li>Battery : 24V</li>
              <li>Radio</li>
              <li>MP3</li>
            </ul>
          </SpecCard>
          <SpecCard>
            <ul className="space-y-2 text-base text-black">
              <li>Central lock + electronic control window</li>
              <li>High Slope Start Assist System</li>
              <li>Multi-function steering wheel</li>
            </ul>
          </SpecCard>
          <SpecCard>
            <ul className="space-y-2 text-base text-black">
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
  return <div className="rounded-xl bg-white px-6 py-5 shadow-[0_1px_0_rgba(0,0,0,0.06)]">{children}</div>;
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
    <div className="relative flex items-center gap-3">
      {/* Left line (same as ProductSection heading) */}
      <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />

      {/* Icon */}
      <div className="flex items-center justify-center">{icon}</div>

      {/* Title */}
      <h2 className="text-2xl font-normal text-black">
        <span className="font-medium">{title.split(' ')[0]}</span> {title.split(' ').slice(1).join(' ')}
      </h2>

      {/* Right line (same as ProductSection heading) */}
      <Image src="/vector/small.svg" alt="" width={40} height={40} className="w-10 h-10" />
    </div>
  );
}

function SpecRow({ label, value, subValue }: { label: string; value?: string; subValue?: string }) {
  return (
    <div className="grid items-start gap-x-4 gap-y-1 min-w-0" style={{ gridTemplateColumns: '220px 1fr' }}>
      <span className="text-base text-black">{label}</span>

      {value && !subValue && (
        <span className="text-base text-[#EE2222] font-normal break-words whitespace-normal min-w-0">{value}</span>
      )}

      {value && subValue && (
        <div className="grid items-start gap-x-3 min-w-0" style={{ gridTemplateColumns: '90px 1fr' }}>
          <span className="text-base text-black">{value}</span>
          <span className="text-base text-[#EE2222] font-normal break-words whitespace-normal min-w-0">{subValue}</span>
        </div>
      )}

      {!value && subValue && (
        <span className="text-base text-[#EE2222] font-normal break-words whitespace-normal min-w-0">{subValue}</span>
      )}
      {!value && !subValue && <span className="text-base text-[#EE2222] font-normal"></span>}
    </div>
  );
}

// Icon Components
function DimensionsIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
      <path d="M20 8L26 14L22 14L22 26L26 26L20 32L14 26L18 26L18 14L14 14L20 8Z" fill="#EE2222" />
      <path d="M8 20L14 14L14 18L26 18L26 14L32 20L26 26L26 22L14 22L14 26L8 20Z" fill="#EE2222" />
      <circle cx="20" cy="20" r="2" fill="#EE2222" />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="14" width="24" height="16" rx="2" fill="#EE2222" />
      <rect x="10" y="10" width="4" height="4" rx="1" fill="#EE2222" />
      <rect x="26" y="10" width="4" height="4" rx="1" fill="#EE2222" />
      <rect x="12" y="18" width="6" height="8" rx="1" fill="white" />
      <rect x="20" y="18" width="6" height="8" rx="1" fill="white" />
      <path d="M14 22H16M22 22H24" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

function TransmissionIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
      <circle cx="15" cy="15" r="6" fill="#EE2222" />
      <circle cx="25" cy="25" r="6" fill="#EE2222" />
      <rect x="18" y="12" width="4" height="16" fill="#EE2222" transform="rotate(45 18 12)" />
      <path d="M15 10V20M10 15H20M25 20V30M20 25H30" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function ChassisIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="12" width="24" height="12" rx="2" fill="#EE2222" />
      <circle cx="13" cy="28" r="4" stroke="#EE2222" strokeWidth="2" fill="white" />
      <circle cx="27" cy="28" r="4" stroke="#EE2222" strokeWidth="2" fill="white" />
      <rect x="14" y="8" width="12" height="6" rx="1" fill="#EE2222" />
      <path d="M12 16H16M24 16H28" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function FeaturesIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="10" width="8" height="3" rx="1.5" fill="#EE2222" />
      <rect x="8" y="16" width="8" height="3" rx="1.5" fill="#EE2222" />
      <rect x="8" y="22" width="8" height="3" rx="1.5" fill="#EE2222" />
      <circle cx="22" cy="11.5" r="1.5" fill="#EE2222" />
      <circle cx="22" cy="17.5" r="1.5" fill="#EE2222" />
      <circle cx="22" cy="23.5" r="1.5" fill="#EE2222" />
      <rect x="26" y="10" width="6" height="3" rx="1.5" fill="#EE2222" />
      <rect x="26" y="16" width="6" height="3" rx="1.5" fill="#EE2222" />
      <rect x="26" y="22" width="6" height="3" rx="1.5" fill="#EE2222" />
    </svg>
  );
}


