import client from './user.client';
import { User } from './user.model';

export default {
  me: async function () {
    const userDto = await client.me();
    return userDto ? new User(userDto) : null;
  },
};
