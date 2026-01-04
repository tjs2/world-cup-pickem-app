import { ROLE_ADMIN } from '@/shared/user';
import RoleGuard from './RoleGuard';

export function AdminRoleGuard() {
  return <RoleGuard role={ROLE_ADMIN} />;
}
