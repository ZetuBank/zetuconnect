import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Shield, Lock, ExternalLink } from 'lucide-react';

export const PaymentSection: React.FC = () => {
  const handlePaymentClick = () => {
    window.open('https://tinyurl.com/Zetu-internet', '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-zetu-primary to-zetu-secondary text-white">
        <CardTitle className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <CreditCard className="text-white text-sm" />
          </div>
          <span data-testid="text-payment-title">Subscribe & Pay</span>
        </CardTitle>
        <p className="text-white text-opacity-90" data-testid="text-payment-description">
          Secure payment portal for your internet subscription
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Payment Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3" data-testid="feature-secure-payment">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Shield className="text-green-600 dark:text-green-400 text-sm" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Secure Payment</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Bank-grade encryption</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3" data-testid="feature-instant-activation">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Lock className="text-blue-600 dark:text-blue-400 text-sm" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Instant Activation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Start browsing immediately</p>
              </div>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3" data-testid="text-plan-title">
              Available Plans
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-600 rounded-lg" data-testid="plan-basic">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Basic Plan</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">5MBps unlimited</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-zetu-primary">KES 1,000</div>
                  <div className="text-xs text-gray-500">per month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <Button
            onClick={handlePaymentClick}
            className="w-full bg-zetu-primary hover:bg-zetu-primary/90 text-white py-3 text-lg font-semibold"
            data-testid="button-open-payment"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Open Payment Portal
          </Button>

          {/* Security Notice */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400" data-testid="text-security-notice">
            <Lock className="inline w-4 h-4 mr-1" />
            Your payment information is processed securely through our trusted payment partner
          </div>
        </div>
      </CardContent>
    </Card>
  );
};