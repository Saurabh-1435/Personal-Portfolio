import { getUser } from '@/lib/auth';

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
}

const AdminHeader = ({ title, subtitle }: AdminHeaderProps) => {
  const user = getUser();

  return (
    <header className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
        </div>
        {user && (
          <div className="text-sm text-gray-500">
            Signed in as <span className="text-gray-300">{user.name}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
