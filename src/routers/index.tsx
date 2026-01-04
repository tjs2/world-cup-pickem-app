import { Routes, Route } from 'react-router-dom';
import { AvoidAuthGuard, RequireAuthGuard } from './AuthGuards';
import { EmptyLayout, MainLayout } from '@/layouts';
import LoginPage from '@/auth/pages/LoginPage';
import ROUTER_PATHS from './paths';

export { ROUTER_PATHS };

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AvoidAuthGuard />}>
        <Route element={<EmptyLayout />}>
          <Route path={ROUTER_PATHS.LOGIN} element={<LoginPage />} />
        </Route>
      </Route>

      <Route element={<RequireAuthGuard />}>
        <Route path={ROUTER_PATHS.HOME} element={<MainLayout />} />
      </Route>
    </Routes>
  );
}
