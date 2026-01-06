import { useEffect, useState } from 'react';
import { TeamContext } from './team.context';
import type { Team } from './team.model';
import service from './team.service';

type TeamProviderProps = {
  children: React.ReactNode;
};

export function TeamProvider({ children }: TeamProviderProps) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const onCreate = async () => {
      const returnedTeams = await service.getAllTeams();
      setTeams(returnedTeams);
      setIsLoading(false);
    };

    onCreate();
  }, []);

  const value = {
    teams,
    isLoading,
  };

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}
