import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl" data-testid="text-contact-title">
          Get in Touch
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <a
            href="tel:0113866115"
            className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            data-testid="link-call-contact"
          >
            <div className="w-12 h-12 bg-zetu-primary rounded-full flex items-center justify-center">
              <Phone className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white" data-testid="text-call-label">
                Call Us
              </h4>
              <p className="text-gray-600 dark:text-gray-300" data-testid="text-phone-number">
                0759210709
              </p>
            </div>
          </a>
          
          <a
            href="https://wa.me/254112339102"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            data-testid="link-whatsapp-contact"
          >
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white" data-testid="text-whatsapp-label">
                WhatsApp
              </h4>
              <p className="text-gray-600 dark:text-gray-300" data-testid="text-whatsapp-number">
                0112339102
              </p>
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
