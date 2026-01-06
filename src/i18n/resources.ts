import { authLocalesPtBr } from '@/auth';
import { teamLocalesPtBr } from '@/team';

export const resources = {
  'pt-BR': {
    auth: authLocalesPtBr,
    shared: { wip: 'WIP' },
    team: teamLocalesPtBr,
  },
} as const;
