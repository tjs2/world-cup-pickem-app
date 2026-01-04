import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/auth';
import type { Role } from '@/shared/user';
import ROUTER_PATHS from '../paths';

type RoleGuardProps = {
  role: Role;
};

export default function RoleGuard({ role }: RoleGuardProps) {
  const { user } = useAuth();

  if (!user?.hasRole(role)) {
    return <Navigate to={ROUTER_PATHS.HOME} replace />;
  }

  return <Outlet />;
}
