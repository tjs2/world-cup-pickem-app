import client from './team.client';
import { Team } from './team.model';

export default {
  getAllTeams: async function () {
    const teams = await client.getAllteams();
    return teams.map((team) => new Team(team));
  },
};
