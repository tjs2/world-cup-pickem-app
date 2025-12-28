import { http, HttpResponse, type DefaultBodyType, type PathParams } from 'msw';
import type { UserDto } from '@/shared/user';
import { userByToken } from '!/mocks/data/auth';

export const usersHandlers = [
  http.get<PathParams, DefaultBodyType, UserDto>(
    '/api/users/me',
    async ({ cookies }) => {
      if (userByToken[cookies.token]) {
        return HttpResponse.json(userByToken[cookies.token]);
      }

      return new HttpResponse(null, {
        status: 401,
      });
    },
  ),
];
