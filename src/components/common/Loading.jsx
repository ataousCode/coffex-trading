import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading = ({
  size = 'md',
  variant = 'spinner',
  text = '',
  fullScreen = false,
  overlay = false,
  className = ''
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };
  
  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };
  
  const LoadingSpinner = () => (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <Loader2 className={`${sizes[size]} animate-spin text-blue-600`} />
        {text && (
          <p className={`${textSizes[size]} text-gray-600 font-medium`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
  
  const LoadingDots = () => (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      {text && (
        <p className={`ml-3 ${textSizes[size]} text-gray-600 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
  
  const LoadingPulse = () => (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <div className={`${sizes[size]} bg-blue-600 rounded-full animate-pulse`}></div>
        {text && (
          <p className={`${textSizes[size]} text-gray-600 font-medium`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
  
  const LoadingBars = () => (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-1">
          <div className="w-1 h-6 bg-blue-600 animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-1 h-6 bg-blue-600 animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-1 h-6 bg-blue-600 animate-pulse" style={{ animationDelay: '300ms' }}></div>
          <div className="w-1 h-6 bg-blue-600 animate-pulse" style={{ animationDelay: '450ms' }}></div>
        </div>
        {text && (
          <p className={`${textSizes[size]} text-gray-600 font-medium`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
  
  const renderLoading = () => {
    switch (variant) {
      case 'dots':
        return <LoadingDots />;
      case 'pulse':
        return <LoadingPulse />;
      case 'bars':
        return <LoadingBars />;
      default:
        return <LoadingSpinner />;
    }
  };
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {renderLoading()}
      </div>
    );
  }
  
  if (overlay) {
    return (
      <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
        {renderLoading()}
      </div>
    );
  }
  
  return renderLoading();
};

// Loading component variants for specific use cases
Loading.Spinner = (props) => <Loading variant="spinner" {...props} />;
Loading.Dots = (props) => <Loading variant="dots" {...props} />;
Loading.Pulse = (props) => <Loading variant="pulse" {...props} />;
Loading.Bars = (props) => <Loading variant="bars" {...props} />;

export default Loading;