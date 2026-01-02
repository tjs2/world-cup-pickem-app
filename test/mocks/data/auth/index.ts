import type { UserDto } from '@/shared/user';
import { users } from '!/mocks/data/users';

export const userByToken: Readonly<{ [key: string]: UserDto }> = Object.freeze({
  'mock-bearer-token-user-1': users.USER[0],
  'mock-bearer-token-admin-1': users.ADMIN[0],
});

export const tokenByUserId: Readonly<{ [key: number]: string }> = Object.freeze(
  Object.fromEntries(
    Object.entries(userByToken).map(([token, user]) => [user.id, token]),
  ),
);

export const userByPassword: Readonly<{ [key: string]: UserDto }> =
  Object.freeze({
    '123456': users.USER[0],
    '456789': users.ADMIN[0],
  });
