import { FC } from 'react';
import { Button, Container } from '@mui/material';

import { useNotification } from '../context';

export const Home: FC = () => {
  const { getError } = useNotification();

  const handleClick = () => {
    getError('Hello world :)');
  };

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button onClick={handleClick} variant="contained" fullWidth>
        Home page
      </Button>
    </Container>
  );
};
