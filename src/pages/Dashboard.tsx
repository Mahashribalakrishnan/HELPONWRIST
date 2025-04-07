
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-safety-800">Emergency Response Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Health Metrics Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-safety-700">Health Metrics</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Heart Rate</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-safety-800">72</span>
                  <span className="ml-2 text-sm text-gray-500">bpm</span>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Blood Pressure</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-safety-800">120/80</span>
                  <span className="ml-2 text-sm text-gray-500">mmHg</span>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Oxygen Saturation</p>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-safety-800">98</span>
                  <span className="ml-2 text-sm text-gray-500">%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency Contacts Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-safety-700">Emergency Contacts</h2>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Dr. Sarah Johnson</span>
                <span className="text-emergency-500">Emergency Contact</span>
              </li>
              <li className="flex justify-between">
                <span>John Smith</span>
                <span className="text-safety-600">Family</span>
              </li>
              <li className="flex justify-between">
                <span>Local Emergency Services</span>
                <span className="text-emergency-500">911</span>
              </li>
            </ul>
          </div>
          
          {/* Recent Alerts Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-safety-700">Recent Alerts</h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-500">Yesterday, 3:45 PM</p>
                <p className="font-medium">Elevated Heart Rate Alert</p>
                <p className="text-sm text-gray-600">Heart rate reached 135 bpm during exercise</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-500">Oct 15, 9:22 AM</p>
                <p className="font-medium">Fall Detection</p>
                <p className="text-sm text-gray-600">Possible fall detected - auto-resolved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
