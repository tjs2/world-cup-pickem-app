import type { User } from '@/shared/user';
import type { LoginDto } from './auth.dto';

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: LoginDto) => Promise<boolean>;
  logout: () => Promise<void>;
};
