
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background particles effect */}
      <div className="absolute inset-0 particles-bg"></div>
      
      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Pulsing dots loader */}
        <div className="relative mb-8">
          <div className="flex space-x-2 justify-center">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>

        {/* Your name/brand */}
        <div className="mb-8">
          <h1 className="text-4xl font-orbitron font-bold text-white mb-2 animate-pulse">
            Saurabh Prakash <span className="text-red-500">Lakhan</span>
          </h1>
          <p className="text-gray-400 text-lg animate-fade-in">
            Loading...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 max-w-full mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full transition-all duration-300 ease-out animate-pulse"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span className="animate-fade-in">Initializing</span>
            <span className="animate-fade-in">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-ping" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-red-500/10 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
      </div>
    </div>
  );
};

export default Loader;
