'use client';

export default function ButtonSection() {
  const buttons = [
    { label: 'Book a Test Drive', href: '/test-drive' },
    { label: 'Request a Quote', href: '/request-quote' },
    { label: 'Book a Service', href: '/service' },
    { label: 'Get in Touch', href: '/get-in-touch' },
  ];

  return (
    <section className="w-full">
      <div className="w-full">
        <div className="flex w-full gap-1">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className="text-white flex-1 relative overflow-hidden group"
              style={{
                height: '48px',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(90deg, #000000 0%, #910000 100%)'
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
                  opacity: 0
                }}
              ></div>
              <span
                className="relative z-10 pointer-events-none"
                style={{
                  fontFamily: 'Effra, Arial, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                {button.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

