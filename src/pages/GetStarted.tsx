
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-safety-800">Get Started with SafetyFirst</h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-safety-700">Step 1: Connect Your Wearable Device</h2>
            <p className="text-gray-600 mb-6">
              SafetyFirst works with most popular smartwatches and fitness trackers that can monitor heart rate,
              skin temperature, and other vital signs.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="p-4 border border-gray-200 rounded-md text-center">
                <img src="https://placehold.co/60x60" alt="Apple Watch" className="mx-auto mb-2" />
                <p className="text-sm">Apple Watch</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md text-center">
                <img src="https://placehold.co/60x60" alt="Fitbit" className="mx-auto mb-2" />
                <p className="text-sm">Fitbit</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md text-center">
                <img src="https://placehold.co/60x60" alt="Samsung" className="mx-auto mb-2" />
                <p className="text-sm">Samsung</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md text-center">
                <img src="https://placehold.co/60x60" alt="Garmin" className="mx-auto mb-2" />
                <p className="text-sm">Garmin</p>
              </div>
            </div>
            <Button className="w-full sm:w-auto bg-safety-600 hover:bg-safety-700">
              Connect Device
            </Button>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-safety-700">Step 2: Set Up Emergency Contacts</h2>
            <p className="text-gray-600 mb-6">
              Add the people you want to be notified in case of an emergency. They will receive your location and health data.
            </p>
            <Button className="w-full sm:w-auto bg-safety-600 hover:bg-safety-700">
              Add Contacts
            </Button>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-safety-700">Step 3: Customize Alert Settings</h2>
            <p className="text-gray-600 mb-6">
              Adjust when alerts should be triggered based on your health data and activity levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:w-auto bg-safety-600 hover:bg-safety-700">
                Configure Settings
              </Button>
              <Link to="/dashboard">
                <Button className="w-full sm:w-auto bg-emergency-500 hover:bg-emergency-600">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;
