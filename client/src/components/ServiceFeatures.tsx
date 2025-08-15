import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast 5MBps',
    description: 'Stream, browse, and download without interruption',
  },
  {
    title: 'Affordable Pricing',
    description: 'Only KES 1,000 per month - best value in Kenya',
  },
  {
    title: '24/7 Customer Support',
    description: "We're here to help whenever you need us",
  },
  {
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprises',
  },
];

export const ServiceFeatures: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl" data-testid="text-features-title">
          Why Choose Zetu?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4"
              data-testid={`feature-item-${index}`}
            >
              <div className="w-8 h-8 bg-zetu-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-white text-sm" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
