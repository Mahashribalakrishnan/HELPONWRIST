
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Activity, MapPin, AlertTriangle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-safety-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex items-center mb-4 space-x-2">
              <Heart className="h-6 w-6 text-emergency-500 animate-heartbeat" />
              <span className="inline-block bg-emergency-100 text-emergency-800 text-sm font-medium px-3 py-1 rounded-full">
                Life-saving Technology
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Emergency Detection &{" "}
              <span className="text-safety-600">Automatic Response</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              An AI-powered system that detects emergencies using smartwatch data 
              and automatically sends SOS alerts without any physical action needed. 
              Saving lives when seconds matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-safety-600 hover:bg-safety-700 text-white font-medium px-6 py-3 rounded-lg text-lg">
                Download App
              </Button>
              <Button variant="outline" className="border-safety-600 text-safety-600 hover:bg-safety-50 font-medium px-6 py-3 rounded-lg text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-6">
              <div className="absolute top-4 right-4 flex items-center">
                <span className="animate-ping absolute h-3 w-3 rounded-full bg-emergency-500 opacity-75"></span>
                <span className="relative rounded-full h-3 w-3 bg-emergency-500"></span>
                <span className="ml-2 text-sm text-emergency-600 font-medium">Live Monitoring</span>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-safety-50 p-4 rounded-xl space-y-2">
                    <Activity className="h-6 w-6 text-safety-600" />
                    <h3 className="font-medium text-sm text-gray-700">Heart Rate</h3>
                    <p className="text-lg font-bold text-emergency-600">128 BPM</p>
                    <p className="text-xs text-emergency-500">Abnormal</p>
                  </div>
                  
                  <div className="bg-safety-50 p-4 rounded-xl space-y-2">
                    <AlertTriangle className="h-6 w-6 text-medical-600" />
                    <h3 className="font-medium text-sm text-gray-700">Blood Oxygen</h3>
                    <p className="text-lg font-bold">92%</p>
                    <p className="text-xs text-medical-600">Reduced</p>
                  </div>
                  
                  <div className="bg-safety-50 p-4 rounded-xl space-y-2">
                    <MapPin className="h-6 w-6 text-safety-600" />
                    <h3 className="font-medium text-sm text-gray-700">Location</h3>
                    <p className="text-lg font-bold">Tracking</p>
                    <p className="text-xs text-safety-600">Downtown</p>
                  </div>
                </div>
                
                <div className="bg-black rounded-lg p-3">
                  <div className="heartbeat-monitor">
                    <div className="heartbeat-line emergency-heartbeat-line"></div>
                  </div>
                </div>
                
                <div className="relative p-4 bg-emergency-50 rounded-xl border border-emergency-100">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-emergency-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-white animate-alert-flash" />
                    </div>
                    <div>
                      <h3 className="font-bold text-emergency-700">Emergency Detected</h3>
                      <p className="text-sm text-emergency-600">Sending SOS alert...</p>
                    </div>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <Button size="sm" variant="destructive" className="bg-emergency-600 text-white hover:bg-emergency-700">
                      Emergency Services
                    </Button>
                    <Button size="sm" variant="outline" className="border-emergency-500 text-emergency-500">
                      Contacts
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-safety-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-safety-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
