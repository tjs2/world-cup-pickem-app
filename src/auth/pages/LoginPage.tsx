import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  Stack,
} from '@mui/material';
import { useAuth } from '../useAuth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTER_PATHS } from '@/routers';

export default function Login() {
  const { login } = useAuth();
  const { t } = useTranslation('auth');
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsFailed(false);
    setIsLoading(true);

    const success = await login({ email, password });

    if (success) {
      navigate(ROUTER_PATHS.HOME);
      return;
    }

    setIsFailed(true);
    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            {t('login.title')}
          </Typography>

          {isFailed && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {t('login.fail')}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              label={t('login.email')}
              type="email"
              fullWidth
              margin="normal"
              required
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label={t('login.password')}
              type="password"
              fullWidth
              margin="normal"
              required
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={isLoading}
              sx={{ mt: 3, height: 48 }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                t('login.submit')
              )}
            </Button>
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {t('login.noAccount')}
            </Typography>

            <Button
              variant="text"
              disabled={isLoading}
              onClick={() => navigate(ROUTER_PATHS.REGISTER)}
            >
              {t('login.register')}
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
