import type { TeamDto } from './team.dto';

export default {
  getAllteams: async function (): Promise<TeamDto[]> {
    const response = await fetch('api/teams', {
      method: 'GET',
    });

    return response.json();
  },
};
