
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import EmergencyDemo from "@/components/EmergencyDemo";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Features />
        <EmergencyDemo />
        <HowItWorks />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
