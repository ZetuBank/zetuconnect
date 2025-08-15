import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { ThemeCustomizer } from './ThemeCustomizer';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-lg">
              <img 
                src="https://iili.io/FDVcn4I.jpg" 
                alt="Zetu Logo" 
                className="w-full h-full object-cover"
                data-testid="img-logo"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="text-brand-name">
                Zetu
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400" data-testid="text-brand-tagline">
                Fast. Reliable. Affordable.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Contact Buttons */}
            <Button
              asChild
              className="hidden sm:flex items-center space-x-2 bg-zetu-primary hover:bg-zetu-primary/90"
              data-testid="button-call-us"
            >
              <a href="tel:0113866115">
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
            </Button>
            
            <Button
              asChild
              className="hidden sm:flex items-center space-x-2 bg-green-500 hover:bg-green-600"
              data-testid="button-whatsapp"
            >
              <a href="https://wa.me/254112339102" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
            
            {/* Mobile contact buttons */}
            <Button
              asChild
              size="sm"
              className="sm:hidden bg-zetu-primary hover:bg-zetu-primary/90"
              data-testid="button-call-us-mobile"
            >
              <a href="tel:0113866115">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
            
            <Button
              asChild
              size="sm"
              className="sm:hidden bg-green-500 hover:bg-green-600"
              data-testid="button-whatsapp-mobile"
            >
              <a href="https://wa.me/254112339102" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
            
            {/* Theme Customizer */}
            <ThemeCustomizer />
          </div>
        </div>
      </div>
    </header>
  );
};
