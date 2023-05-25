import { FC } from 'react';
import { Button, Container } from '@mui/material';
import { Header } from '../components';

export const Home: FC = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Header
        title={'Hello :)'}
        description={'Hello, Welcome to home.'}
        element={
          <Button variant="contained" fullWidth>
            Click Me
          </Button>
        }
      />
    </Container>
  );
};
