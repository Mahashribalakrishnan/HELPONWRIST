
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, AlertTriangle, Activity, Thermometer, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { emergencyDetectionService, HealthData, DetectionResult } from "@/services/aiDetectionService";

const AIEmergencyDetection = () => {
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [detectionResult, setDetectionResult] = useState<DetectionResult | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<'normal' | 'warning' | 'emergency'>('normal');
  
  const { toast } = useToast();

  // Load the model when the component mounts
  useEffect(() => {
    const loadModel = async () => {
      try {
        await emergencyDetectionService.initModel();
        setIsModelLoading(false);
        toast({
          title: "AI Model Ready",
          description: "Emergency detection model has been loaded successfully.",
        });
      } catch (error) {
        console.error("Error loading model:", error);
        toast({
          title: "Model Loading Failed",
          description: "There was an error loading the AI model. Please try again.",
          variant: "destructive",
        });
      }
    };
    
    loadModel();
  }, [toast]);

  // Generate mock data based on selected scenario
  const generateMockData = () => {
    const mockData = emergencyDetectionService.generateMockHealthData(selectedScenario);
    setHealthData(mockData);
    setDetectionResult(null); // Clear any previous results
  };

  // Analyze the health data
  const analyzeData = async () => {
    if (!healthData) return;
    
    setIsAnalyzing(true);
    try {
      const result = await emergencyDetectionService.detectEmergency(healthData);
      setDetectionResult(result);
      
      if (result.isEmergency) {
        toast({
          title: "Emergency Detected!",
          description: `${result.emergencyType}: ${result.recommendation}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing the health data.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Render health data visualization
  const renderHealthDataVisualization = () => {
    if (!healthData) return null;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Heart className="h-5 w-5 text-emergency-500" />
              <span>Cardiovascular</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Heart Rate</span>
                  <Badge 
                    variant={healthData.heartRate > 120 || healthData.heartRate < 60 ? "destructive" : "outline"}
                  >
                    {healthData.heartRate} bpm
                  </Badge>
                </div>
                <Progress value={Math.min((healthData.heartRate / 200) * 100, 100)} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Blood Pressure</span>
                  <Badge 
                    variant={healthData.bloodPressureSystolic > 140 || healthData.bloodPressureSystolic < 90 ? "destructive" : "outline"}
                  >
                    {healthData.bloodPressureSystolic}/{healthData.bloodPressureDiastolic} mmHg
                  </Badge>
                </div>
                <Progress value={Math.min((healthData.bloodPressureSystolic / 220) * 100, 100)} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Activity className="h-5 w-5 text-medical-600" />
              <span>Vital Signs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Oxygen Saturation</span>
                  <Badge 
                    variant={healthData.oxygenSaturation < 92 ? "destructive" : "outline"}
                  >
                    {healthData.oxygenSaturation}%
                  </Badge>
                </div>
                <Progress value={healthData.oxygenSaturation} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Temperature</span>
                  <Badge 
                    variant={healthData.temperature > 38.5 || healthData.temperature < 36 ? "destructive" : "outline"}
                  >
                    {healthData.temperature}°C
                  </Badge>
                </div>
                <Progress value={((healthData.temperature - 35) / 6) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center space-x-2">
              <User className="h-5 w-5 text-safety-600" />
              <span>Movement & Position</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Current Status</span>
              <Badge 
                variant={healthData.movement === 'fallen' || healthData.movement === 'stationary' ? "destructive" : healthData.movement === 'erratic' ? "secondary" : "outline"}
              >
                {healthData.movement.charAt(0).toUpperCase() + healthData.movement.slice(1)}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Render emergency detection result
  const renderDetectionResult = () => {
    if (!detectionResult) return null;
    
    return (
      <Alert 
        variant={detectionResult.isEmergency ? "destructive" : "default"}
        className={detectionResult.isEmergency ? "bg-emergency-50 text-emergency-800 border-emergency-200" : ""}
      >
        <AlertTriangle className={detectionResult.isEmergency ? "h-5 w-5 text-emergency-500" : "h-5 w-5"} />
        <AlertTitle>
          {detectionResult.isEmergency ? (
            <span className="text-emergency-700">{detectionResult.emergencyType || "Emergency Detected"}</span>
          ) : (
            "No Emergency Detected"
          )}
        </AlertTitle>
        <AlertDescription className="mt-2">
          <div className="flex items-center space-x-2 mb-2">
            <span>Confidence:</span>
            <Progress 
              value={detectionResult.confidence * 100} 
              className={`h-2 w-24 ${detectionResult.isEmergency ? "bg-emergency-200" : ""}`} 
            />
            <span>{Math.round(detectionResult.confidence * 100)}%</span>
          </div>
          <p>{detectionResult.recommendation}</p>
        </AlertDescription>
      </Alert>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-safety-800">
              AI Emergency Detection System
            </h1>
            <p className="text-gray-600 mb-2">
              This demo shows how our AI model can analyze health data from smartwatches to detect potential emergencies.
            </p>
            <Badge variant="outline" className={isModelLoading ? "bg-yellow-100" : "bg-green-100"}>
              {isModelLoading ? "Loading AI Model..." : "AI Model Ready"}
            </Badge>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Generate Test Data</CardTitle>
              <CardDescription>
                Select a scenario to generate realistic health data for the AI to analyze
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="normal" onValueChange={(value) => setSelectedScenario(value as any)}>
                <TabsList className="mb-4">
                  <TabsTrigger value="normal">Normal</TabsTrigger>
                  <TabsTrigger value="warning">Warning Signs</TabsTrigger>
                  <TabsTrigger value="emergency">Emergency</TabsTrigger>
                </TabsList>
                
                <TabsContent value="normal">
                  <p className="text-sm text-gray-500 mb-4">
                    Generate data representing normal vital signs within healthy ranges. The AI model should not detect any emergencies.
                  </p>
                </TabsContent>
                <TabsContent value="warning">
                  <p className="text-sm text-gray-500 mb-4">
                    Generate data showing concerning but not immediately critical vital signs. The AI might detect potential issues.
                  </p>
                </TabsContent>
                <TabsContent value="emergency">
                  <p className="text-sm text-gray-500 mb-4">
                    Generate data representing critical values indicating a medical emergency. The AI should detect this situation.
                  </p>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-end">
                <Button onClick={generateMockData} disabled={isModelLoading}>
                  Generate Health Data
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {healthData && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Health Data Analysis</CardTitle>
                <CardDescription>
                  Current health metrics from smartwatch sensors
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderHealthDataVisualization()}
                
                <div className="flex justify-end">
                  <Button 
                    onClick={analyzeData} 
                    disabled={isModelLoading || isAnalyzing || !healthData}
                    className="bg-safety-600 hover:bg-safety-700"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze with AI"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {detectionResult && (
            <Card>
              <CardHeader>
                <CardTitle>AI Detection Results</CardTitle>
              </CardHeader>
              <CardContent>
                {renderDetectionResult()}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIEmergencyDetection;
