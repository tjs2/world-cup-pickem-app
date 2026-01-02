import type { UserDto } from './user.dto';

export default {
  me: async function (): Promise<UserDto | null> {
    const response = await fetch('api/users/me', {
      method: 'GET',
    });

    return response.ok ? response.json() : null;
  },
};
