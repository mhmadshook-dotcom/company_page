/**
 * Icon mapping for react-icons
 * Maps semantic icon names to react-icons components
 * Using Font Awesome for UI and Simple Icons for technologies
 */

import React from 'react';

// Import UI icons from Font Awesome
import {
  FaGlobe,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaPalette,
  FaShieldAlt,
  FaSync,
  FaBriefcase,
  FaShoppingCart,
  FaChartBar,
  FaGraduationCap,
  FaHeartbeat,
  FaRocket,
  FaBullseye,
  FaUsers,
  FaLightbulb,
  FaLock,
  FaGlobeAmericas,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBolt,
  FaCheckCircle,
  FaGem,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaTools,
  FaClock,
  FaUserTie,
  FaUserCircle,
  FaEye
} from 'react-icons/fa';

// Import technology icons from Simple Icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiDjango,
  SiGraphql,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiOpenai,
  SiTensorflow,
  SiPytorch
} from 'react-icons/si';

// Icon components with consistent sizing
export const ICONS = {
  // Services & Features
  web: FaGlobe,
  mobile: FaMobileAlt,
  cloud: FaCloud,
  ai: FaRobot,
  design: FaPalette,
  security: FaShieldAlt,
  api: FaSync,
  enterprise: FaBriefcase,
  ecommerce: FaShoppingCart,
  analytics: FaChartBar,
  education: FaGraduationCap,
  healthcare: FaHeartbeat,
  
  // Values & About
  innovation: FaRocket,
  excellence: FaBullseye,
  partnership: FaUsers,
  growth: FaLightbulb,
  integrity: FaLock,
  global: FaGlobeAmericas,
  vision: FaEye,
  mission: FaBullseye,
  
  // Contact & UI
  email: FaEnvelope,
  phone: FaPhone,
  location: FaMapMarkerAlt,
  fast: FaBolt,
  check: FaCheckCircle,
  premium: FaGem,
  time: FaClock,
  
  // Social Media
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  github: FaGithub,
  facebook: FaFacebook,
  
  // User/Avatar Icons
  FaUserTie: FaUserTie,
  FaUserCircle: FaUserCircle,
  
  // Tech Stack Categories
  frontend: FaDesktop,
  backend: FaServer,
  database: FaDatabase,
  tools: FaTools,
  
  // Technology Icons (Simple Icons)
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  vuejs: SiVuedotjs,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  python: SiPython,
  express: SiExpress,
  django: SiDjango,
  graphql: SiGraphql,
  reactnative: SiReact,
  flutter: SiFlutter,
  swift: SiSwift,
  kotlin: SiKotlin,
  aws: SiAmazon,
  azure: FaCloud,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  firebase: SiFirebase,
  openai: SiOpenai,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  langchain: FaRobot
};

// Default icon props for consistency
export const DEFAULT_ICON_PROPS = {
  size: 24,
  className: 'icon'
};

// Helper to render icon with default props
export const renderIcon = (iconName, props = {}) => {
  const IconComponent = ICONS[iconName];
  if (!IconComponent) return null;
  
  return React.createElement(IconComponent, { ...DEFAULT_ICON_PROPS, ...props });
};
