export interface AppSettings {
  apiBaseUrl: string;
  // add more settings here as needed, e.g. feature flags, version, etc.
}

export const defaultAppSettings: AppSettings = {
  apiBaseUrl: 'http://localhost:5000/api', // your dev API URL here
};
// You can also use environment variables or a config file to set this dynamically