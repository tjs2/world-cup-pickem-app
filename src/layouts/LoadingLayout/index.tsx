import { CircularProgress } from '@mui/material';

export default function LoadingLayout() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <CircularProgress size={100} />
    </div>
  );
}
