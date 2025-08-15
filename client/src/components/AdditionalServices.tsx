import React from 'react';
import { Wifi, Headphones, Shield } from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: 'Reliable Connection',
    description: '99.9% uptime guarantee with redundant infrastructure',
    gradient: 'from-zetu-primary to-zetu-secondary',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Technical experts available round the clock',
    gradient: 'from-zetu-secondary to-purple-600',
  },
  {
    icon: Shield,
    title: 'Secure Network',
    description: 'Enterprise-grade security protecting your data',
    gradient: 'from-purple-600 to-zetu-primary',
  },
];

export const AdditionalServices: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" data-testid="text-services-title">
            More Than Just Internet
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300" data-testid="text-services-subtitle">
            Discover what makes Zetu the best choice for your connectivity needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6"
                data-testid={`service-item-${index}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
