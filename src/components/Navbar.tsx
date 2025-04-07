
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMobileApp } from "@/hooks/use-mobile-app";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { isCapacitorApp } = useMobileApp();
  
  // Close mobile menu on route change
  useEffect(() => {
    return () => setIsMenuOpen(false);
  }, [location]);
  
  const navbarClasses = isCapacitorApp 
    ? "bg-white shadow-sm sticky top-0 z-50 pt-safe-top"
    : "bg-white shadow-sm sticky top-0 z-50";

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-safety-600" />
            <span className="font-bold text-xl text-safety-800">
              HelpOn<span className="text-emergency-500">Wrist</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-gray-600 hover:text-safety-700 transition-colors">Features</a>
            <a href="/#how-it-works" className="text-gray-600 hover:text-safety-700 transition-colors">How it Works</a>
            <a href="/#testimonials" className="text-gray-600 hover:text-safety-700 transition-colors">Testimonials</a>
            <Link to="/dashboard">
              <button className="text-gray-600 hover:text-safety-700 transition-colors">Dashboard</button>
            </Link>
            {/*<Link to="/ai-detection">
              <button className="text-gray-600 hover:text-safety-700 transition-colors">AI Detection</button>
            </Link>*/}
            <Link to="/get-started">
              <Button className="bg-safety-600 hover:bg-safety-700">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 p-2 mobile-touch-target"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a 
              href="/#features" 
              className="block text-gray-600 hover:text-safety-700 transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="/#how-it-works" 
              className="block text-gray-600 hover:text-safety-700 transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="/#testimonials" 
              className="block text-gray-600 hover:text-safety-700 transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Link 
              to="/dashboard" 
              className="block text-gray-600 hover:text-safety-700 transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            {/*<Link 
              to="/ai-detection" 
              className="block text-gray-600 hover:text-safety-700 transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Detection
            </Link>*/}
            <Link to="/get-started" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-safety-600 hover:bg-safety-700">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
