import { useCallback, useEffect, useMemo, useState } from 'react';
import type { User } from '@/shared/user';
import { AuthContext } from './auth.context';
import type { LoginDto } from './auth.dto';
import service from './auth.service';

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const onCreate = async () => {
      const loggedUser = await service.me();
      setUser(loggedUser);
      setIsLoading(false);
    };

    onCreate();
  }, []);

  const isAuthenticated = useMemo(() => !!user, [user]);

  const login = useCallback(async (data: LoginDto): Promise<boolean> => {
    const loggedUser = await service.login(data);
    setUser(loggedUser);
    return !!loggedUser;
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
  }, []);

  const value = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
