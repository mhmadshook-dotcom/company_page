/**
 * Application constants
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
};

export const BREAKPOINTS = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
};

export const API_ENDPOINTS = {
  CONTACT: '/contact',
  SERVICES: '/services',
  ABOUT: '/about',
};

export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export default {
  ROUTES,
  BREAKPOINTS,
  API_ENDPOINTS,
  STATUS,
};
