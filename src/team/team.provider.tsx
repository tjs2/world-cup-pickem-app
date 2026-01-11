import { useEffect, useState } from 'react';
import { TeamContext } from './team.context';
import type { Team } from './team.model';
import service from './team.service';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/auth';

type TeamProviderProps = {
  children: React.ReactNode;
};

export function TeamProvider({ children }: TeamProviderProps) {
  const { user } = useAuth();
  const { t } = useTranslation('team');
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!user) return;

    async function loadTeams() {
      const returnedTeams = await service.getAllTeams();
      returnedTeams.forEach(
        (team) => (team.name = t(`teams.${team.key}.name`)),
      );
      returnedTeams.sort((t1, t2) => t1.name.localeCompare(t2.name));
      setTeams(returnedTeams);
      setIsLoading(false);
    }

    loadTeams();
  }, [user]);

  const value = {
    teams,
    isLoading,
  };

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}
