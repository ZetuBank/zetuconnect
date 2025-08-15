import React from 'react';
import { Phone, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-lg">
                <img 
                  src="https://iili.io/FDVcn4I.jpg" 
                  alt="Zetu Logo" 
                  className="w-full h-full object-cover"
                  data-testid="img-footer-logo"
                />
              </div>
              <h3 className="text-xl font-bold" data-testid="text-footer-brand">Zetu</h3>
            </div>
            <p className="text-gray-400 mb-4" data-testid="text-footer-description">
              Providing fast, reliable, and affordable internet connectivity across Kenya. 
              Join thousands of satisfied customers who trust Zetu for their internet needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-links-title">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-home">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-plans">Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-support">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-contact-title">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="text-sm" />
                <span data-testid="text-footer-phone">0113866115</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="text-sm" />
                <span data-testid="text-footer-whatsapp">0759210709</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="text-footer-copyright">
            &copy; 2024 Zetu. All rights reserved. | Fast, Reliable, Affordable Internet
          </p>
        </div>
      </div>
    </footer>
  );
};
