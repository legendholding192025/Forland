import { Metadata } from 'next';

export const siteConfig = {
  name: 'FORLAND UAE',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://forland.ae',
  description: 'FORLAND UAE - Premium cargo trucks and commercial vehicles. Explore our range of products including FORLAND H7 and FORLAND L5. Book a test drive or request a quote today.',
  ogImage: '/logo/header-logo.svg',
  locale: 'en-AE',
  type: 'website',
};

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
}: SEOProps = {}): Metadata {
  const metaTitle = title 
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} - Drive The Future, Drive Forland`;
  
  const metaDescription = description || siteConfig.description;
  const metaImage = image || `${siteConfig.url}${siteConfig.ogImage}`;
  const metaUrl = url || siteConfig.url;

  const defaultKeywords = [
    // Brand keywords
    'FORLAND',
    'FORLAND UAE',
    'FORLAND trucks',
    'FORLAND commercial vehicles',
    
    // Location-based searches
    'truck for sale UAE',
    'commercial vehicles UAE',
    'cargo truck Dubai',
    'truck dealer Dubai',
    'trucks for sale Dubai',
    'commercial vehicles Dubai',
    'truck for sale Abu Dhabi',
    'truck dealership UAE',
    'truck dealer UAE',
    'commercial trucks UAE',
    'truck showroom Dubai',
    'truck dealer Sharjah',
    
    // Vehicle type searches
    'cargo trucks',
    'cargo trucks for sale',
    'pickup trucks UAE',
    'delivery trucks',
    'commercial trucks',
    'commercial vehicles',
    'cargo vehicles',
    'goods vehicles',
    'freight trucks',
    'transport trucks',
    'light commercial vehicles',
    'LCV UAE',
    'medium duty trucks',
    'heavy duty trucks',
    
    // Model-specific searches
    'FORLAND H7',
    'FORLAND H7 price',
    'FORLAND H7 UAE',
    'FORLAND H7 specifications',
    'FORLAND H7 for sale',
    'FORLAND L5',
    'FORLAND L5 price',
    'FORLAND L5 UAE',
    'FORLAND L5 specifications',
    'FORLAND L5 for sale',
    'H7 truck',
    'L5 truck',
    
    // Purchase intent keywords
    'buy truck UAE',
    'truck price UAE',
    'truck price Dubai',
    'truck financing UAE',
    'truck loan UAE',
    'truck lease UAE',
    'affordable trucks UAE',
    'cheap trucks UAE',
    'best trucks UAE',
    'truck offers UAE',
    
    // Service keywords
    'truck service Dubai',
    'truck maintenance UAE',
    'truck service center Dubai',
    'truck parts UAE',
    'truck repair Dubai',
    'truck servicing',
    'truck warranty UAE',
    'truck service booking',
    
    // Test drive and inquiry
    'test drive truck',
    'book test drive',
    'truck test drive Dubai',
    'truck quote',
    'truck inquiry',
    'request quote truck',
    'truck consultation',
    
    // Industry-specific
    'logistics vehicles',
    'warehouse trucks',
    'distribution vehicles',
    'fleet vehicles UAE',
    'business trucks',
    'work trucks',
    
    // Used/second-hand searches
    'used trucks UAE',
    'pre-owned trucks',
    'second hand trucks Dubai',
    'used commercial vehicles',
    
    // Brand alternatives (long-tail)
    'where to buy FORLAND truck',
    'FORLAND truck dealer near me',
    'FORLAND truck price in UAE',
    'best truck brand UAE',
    'reliable trucks UAE',
    'truck brands in Dubai',
    
    // Arabic transliterations (commonly searched)
    'شاحنة للبيع',
    'سيارات تجارية',
    'شاحنات',
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: type,
      locale: siteConfig.locale,
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@forlanduae',
      site: '@forlanduae',
    },
    alternates: {
      canonical: metaUrl,
    },
    verification: {
      // Add your verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}

export function generateStructuredData(type: 'Organization' | 'Product' | 'WebSite' | 'BreadcrumbList', data?: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseStructuredData,
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo/header-logo.svg`,
        description: siteConfig.description,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'AE',
          addressRegion: 'UAE',
        },
        sameAs: [
          // Add social media URLs here when available
          // 'https://www.facebook.com/forlanduae',
          // 'https://www.instagram.com/forlanduae',
          // 'https://www.linkedin.com/company/forlanduae',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          areaServed: 'AE',
          availableLanguage: ['en', 'ar'],
        },
      };

    case 'WebSite':
      return {
        ...baseStructuredData,
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      };

    case 'Product':
      return {
        ...baseStructuredData,
        '@type': 'Product',
        ...data,
        brand: {
          '@type': 'Brand',
          name: 'FORLAND',
        },
        offers: {
          '@type': 'AggregateOffer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'AED',
        },
      };

    case 'BreadcrumbList':
      return {
        ...baseStructuredData,
        '@type': 'BreadcrumbList',
        itemListElement: data?.items || [],
      };

    default:
      return baseStructuredData;
  }
}

