export type RoleDtoIdOptions = 1 | 2;
export type RoleDtoNameOptions = 'USER' | 'ADMIN';

export type RoleDTO = {
  id: RoleDtoIdOptions;
  name: RoleDtoNameOptions;
};

export const RoleDtoEnum: Readonly<{ [k in RoleDTO['name']]: RoleDTO }> =
  Object.freeze({
    USER: {
      id: 1,
      name: 'USER',
    },
    ADMIN: {
      id: 2,
      name: 'ADMIN',
    },
  });

export type UserDto = {
  id: number;
  name: string;
  email: string;
  roles: RoleDTO[];
};
