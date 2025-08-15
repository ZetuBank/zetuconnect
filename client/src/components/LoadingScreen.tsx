import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Always show loader for 8 seconds, even on refresh
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 300); // Small delay for fade out
    }, 8000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-logo-container">
          <img 
            src="https://iili.io/FDVcn4I.jpg" 
            alt="Zetu Logo" 
            className="loader-logo"
          />
        </div>
        <h1 className="loader-title">Zetu🛜</h1>
        <p className="loader-subtitle">Fast, Reliable, Affordable</p>

        <div className="loader-wrapper">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>
          <div className="ring ring4"></div>
          <div className="ring ring5"></div>
          <div className="ring ring6"></div>
          <div className="center-circle">
            <Shield className="center-icon" />
          </div>
        </div>

        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <p className="loader-footer">Only KES 1,000 per month - best value in Kenya...</p>
      </div>


    </div>
  );
};