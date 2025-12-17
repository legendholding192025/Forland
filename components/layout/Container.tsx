import type React from 'react';

export default function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${className}`} style={{ maxWidth: '1440px' }}>
      {children}
    </div>
  );
}


