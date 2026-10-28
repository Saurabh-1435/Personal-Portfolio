import { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AdminHeader from '@/components/admin/AdminHeader';
import LoadingSpinner from '@/components/admin/LoadingSpinner';
import FormInput from '@/components/admin/FormInput';
import FormTextarea from '@/components/admin/FormTextarea';
import { Button } from '@/components/ui/button';
import { adminApi, getErrorMessage } from '@/lib/api';
import { toast } from 'sonner';
import type { Profile } from '@/types/portfolio';

const AdminProfile = () => {
  const queryClient = useQueryClient();
  const [form, setForm] = useState<Profile | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['admin-profile'],
    queryFn: adminApi.getProfile,
  });

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const mutation = useMutation({
    mutationFn: adminApi.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-profile'] });
      toast.success('Profile updated successfully');
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });

  const handleChange = (field: keyof Profile, value: string) => {
    if (!form) return;
    setForm({ ...form, [field]: value });
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError || !form) return <p className="text-red-400">Failed to load profile.</p>;

  return (
    <div>
      <AdminHeader title="Profile" subtitle="Manage your personal information" />

      <form
        onSubmit={(e) => { e.preventDefault(); mutation.mutate(form); }}
        className="max-w-2xl space-y-4"
      >
        <FormInput label="Full Name" id="fullName" value={form.fullName} onChange={(e) => handleChange('fullName', e.target.value)} required />
        <FormInput label="Professional Title" id="professionalTitle" value={form.professionalTitle} onChange={(e) => handleChange('professionalTitle', e.target.value)} />
        <FormTextarea label="Tagline" id="tagline" value={form.tagline} onChange={(e) => handleChange('tagline', e.target.value)} />
        <FormInput label="Profile Image URL" id="profileImageUrl" value={form.profileImageUrl} onChange={(e) => handleChange('profileImageUrl', e.target.value)} />
        <FormInput label="Resume URL" id="resumeUrl" value={form.resumeUrl} onChange={(e) => handleChange('resumeUrl', e.target.value)} />
        <FormInput label="Email" id="email" type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
        <FormInput label="Phone" id="phone" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
        <FormInput label="Location" id="location" value={form.location} onChange={(e) => handleChange('location', e.target.value)} />
        <FormInput label="GitHub URL" id="githubUrl" value={form.githubUrl} onChange={(e) => handleChange('githubUrl', e.target.value)} />
        <FormInput label="LinkedIn URL" id="linkedinUrl" value={form.linkedinUrl} onChange={(e) => handleChange('linkedinUrl', e.target.value)} />
        <FormInput label="Instagram URL" id="instagramUrl" value={form.instagramUrl} onChange={(e) => handleChange('instagramUrl', e.target.value)} />
        <FormInput label="Website URL" id="websiteUrl" value={form.websiteUrl} onChange={(e) => handleChange('websiteUrl', e.target.value)} />

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

export default AdminProfile;
