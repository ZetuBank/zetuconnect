import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-zetu-primary to-zetu-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
          High-Speed Internet for Everyone
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90" data-testid="text-hero-subtitle">
          Get 5MBps unlimited internet for only KES 1,000
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-4" data-testid="card-speed-info">
            <div className="text-3xl font-bold" data-testid="text-speed-value">5MBps</div>
            <div className="text-sm opacity-80" data-testid="text-speed-label">Download Speed</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-4" data-testid="card-price-info">
            <div className="text-3xl font-bold" data-testid="text-price-value">KES 1,000</div>
            <div className="text-sm opacity-80" data-testid="text-price-label">Monthly Price</div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-4" data-testid="card-support-info">
            <div className="text-3xl font-bold" data-testid="text-support-value">24/7</div>
            <div className="text-sm opacity-80" data-testid="text-support-label">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
