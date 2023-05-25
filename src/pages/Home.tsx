import { FC } from 'react';
import { Button, Container } from '@mui/material';

export const Home: FC = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button variant="contained" fullWidth>
        Home page
      </Button>
    </Container>
  );
};
