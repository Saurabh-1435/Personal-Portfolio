import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import AdminHeader from '@/components/admin/AdminHeader';
import LoadingSpinner from '@/components/admin/LoadingSpinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { adminApi, publicApi } from '@/lib/api';
import { FolderKanban, Code2, Award, Briefcase, Plus, ExternalLink } from 'lucide-react';

const AdminDashboard = () => {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: adminApi.getDashboardStats,
  });

  const { data: projects } = useQuery({
    queryKey: ['admin-projects-preview'],
    queryFn: publicApi.getProjects,
  });

  if (statsLoading) return <LoadingSpinner message="Loading dashboard..." />;

  const statCards = [
    { label: 'Total Projects', value: stats?.totalProjects ?? 0, icon: FolderKanban, color: 'text-red-400' },
    { label: 'Total Skills', value: stats?.totalSkills ?? 0, icon: Code2, color: 'text-blue-400' },
    { label: 'Total Certificates', value: stats?.totalCertificates ?? 0, icon: Award, color: 'text-yellow-400' },
    { label: 'Experience Entries', value: stats?.totalExperiences ?? 0, icon: Briefcase, color: 'text-green-400' },
  ];

  const recentProjects = projects?.slice(0, 4) ?? [];

  return (
    <div>
      <AdminHeader title="Dashboard" subtitle="Overview of your portfolio content" />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{label}</p>
                  <p className="text-3xl font-bold text-white mt-1">{value}</p>
                </div>
                <Icon className={`h-8 w-8 ${color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white text-lg">Recent Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentProjects.length === 0 ? (
              <p className="text-gray-500 text-sm">No projects yet.</p>
            ) : (
              recentProjects.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                  <div>
                    <p className="text-white font-medium text-sm">{p.title}</p>
                    <p className="text-gray-500 text-xs">{p.category}</p>
                  </div>
                  {p.featured && (
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">Featured</span>
                  )}
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3">
            {[
              { to: '/admin/projects', label: 'Add Project', icon: Plus },
              { to: '/admin/skills', label: 'Manage Skills', icon: Code2 },
              { to: '/admin/profile', label: 'Edit Profile', icon: Briefcase },
              { to: '/', label: 'View Portfolio', icon: ExternalLink, external: true },
            ].map(({ to, label, icon: Icon, external }) => (
              external ? (
                <a key={to} href={to} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Icon className="h-4 w-4 mr-2" /> {label}
                  </Button>
                </a>
              ) : (
                <Link key={to} to={to}>
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Icon className="h-4 w-4 mr-2" /> {label}
                  </Button>
                </Link>
              )
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
