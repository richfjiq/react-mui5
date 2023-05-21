import { FC } from 'react';
import { Button, Container } from '@mui/material';

export const Login: FC = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button variant="contained" fullWidth>
        Login Page
      </Button>
    </Container>
  );
};
