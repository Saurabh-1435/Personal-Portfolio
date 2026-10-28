import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = ({ label, error, id, className = '', ...props }: FormInputProps) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-gray-300">{label}</Label>
    <Input
      id={id}
      className={`bg-gray-900 border-gray-700 text-white ${className}`}
      {...props}
    />
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);

export default FormInput;
