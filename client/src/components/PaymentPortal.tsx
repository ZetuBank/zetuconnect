import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Lock, Loader } from 'lucide-react';

export const PaymentPortal: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Lock className="text-white text-sm" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white" data-testid="text-portal-title">
              Secure Payment Portal
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300" data-testid="text-portal-description">
              Login or subscribe to get started
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="relative">
          {isLoading && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-700 z-10"
              data-testid="loading-iframe"
            >
              <div className="text-center">
                <Loader className="animate-spin h-12 w-12 text-zetu-primary mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">Loading secure portal...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://tinyurl.com/Zetu-internet"
            className="w-full h-96 lg:h-[600px] border-0"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            title="Zetu Internet Subscription Portal"
            onLoad={handleIframeLoad}
            data-testid="iframe-payment-portal"
          />
        </div>
      </CardContent>
    </Card>
  );
};
