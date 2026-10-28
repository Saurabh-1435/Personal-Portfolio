import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FormSelectProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  placeholder?: string;
}

const FormSelect = ({ label, value, onValueChange, options, error, placeholder }: FormSelectProps) => (
  <div className="space-y-1.5">
    <Label className="text-gray-300">{label}</Label>
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
        <SelectValue placeholder={placeholder || 'Select...'} />
      </SelectTrigger>
      <SelectContent className="bg-gray-900 border-gray-700">
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} className="text-white">
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-red-400 text-xs">{error}</p>}
  </div>
);

export default FormSelect;
