import { Outlet } from 'react-router-dom';

export default function EmptyLayout() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <Outlet />
    </div>
  );
}
