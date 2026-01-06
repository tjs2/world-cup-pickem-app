import { AuthProvider } from '@/auth';
import { TeamProvider } from '@/team';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <TeamProvider>{children}</TeamProvider>
    </AuthProvider>
  );
}
