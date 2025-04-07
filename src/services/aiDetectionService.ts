
// Types for health data input
export interface HealthData {
  heartRate: number;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  oxygenSaturation: number;
  temperature: number;
  movement: 'normal' | 'fallen' | 'erratic' | 'stationary';
}

// Types for detection result
export interface DetectionResult {
  isEmergency: boolean;
  confidence: number;
  emergencyType: string | null;
  recommendation: string;
}

// Class for AI emergency detection
export class EmergencyDetectionService {
  private isModelReady = false;

  // For demo purposes, we'll use a rule-based approach instead of an actual ML model
  // This avoids issues with loading an external model and provides immediate results
  async initModel() {
    // Simulate model loading with a timeout
    return new Promise<void>((resolve) => {
      console.log('Loading emergency detection model...');
      // Simulate a delay to mimic model loading
      setTimeout(() => {
        this.isModelReady = true;
        console.log('Emergency detection model loaded successfully!');
        resolve();
      }, 1000);
    });
  }

  // Check if the model is ready
  isReady(): boolean {
    return this.isModelReady;
  }

  // Analyze health data to detect emergencies
  async detectEmergency(data: HealthData): Promise<DetectionResult> {
    if (!this.isModelReady) {
      // Auto-initialize if not ready
      await this.initModel();
    }
    
    try {
      // Use rule-based logic for demo purposes
      const emergencyScore = this.calculateEmergencyScore(data);
      const isEmergency = emergencyScore > 0.7;
      
      // Determine emergency type based on the health data
      let emergencyType = null;
      let recommendation = 'No action needed.';
      
      if (isEmergency) {
        emergencyType = this.determineEmergencyType(data);
        recommendation = this.getRecommendation(emergencyType);
      }
      
      return {
        isEmergency,
        confidence: emergencyScore,
        emergencyType,
        recommendation
      };
    } catch (error) {
      console.error('Error detecting emergency:', error);
      return {
        isEmergency: false,
        confidence: 0,
        emergencyType: null,
        recommendation: 'Error analyzing data. Please try again.'
      };
    }
  }

  // Calculate an emergency score based on the health data
  private calculateEmergencyScore(data: HealthData): number {
    let score = 0;
    
    // Heart rate analysis
    if (data.heartRate > 140 || data.heartRate < 40) {
      score += 0.3;
    } else if (data.heartRate > 120 || data.heartRate < 50) {
      score += 0.2;
    }
    
    // Blood pressure analysis
    if (data.bloodPressureSystolic > 180 || data.bloodPressureSystolic < 90) {
      score += 0.2;
    }
    
    // Oxygen saturation analysis
    if (data.oxygenSaturation < 85) {
      score += 0.25;
    } else if (data.oxygenSaturation < 90) {
      score += 0.15;
    }
    
    // Temperature analysis
    if (data.temperature > 40 || data.temperature < 35) {
      score += 0.15;
    } else if (data.temperature > 39 || data.temperature < 36) {
      score += 0.1;
    }
    
    // Movement analysis
    if (data.movement === 'fallen') {
      score += 0.25;
    } else if (data.movement === 'stationary') {
      score += 0.15;
    } else if (data.movement === 'erratic') {
      score += 0.1;
    }
    
    // Cap the score at 1.0
    return Math.min(score, 1.0);
  }

  // Determine the type of emergency based on the health data
  private determineEmergencyType(data: HealthData): string {
    if (data.heartRate > 140 || data.heartRate < 40) {
      return 'Cardiac Emergency';
    } else if (data.oxygenSaturation < 85) {
      return 'Respiratory Distress';
    } else if (data.movement === 'fallen') {
      return 'Fall Detected';
    } else if (data.temperature > 40) {
      return 'High Fever';
    } else {
      return 'Unspecified Emergency';
    }
  }

  // Get a recommendation based on the emergency type
  private getRecommendation(emergencyType: string | null): string {
    switch (emergencyType) {
      case 'Cardiac Emergency':
        return 'Contacting emergency services. Sit or lie down, loosen tight clothing.';
      case 'Respiratory Distress':
        return 'Emergency services notified. Try to stay calm and take slow breaths.';
      case 'Fall Detected':
        return 'Fall detected. Emergency contacts being notified. Stay still if injured.';
      case 'High Fever':
        return 'Medical attention needed for high fever. Contacting your doctor.';
      default:
        return 'Emergency detected. Contacting emergency services.';
    }
  }

  // For demo: Generate realistic mock health data
  generateMockHealthData(condition: 'normal' | 'emergency' | 'warning' = 'normal'): HealthData {
    switch (condition) {
      case 'emergency':
        return {
          heartRate: Math.floor(Math.random() * 50) + 130, // 130-180
          bloodPressureSystolic: Math.floor(Math.random() * 40) + 160, // 160-200
          bloodPressureDiastolic: Math.floor(Math.random() * 30) + 100, // 100-130
          oxygenSaturation: Math.floor(Math.random() * 10) + 75, // 75-85
          temperature: Math.floor(Math.random() * 20 + 390) / 10, // 39.0-41.0
          movement: Math.random() < 0.7 ? 'fallen' : 'stationary'
        };
      case 'warning':
        return {
          heartRate: Math.floor(Math.random() * 30) + 100, // 100-130
          bloodPressureSystolic: Math.floor(Math.random() * 30) + 140, // 140-170
          bloodPressureDiastolic: Math.floor(Math.random() * 20) + 90, // 90-110
          oxygenSaturation: Math.floor(Math.random() * 8) + 85, // 85-93
          temperature: Math.floor(Math.random() * 15 + 375) / 10, // 37.5-39.0
          movement: Math.random() < 0.5 ? 'erratic' : 'normal'
        };
      default: // normal
        return {
          heartRate: Math.floor(Math.random() * 40) + 60, // 60-100
          bloodPressureSystolic: Math.floor(Math.random() * 30) + 110, // 110-140
          bloodPressureDiastolic: Math.floor(Math.random() * 20) + 70, // 70-90
          oxygenSaturation: Math.floor(Math.random() * 7) + 93, // 93-100
          temperature: Math.floor(Math.random() * 20 + 360) / 10, // 36.0-38.0
          movement: 'normal'
        };
    }
  }
}

// Create a singleton instance
export const emergencyDetectionService = new EmergencyDetectionService();
