import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState = ({
  title = 'No data found',
  message = 'There is nothing to display yet.',
}: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <Inbox className="h-12 w-12 text-gray-600 mb-4" />
    <h3 className="text-lg font-medium text-white">{title}</h3>
    <p className="text-gray-400 text-sm mt-1 max-w-sm">{message}</p>
  </div>
);

export default EmptyState;
