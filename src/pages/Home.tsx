import { FC, useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';

import { Header } from '../components';
import { characters } from '../api';
import { CharacterCard } from './';
import { Character } from '../types';

export const Home: FC = () => {
  const [data, setData] = useState<Character[]>([]);
  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log({ data });

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
      <Grid container spacing={2} direction="row">
        {data.map(({ image, name, species, status }) => (
          <Grid item xs={3}>
            <CharacterCard
              image={image}
              name={name}
              species={species}
              status={status}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
