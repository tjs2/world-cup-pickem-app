import { type Role, type UserDto, RoleDtoEnum } from '@/shared/user';

export const users: Readonly<{ [k in Role['name']]: UserDto[] }> =
  Object.freeze({
    USER: [
      {
        id: 1,
        email: 'user1@email.com',
        name: 'User 1',
        roles: [RoleDtoEnum.USER],
      },
    ],
    ADMIN: [
      {
        id: 11,
        email: 'admin1@email.com',
        name: 'Admin 1',
        roles: [RoleDtoEnum.USER, RoleDtoEnum.ADMIN],
      },
    ],
  });
