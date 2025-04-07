
import React from "react";
import { 
  Heart, 
  MapPin, 
  Mic, 
  Radio, 
  Shield, 
  Car, 
  UserCheck, 
  AlertCircle 
} from "lucide-react";

const featureItems = [
  {
    icon: <Heart className="h-8 w-8 text-emergency-500" />,
    title: "Health Vitals Monitoring",
    description: "Continuous tracking of heart rate, blood pressure, oxygen levels, and other vital signs from smartwatches."
  },
  {
    icon: <MapPin className="h-8 w-8 text-safety-600" />,
    title: "GPS Location Tracking",
    description: "Precise location detection to guide emergency services directly to the victim during an emergency."
  },
  {
    icon: <Mic className="h-8 w-8 text-medical-600" />,
    title: "Audio Recording",
    description: "Live audio recording of surroundings during emergencies to provide context for responders and evidence in crimes."
  },
  {
    icon: <Radio className="h-8 w-8 text-safety-600" />,
    title: "Automatic SOS Alerts",
    description: "Hands-free emergency detection that works even when you're unconscious or unable to call for help."
  },
  {
    icon: <UserCheck className="h-8 w-8 text-safety-600" />,
    title: "First Responder Network",
    description: "Alerts trained volunteers and medical professionals nearby who can provide immediate assistance."
  },
  {
    icon: <Car className="h-8 w-8 text-medical-600" />,
    title: "Connected Vehicles",
    description: "Integration with nearby vehicles to provide additional assistance and transportation if needed."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-safety-600">Advanced</span> Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered emergency response system utilizes smartwatch sensors to 
            detect emergencies and automatically send help when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5 inline-block p-3 bg-gray-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-safety-50 rounded-2xl p-8 border border-safety-100">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/4 flex justify-center mb-6 lg:mb-0">
              <div className="relative">
                <Shield className="h-24 w-24 text-safety-600" />
                <span className="absolute top-0 right-0 bg-emergency-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  AI
                </span>
              </div>
            </div>
            <div className="lg:w-3/4 lg:pl-8">
              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Emergency Detection
              </h3>
              <p className="text-gray-700 mb-4">
                Our advanced artificial intelligence continuously analyzes data from your smartwatch 
                to detect emergency situations like heart attacks, seizures, accidents, and assaults 
                without any manual intervention.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-safety-600" />
                  <span>Detects irregular heart patterns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-safety-600" />
                  <span>Identifies sudden falls or impacts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-safety-600" />
                  <span>Monitors skin temperature changes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-safety-600" />
                  <span>Analyzes electrodermal activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
