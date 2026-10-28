import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => (
  <div className="min-h-screen bg-black text-white flex">
    <AdminSidebar />
    <main className="flex-1 p-6 lg:p-8 pt-16 lg:pt-8 overflow-auto max-h-screen">
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
