import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServiceFeatures } from '@/components/ServiceFeatures';
import { ContactInfo } from '@/components/ContactInfo';
import { PaymentPortal } from '@/components/PaymentPortal';
import { AdditionalServices } from '@/components/AdditionalServices';
import { Footer } from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Chatra chat widget initialization
    const script = document.createElement('script');
    script.innerHTML = `
      (function(d, w, c) {
        w.ChatraID = 'EHDGykHgx8BCJJvDg';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
      })(document, window, 'Chatra');
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      const chatraScript = document.querySelector('script[src="https://call.chatra.io/chatra.js"]');
      if (chatraScript) {
        chatraScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <HeroSection />
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Information */}
          <div className="space-y-8">
            <ServiceFeatures />
            <ContactInfo />
          </div>

          {/* Secure Payment Portal */}
          <PaymentPortal />
        </div>
      </div>

      <AdditionalServices />
      <Footer />
    </div>
  );
}
