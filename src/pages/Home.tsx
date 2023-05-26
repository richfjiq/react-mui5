import { FC, useEffect } from 'react';
import { Button, Container } from '@mui/material';

import { Header } from '../components';
import { characters } from '../api';

export const Home: FC = () => {
  useEffect(() => {
    characters
      .getById({ id: 1 })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
