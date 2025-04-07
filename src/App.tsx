
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import AIEmergencyDetection from "./pages/AIEmergencyDetection";
import { useMobileApp } from "./hooks/use-mobile-app";

// Create a new QueryClient instance for React Query
const queryClient = new QueryClient();

// Define the App component as a proper React functional component
const App: React.FC = () => {
  const { isCapacitorApp } = useMobileApp();

  // Add a class to the body for mobile app specific styling if running in Capacitor
  React.useEffect(() => {
    if (isCapacitorApp) {
      document.body.classList.add('capacitor-app');
    }
    
    // Set safe area padding for mobile devices
    const setViewportHeightFix = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    window.addEventListener('resize', setViewportHeightFix);
    setViewportHeightFix();
    
    return () => window.removeEventListener('resize', setViewportHeightFix);
  }, [isCapacitorApp]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className={isCapacitorApp ? 'mobile-container' : ''}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/ai-detection" element={<AIEmergencyDetection />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
