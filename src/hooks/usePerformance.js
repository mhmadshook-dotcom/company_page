import { useEffect, useRef } from 'react';

/**
 * Custom hook for Intersection Observer
 * Adds scroll reveal animations to elements
 * 
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - ref to attach to elements
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally unobserve after reveal
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          entry.target.classList.remove('revealed');
        }
      });
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return ref;
};

/**
 * Custom hook for lazy loading images
 * Improves performance by loading images only when needed
 * 
 * @returns {Function} - Function to attach to img elements
 */
export const useLazyImage = () => {
  useEffect(() => {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));

    return () => {
      images.forEach(img => imageObserver.unobserve(img));
    };
  }, []);
};

/**
 * Custom hook for preloading critical resources
 * Improves perceived performance
 * 
 * @param {Array} resources - Array of resource URLs to preload
 */
export const usePreload = (resources = []) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.type || 'fetch';
      link.href = resource.url;
      document.head.appendChild(link);
    });
  }, [resources]);
};
