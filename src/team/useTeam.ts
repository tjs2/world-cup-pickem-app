import { useContext } from 'react';
import { TeamContext } from './team.context';

export function useTeam() {
  const context = useContext(TeamContext);

  if (!context) {
    throw new Error('useTeam must be used within an TeamContext');
  }

  return context;
}
