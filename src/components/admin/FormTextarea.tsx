import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = ({ label, error, id, className = '', ...props }: FormTextareaProps) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-gray-300">{label}</Label>
    <Textarea
      id={id}
      className={`bg-gray-900 border-gray-700 text-white min-h-[100px] ${className}`}
      {...props}
    />
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);

export default FormTextarea;
