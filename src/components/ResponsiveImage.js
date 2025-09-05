import React, { useState } from 'react';

/**
 * ResponsiveImage Component
 * 
 * A responsive image component that handles different screen sizes
 * and provides loading states and error handling.
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - CSS class name
 * @param {string} props.containerClass - Container CSS class
 * @param {Object} props.style - Inline styles
 * @param {string} props.aspectRatio - CSS aspect ratio (e.g., '16/9', '4/3')
 * @param {boolean} props.lazy - Enable lazy loading
 * @param {Function} props.onLoad - Callback when image loads
 * @param {Function} props.onError - Callback when image fails to load
 */
const ResponsiveImage = ({
  src,
  alt = '',
  className = '',
  containerClass = '',
  style = {},
  aspectRatio = 'auto',
  lazy = true,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError();
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
    aspectRatio: aspectRatio !== 'auto' ? aspectRatio : undefined,
    ...style
  };

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    ...(aspectRatio !== 'auto' && { aspectRatio })
  };

  if (hasError) {
    return (
      <div 
        className={`responsive-image-error ${containerClass}`}
        style={containerStyle}
      >
        <div 
          className="error-placeholder"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            color: '#666',
            fontSize: '14px',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          <div>
            <div>📷</div>
            <div>Image not available</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`responsive-image-container ${containerClass}`}
      style={containerStyle}
    >
      {isLoading && (
        <div 
          className="image-loading"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            zIndex: 1
          }}
        >
          <div className="loading-spinner">
            <div 
              style={{
                width: '20px',
                height: '20px',
                border: '2px solid #ddd',
                borderTop: '2px solid #fdbb49',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}
            />
          </div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        className={`responsive-image ${className}`}
        style={imageStyle}
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .responsive-image {
          transition: opacity 0.3s ease;
        }
        
        .responsive-image-container:hover .responsive-image {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ResponsiveImage;
