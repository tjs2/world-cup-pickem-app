import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/auth';
import { LoadingLayout } from '@/layouts';
import ROUTER_PATHS from '../paths';

export default function AvoidAuthGuard() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingLayout />;
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTER_PATHS.HOME} replace />;
  }

  return <Outlet />;
}
