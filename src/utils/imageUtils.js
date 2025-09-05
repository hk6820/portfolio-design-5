// ==========================================
// IMAGE UTILITY FUNCTIONS
// ==========================================
// This file contains utility functions for image handling and optimization

/**
 * Validates image file before upload
 * @param {File} file - The image file to validate
 * @returns {Object} - Validation result with success boolean and message
 */
export const validateImageFile = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  
  if (!file) {
    return { success: false, message: 'No file selected' };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { 
      success: false, 
      message: 'Invalid file type. Please use JPG, PNG, or WebP format.' 
    };
  }
  
  if (file.size > maxSize) {
    return { 
      success: false, 
      message: 'File too large. Please use images smaller than 5MB.' 
    };
  }
  
  return { success: true, message: 'Valid image file' };
};

/**
 * Creates a preview URL for image files
 * @param {File} file - The image file
 * @returns {string} - Preview URL
 */
export const createImagePreview = (file) => {
  return URL.createObjectURL(file);
};

/**
 * Optimizes image dimensions for different use cases
 * @param {string} useCase - 'hero', 'about', 'gallery', 'blog'
 * @returns {Object} - Recommended dimensions
 */
export const getRecommendedDimensions = (useCase) => {
  const dimensions = {
    hero: {
      width: 1920,
      height: 1080,
      aspectRatio: '16:9',
      description: 'Hero background image - wide format recommended'
    },
    about: {
      width: 800,
      height: 1000,
      aspectRatio: '4:5',
      description: 'About section photo - portrait format recommended'
    },
    gallery: {
      width: 1200,
      height: 800,
      aspectRatio: '3:2',
      description: 'Portfolio gallery - landscape format recommended'
    },
    blog: {
      width: 800,
      height: 600,
      aspectRatio: '4:3',
      description: 'Blog post images - square-ish format recommended'
    }
  };
  
  return dimensions[useCase] || dimensions.gallery;
};

/**
 * Generates responsive image sizes for different screen sizes
 * @param {string} basePath - Base path to the image
 * @param {string} filename - Image filename
 * @returns {Object} - Responsive image sources
 */
export const generateResponsiveImage = (basePath, filename) => {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  const extension = filename.split('.').pop();
  
  return {
    mobile: `${basePath}/${nameWithoutExt}-mobile.${extension}`,
    tablet: `${basePath}/${nameWithoutExt}-tablet.${extension}`,
    desktop: `${basePath}/${nameWithoutExt}-desktop.${extension}`,
    original: `${basePath}/${filename}`
  };
};

/**
 * Image optimization guidelines for users
 */
export const IMAGE_GUIDELINES = {
  hero: {
    title: 'Hero Background Image',
    recommended: '1920x1080px (16:9 ratio)',
    formats: 'JPG, PNG, WebP',
    maxSize: '2MB',
    tips: [
      'Use high-quality, professional photos',
      'Ensure good contrast with text overlay',
      'Avoid busy backgrounds that distract from text',
      'Consider using a subtle overlay for text readability'
    ]
  },
  about: {
    title: 'About Section Photo',
    recommended: '800x1000px (4:5 ratio)',
    formats: 'JPG, PNG, WebP',
    maxSize: '1MB',
    tips: [
      'Use a professional headshot or portrait',
      'Ensure good lighting and clear visibility',
      'Avoid overly casual or blurry photos',
      'Square or portrait orientation works best'
    ]
  },
  gallery: {
    title: 'Portfolio Gallery Images',
    recommended: '1200x800px (3:2 ratio)',
    formats: 'JPG, PNG, WebP',
    maxSize: '2MB each',
    tips: [
      'Use your best work samples',
      'Maintain consistent quality across all images',
      'Consider the order of images for visual flow',
      'Add descriptive alt text for accessibility'
    ]
  },
  blog: {
    title: 'Blog Post Images',
    recommended: '800x600px (4:3 ratio)',
    formats: 'JPG, PNG, WebP',
    maxSize: '1MB each',
    tips: [
      'Use relevant, high-quality images',
      'Ensure images relate to your content',
      'Maintain consistent style across posts',
      'Optimize for web to ensure fast loading'
    ]
  }
};

/**
 * CSS classes for different image containers
 */
export const IMAGE_CONTAINER_CLASSES = {
  hero: 'hero-image-container',
  about: 'about-image-container',
  gallery: 'gallery-image-container',
  blog: 'blog-image-container'
};
