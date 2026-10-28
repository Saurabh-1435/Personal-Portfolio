import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  className?: string;
}

const LoadingSpinner = ({ message = 'Loading...', className = '' }: LoadingSpinnerProps) => (
  <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
    <Loader2 className="h-8 w-8 animate-spin text-red-500" />
    <p className="mt-3 text-gray-400 text-sm">{message}</p>
  </div>
);

export default LoadingSpinner;
