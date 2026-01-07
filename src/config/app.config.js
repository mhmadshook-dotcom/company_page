/**
 * Application configuration
 */

export const appConfig = {
  name: 'YourCompany',
  version: '1.0.0',
  apiUrl: import.meta.env.VITE_API_URL || 'https://api.example.com',
  isDevelopment: import.meta.env.MODE === 'development',
  isProduction: import.meta.env.MODE === 'production',
};

export default appConfig;
