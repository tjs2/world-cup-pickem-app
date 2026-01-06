import type { Team } from './team.model';

export type TeamContextType = {
  teams: Team[];
  isLoading: boolean;
};
