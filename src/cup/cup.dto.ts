import type { TeamDto } from '@/team';

export type matchDtoCreation = {
  groupId: number;
  homeTeamId: number;
  awayTeamId: number;
  kickoff: string;
};

export type matchDto = {
  id: number;
  homeTeam: TeamDto;
  homeScore: number | null;
  awayScore: number | null;
  awayTeam: TeamDto;
} & Omit<matchDtoCreation, 'groupId' | 'homeTeamId' | 'awayTeamId'>;

export type GroupTeamAssociation = {
  groupId: number;
  teamId: number;
};

export type GroupDtoCreation = {
  name: string;
  cupId: number;
};

export type GroupDto = {
  id: number;
  teams: TeamDto[];
  matches: matchDto[];
} & Omit<GroupDtoCreation, 'cupId'>;

export type CupDtoCreation = {
  name: string;
  year: number;
  groupAmount: number;
  predictBeforeUntilMs: number | null;
  predictUntilDate: string | null;
  isAutomaticUserApprove: boolean;
};

export type CupDto = {
  id: number;
  groups: GroupDto[];
} & Omit<CupDtoCreation, 'groupAmount'>;
