import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-basic',
  webDir: 'dist/angular-basic',
  bundledWebRuntime: false,
  linuxAndroidStudioPath:
    '/snap/android-studio/125/android-studio/bin/studio.sh',
};

export default config;
