
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Phone, UserCheck, MapPin, Mic } from "lucide-react";

const EmergencyDemo = () => {
  const [demoState, setDemoState] = useState<
    "normal" | "detecting" | "emergency" | "alerting" | "responding"
  >("normal");
  const [heartRate, setHeartRate] = useState(72);
  const [oxygenLevel, setOxygenLevel] = useState(98);
  const [countdown, setCountdown] = useState(0);
  const [progress, setProgress] = useState(0);

  const startDemo = () => {
    setDemoState("detecting");
    setHeartRate(72);
    setOxygenLevel(98);
    setCountdown(5);
    setProgress(0);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let progressInterval: ReturnType<typeof setInterval>;

    if (demoState === "detecting") {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return newProgress;
        });
      }, 50);

      timer = setTimeout(() => {
        setDemoState("emergency");
        setHeartRate(128);
        setOxygenLevel(90);
      }, 5000);
    } else if (demoState === "emergency") {
      timer = setTimeout(() => {
        setDemoState("alerting");
      }, 3000);
    } else if (demoState === "alerting") {
      timer = setTimeout(() => {
        setDemoState("responding");
      }, 4000);
    } else if (demoState === "responding") {
      timer = setTimeout(() => {
        setDemoState("normal");
      }, 8000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [demoState]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }
    
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <section className="py-16 bg-safety-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            See How It <span className="text-safety-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a simulation of our emergency detection and response system in action
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-safety-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span className="font-medium">Safety First Response Demo</span>
            </div>
            <div className="text-sm">
              {demoState === "normal" ? (
                <span className="inline-flex items-center px-2 py-1 bg-green-500 bg-opacity-20 rounded-full">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  Normal
                </span>
              ) : demoState === "detecting" ? (
                <span className="inline-flex items-center px-2 py-1 bg-yellow-500 bg-opacity-20 rounded-full">
                  <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                  Analyzing
                </span>
              ) : (
                <span className="inline-flex items-center px-2 py-1 bg-emergency-500 bg-opacity-20 rounded-full">
                  <span className="h-2 w-2 bg-emergency-500 rounded-full mr-2 animate-pulse"></span>
                  Emergency
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 border-r border-gray-100">
              <div className="text-lg font-medium mb-4 flex items-center">
                <Heart className="h-5 w-5 text-emergency-500 mr-2" />
                Health Metrics
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Heart Rate</div>
                  <div className={`text-2xl font-bold ${heartRate > 100 ? 'text-emergency-500' : 'text-gray-800'}`}>
                    {heartRate} BPM
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Blood Oxygen</div>
                  <div className={`text-2xl font-bold ${oxygenLevel < 95 ? 'text-emergency-500' : 'text-gray-800'}`}>
                    {oxygenLevel}%
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-lg p-3 mb-6">
                <div className="heartbeat-monitor">
                  <div className={`heartbeat-line ${demoState === "normal" ? "" : "emergency-heartbeat-line"}`}></div>
                </div>
              </div>

              {demoState === "normal" && (
                <Button 
                  className="w-full bg-safety-600 hover:bg-safety-700" 
                  onClick={startDemo}
                >
                  Start Emergency Simulation
                </Button>
              )}

              {demoState === "detecting" && (
                <div>
                  <div className="h-2 bg-gray-100 rounded-full mb-2">
                    <div 
                      className="h-full bg-yellow-500 rounded-full" 
                      style={{ width: `${progress}%` }} 
                    ></div>
                  </div>
                  <div className="text-center text-sm text-gray-500">
                    Analyzing health data... Abnormal pattern detected
                  </div>
                </div>
              )}

              {demoState === "emergency" && (
                <div className="bg-emergency-50 border border-emergency-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="h-10 w-10 bg-emergency-500 rounded-full flex items-center justify-center">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-emergency-600 font-bold">Emergency Detected</div>
                      <div className="text-sm text-emergency-500">Potential cardiac event</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">
                    Irregular heart pattern detected. Sending SOS alert in:
                  </div>
                  <div className="text-3xl font-bold text-emergency-600 text-center my-2">
                    {countdown} seconds
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    Tap your device to cancel if this is not an emergency
                  </div>
                </div>
              )}

              {demoState === "alerting" && (
                <div className="bg-emergency-500 text-white p-4 rounded-lg animate-pulse">
                  <div className="text-center font-bold mb-2">
                    SOS ALERT ACTIVATED
                  </div>
                  <div className="text-sm text-center">
                    Sending emergency data and location to emergency services and contacts
                  </div>
                </div>
              )}

              {demoState === "responding" && (
                <div>
                  <div className="bg-green-50 border border-green-100 p-4 rounded-lg mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-green-600 font-bold">Emergency Services Notified</div>
                        <div className="text-sm text-green-500">ETA: 8 minutes</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-safety-50 border border-safety-100 p-4 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-safety-500 rounded-full flex items-center justify-center">
                        <UserCheck className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-safety-600 font-bold">First Responder Found</div>
                        <div className="text-sm text-safety-500">Dr. Smith (300m away) responding</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="text-lg font-medium mb-4">Emergency Data Package</div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-safety-600" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">
                      {demoState === "normal" ? "Not shared" : "47.6062° N, 122.3321° W"}
                    </div>
                    {demoState !== "normal" && (
                      <div className="text-xs text-gray-500">
                        Downtown Seattle, WA
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mic className="h-5 w-5 text-safety-600" />
                  <div>
                    <div className="text-sm text-gray-500">Audio Recording</div>
                    <div className="font-medium">
                      {demoState === "normal" || demoState === "detecting" 
                        ? "Not active" 
                        : "Recording active"}
                    </div>
                    {demoState !== "normal" && demoState !== "detecting" && (
                      <div className="flex items-center mt-1">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1 bg-safety-500"
                              style={{ 
                                height: `${Math.floor(Math.random() * 12) + 4}px`,
                                animationDelay: `${i * 0.1}s` 
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-2">Medical Information</div>
                  {demoState === "normal" ? (
                    <div className="text-gray-400 italic">
                      Not sharing medical information
                    </div>
                  ) : (
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-2">
                        <span className="text-gray-600">Blood Type:</span>
                        <span>O Positive</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-gray-600">Allergies:</span>
                        <span>Penicillin</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-gray-600">Medical Conditions:</span>
                        <span>Hypertension</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="text-gray-600">Medications:</span>
                        <span>Lisinopril</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-2">Emergency Contacts</div>
                  {demoState === "normal" ? (
                    <div className="text-gray-400 italic">
                      Not sharing emergency contacts
                    </div>
                  ) : (
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <div>
                          <div>John Smith (Brother)</div>
                          <div className="text-gray-500">(555) 123-4567</div>
                        </div>
                        {demoState === "responding" && (
                          <div className="text-xs text-green-600">Notified</div>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div>Dr. Williams (Physician)</div>
                          <div className="text-gray-500">(555) 987-6543</div>
                        </div>
                        {demoState === "responding" && (
                          <div className="text-xs text-green-600">Notified</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyDemo;
