
import { useState, useEffect } from 'react';

export function useMobileApp() {
  const [isCapacitorApp, setIsCapacitorApp] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if the app is running inside a Capacitor container
    const checkCapacitor = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsCapacitorApp(
        typeof (window as any).Capacitor !== 'undefined' || 
        userAgent.includes('capacitor') ||
        userAgent.includes('android') && !userAgent.includes('chrome') ||
        userAgent.includes('iphone') && !userAgent.includes('safari')
      );
    };
    
    checkCapacitor();
  }, []);

  return { isCapacitorApp };
}
