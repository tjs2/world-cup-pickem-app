import { http, HttpResponse, type DefaultBodyType, type PathParams } from 'msw';
import type { TeamDto } from '@/shared/team';
import { teams } from '!/mocks/data/teams';
import { userByToken } from '!/mocks/data/auth';

export const teamsHandlers = [
  http.get<PathParams, DefaultBodyType, TeamDto>(
    '/api/teams',
    async ({ cookies }) => {
      if (userByToken[cookies.token]) {
        return HttpResponse.json(teams);
      }

      return new HttpResponse(null, {
        status: 401,
      });
    },
  ),
];
