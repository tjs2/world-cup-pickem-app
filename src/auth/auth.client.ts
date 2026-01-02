import type { UserDto } from '@/shared/user';
import type { LoginDto } from './auth.dto';

export default {
  login: async function ({
    email,
    password,
  }: LoginDto): Promise<UserDto | null> {
    const response = await fetch('api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return response.ok ? response.json() : null;
  },
};
