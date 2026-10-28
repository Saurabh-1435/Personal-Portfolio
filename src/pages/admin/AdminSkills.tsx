import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import AdminHeader from '@/components/admin/AdminHeader';
import LoadingSpinner from '@/components/admin/LoadingSpinner';
import EmptyState from '@/components/admin/EmptyState';
import DataTable from '@/components/admin/DataTable';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import FormInput from '@/components/admin/FormInput';
import FormSelect from '@/components/admin/FormSelect';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { adminApi, getErrorMessage } from '@/lib/api';
import { SKILL_CATEGORIES, SKILL_ICON_OPTIONS } from '@/lib/skillIcons';
import { toast } from 'sonner';
import { Pencil, Trash2, Plus, Search } from 'lucide-react';
import type { Skill } from '@/types/portfolio';

const emptySkill: Skill = { name: '', category: 'Frontend', icon: 'FaReact', proficiency: 80, sortOrder: 0 };

const AdminSkills = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [form, setForm] = useState<Skill>(emptySkill);
  const [editingId, setEditingId] = useState<number | null>(null);

  const { data: skills = [], isLoading } = useQuery({
    queryKey: ['admin-skills'],
    queryFn: adminApi.getSkills,
  });

  const saveMutation = useMutation({
    mutationFn: (skill: Skill) =>
      editingId ? adminApi.updateSkill(editingId, skill) : adminApi.createSkill(skill),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-skills'] });
      toast.success(editingId ? 'Skill updated' : 'Skill created');
      setDialogOpen(false);
      setEditingId(null);
      setForm(emptySkill);
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });

  const deleteMutation = useMutation({
    mutationFn: adminApi.deleteSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-skills'] });
      toast.success('Skill deleted');
      setDeleteId(null);
    },
    onError: (err) => toast.error(getErrorMessage(err)),
  });

  const filtered = skills.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = categoryFilter === 'All' || s.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  const openCreate = () => {
    setEditingId(null);
    setForm({ ...emptySkill, sortOrder: skills.length + 1 });
    setDialogOpen(true);
  };

  const openEdit = (skill: Skill) => {
    setEditingId(skill.id!);
    setForm(skill);
    setDialogOpen(true);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <AdminHeader title="Skills" subtitle="Manage your technical skills" />

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm"
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          {SKILL_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <Button onClick={openCreate} className="bg-red-500 hover:bg-red-600">
          <Plus className="h-4 w-4 mr-2" /> Add Skill
        </Button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState title="No skills found" message="Add your first skill to get started." />
      ) : (
        <>
          <div className="hidden md:block">
            <DataTable
              columns={[
                { key: 'name', header: 'Name' },
                { key: 'category', header: 'Category' },
                { key: 'icon', header: 'Icon' },
                { key: 'proficiency', header: 'Proficiency', render: (s) => `${s.proficiency}%` },
                { key: 'sortOrder', header: 'Order' },
              ]}
              data={filtered}
              keyExtractor={(s) => s.id!}
              actions={(s) => (
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="ghost" onClick={() => openEdit(s)}><Pencil className="h-4 w-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-red-400" onClick={() => setDeleteId(s.id!)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              )}
            />
          </div>
          <div className="md:hidden space-y-3">
            {filtered.map((s) => (
              <div key={s.id} className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-medium">{s.name}</p>
                    <p className="text-gray-500 text-sm">{s.category} · {s.proficiency}%</p>
                  </div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" onClick={() => openEdit(s)}><Pencil className="h-4 w-4" /></Button>
                    <Button size="sm" variant="ghost" className="text-red-400" onClick={() => setDeleteId(s.id!)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? 'Edit Skill' : 'Add Skill'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); saveMutation.mutate(form); }} className="space-y-4">
            <FormInput label="Name" id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <FormSelect label="Category" value={form.category} onValueChange={(v) => setForm({ ...form, category: v })} options={SKILL_CATEGORIES.map((c) => ({ value: c, label: c }))} />
            <FormSelect label="Icon" value={form.icon} onValueChange={(v) => setForm({ ...form, icon: v })} options={SKILL_ICON_OPTIONS.map((i) => ({ value: i, label: i }))} />
            <FormInput label="Proficiency (%)" id="proficiency" type="number" min={0} max={100} value={form.proficiency} onChange={(e) => setForm({ ...form, proficiency: parseInt(e.target.value) || 0 })} />
            <FormInput label="Sort Order" id="sortOrder" type="number" value={form.sortOrder} onChange={(e) => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })} />
            <Button type="submit" disabled={saveMutation.isPending} className="w-full bg-red-500 hover:bg-red-600">
              {saveMutation.isPending ? 'Saving...' : 'Save'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={deleteId !== null}
        onOpenChange={(open) => !open && setDeleteId(null)}
        title="Delete Skill"
        description="Are you sure you want to delete this skill? This action cannot be undone."
        onConfirm={() => deleteId && deleteMutation.mutate(deleteId)}
        loading={deleteMutation.isPending}
      />
    </div>
  );
};

export default AdminSkills;
