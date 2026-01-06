import { authHandlers } from './auth';
import { usersHandlers } from './users';
import { teamsHandlers } from './teams';

export const handlers = [...authHandlers, ...usersHandlers, ...teamsHandlers];
