
import React from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Smart Detection",
    description: "Our AI continuously monitors vital signs from your smartwatch, including heart rate variability, skin temperature, and electrodermal activity to detect emergency patterns.",
    highlight: "No user action required",
  },
  {
    number: "02",
    title: "Emergency Verification",
    description: "When abnormal patterns are detected, the system checks for additional indicators and gives you a brief window to cancel if it's a false alarm.",
    highlight: "Minimizes false alerts",
  },
  {
    number: "03",
    title: "SOS Package Creation",
    description: "Upon confirming an emergency, the system compiles your vital health data, exact GPS location, and begins audio recording of your surroundings.",
    highlight: "Comprehensive emergency data",
  },
  {
    number: "04",
    title: "Alert Distribution",
    description: "Alerts are simultaneously sent to emergency services, your designated emergency contacts, and nearby trained first responders who can provide immediate assistance.",
    highlight: "Multi-layered response",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-safety-600">It Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered system works silently in the background, ready to respond when you need help most
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting the steps */}
            <div className="hidden md:block absolute left-[28px] top-[60px] bottom-[60px] w-1 bg-safety-100"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex items-start justify-center md:justify-start mb-4 md:mb-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-safety-50 border-2 border-safety-200 text-safety-600 text-xl font-bold z-10">
                      {step.number}
                    </div>
                  </div>
                  <div className="md:w-[calc(100%-4rem)] md:pl-8">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 mb-3 text-lg">{step.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-safety-50 rounded-full">
                      <CheckCircle className="h-4 w-4 text-safety-600 mr-2" />
                      <span className="text-sm font-medium text-safety-700">{step.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-safety-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Integration with First Responders Network</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-xl mb-3 text-medical-800">
                  Trained Medical Volunteers
                </h4>
                <p className="text-gray-600 mb-4">
                  Our network includes off-duty healthcare workers, trained first aid providers, 
                  and certified volunteers who receive alerts when they're near an emergency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-medical-600 mr-2 flex-shrink-0" />
                    <span>Background-checked and verified</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-medical-600 mr-2 flex-shrink-0" />
                    <span>Training verification system</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-medical-600 mr-2 flex-shrink-0" />
                    <span>Certified CPR and first aid skills</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-xl mb-3 text-safety-800">
                  Connected Vehicle Network
                </h4>
                <p className="text-gray-600 mb-4">
                  Our system connects with participating driver networks to identify nearby assistance 
                  and potential transportation to medical facilities when needed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-safety-600 mr-2 flex-shrink-0" />
                    <span>Rideshare and taxi integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-safety-600 mr-2 flex-shrink-0" />
                    <span>Driver emergency training program</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-safety-600 mr-2 flex-shrink-0" />
                    <span>First aid kits in participating vehicles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
