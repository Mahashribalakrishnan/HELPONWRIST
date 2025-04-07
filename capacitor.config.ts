
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.5f84611656e745f89795f6b82ce6bba5',
  appName: 'safety-first-response-hub',
  webDir: 'dist',
  server: {
    url: "https://5f846116-56e7-45f8-9795-f6b82ce6bba5.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    // Add plugin configurations if needed
  }
};

export default config;
