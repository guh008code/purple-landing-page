
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c19078a66d6e48ae83b3c441f5c9567c',
  appName: 'purple-cosmos-launchpad',
  webDir: 'dist',
  server: {
    url: 'https://c19078a6-6d6e-48ae-83b3-c441f5c9567c.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    scheme: 'OPurple'
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystorePassword: null,
      keystoreAlias: null,
      keystoreAliasPassword: null,
      releaseType: null
    }
  }
};

export default config;
