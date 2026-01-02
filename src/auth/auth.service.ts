import type { LoginDto } from './auth.dto';
import client from './auth.client';
import { User } from '@/shared/user';
import { userService } from '@/shared/user';

export default {
  login: async function (data: LoginDto) {
    const userDto = await client.login(data);
    return userDto ? new User(userDto) : null;
  },
  me: userService.me,
};
