import { http, HttpResponse, type PathParams } from 'msw';
import type { LoginDto } from '@/auth';
import type { UserDto } from '@/shared/user';
import { userByPassword, tokenByUserId } from '!/mocks/data/auth';

export const authHandlers = [
  http.post<PathParams, LoginDto, UserDto>(
    '/api/login',
    async ({ request }) => {
      const { email, password } = await request.json();

      const user = userByPassword[password];
      if (email === user?.email && tokenByUserId[user?.id]) {
        return HttpResponse.json(user, {
          headers: {
            'Set-Cookie': `token=${tokenByUserId[user.id]}; Path=/api; SameSite=Strict; HttpOnly; Secure`,
          },
        });
      }

      return new HttpResponse(null, {
        status: 401,
      });
    },
  ),
];
