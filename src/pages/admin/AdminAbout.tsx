import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AdminHeader from '@/components/admin/AdminHeader';
import LoadingSpinner from '@/components/admin/LoadingSpinner';
import FormInput from '@/components/admin/FormInput';
import FormTextarea from '@/components/admin/FormTextarea';
import { Button } from '@/components/ui/button';
import { adminApi, getErrorMessage } from '@/lib/api';
import { toast } from 'sonner';
import type { About } from '@/types/portfolio';

const AdminAbout = () => {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<About | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['admin-about'],
    queryFn: adminApi.getAbout,
  });

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const mutation = useMutation({
    mutationFn: adminApi.updateAbout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-about'] });
      toast.success('About section updated');
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError || !form) return <p className="text-red-400">Failed to load about section.</p>;

  return (
    <div>
      <AdminHeader title="About" subtitle="Edit your about section content" />

      <form
        onSubmit={(e) => { e.preventDefault(); mutation.mutate(form); }}
        className="max-w-2xl space-y-4"
      >
        <FormInput label="Heading" id="heading" value={form.heading} onChange={(e) => setForm({ ...form, heading: e.target.value })} />
        <FormTextarea label="About Me" id="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={5} />
        <FormTextarea label="What Drives Me" id="whatDrivesMe" value={form.whatDrivesMe || ''} onChange={(e) => setForm({ ...form, whatDrivesMe: e.target.value })} rows={5} />
        <FormInput label="Years of Experience" id="yearsOfExperience" type="number" min={0} value={form.yearsOfExperience} onChange={(e) => setForm({ ...form, yearsOfExperience: parseInt(e.target.value) || 0 })} />

        <div className="flex gap-3 pt-4">
          <Button type="submit" disabled={mutation.isPending} className="bg-red-500 hover:bg-red-600">
            {mutation.isPending ? 'Saving...' : 'Save Changes'}
          </Button>
          <Button type="button" variant="outline" className="border-gray-700" onClick={() => data && setForm(data)}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminAbout;
