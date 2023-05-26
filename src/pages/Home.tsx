import { ChangeEvent, FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from '@mui/material';

import { Header } from '../components';
import { characters } from '../api';
import { CharacterCard } from './';
import { Character } from '../types';

export const Home: FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((res) => {
        setCount(res.data.info.pages);
        setData(res.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  console.log({ data });

  const renderCards = () => {
    if (loading) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
            flex: 1,
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    return (
      <>
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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginY: 4,
          }}
        >
          <Pagination
            variant="outlined"
            color="primary"
            size="large"
            count={count}
            page={page}
            onChange={handleChange}
          />
        </Box>
      </>
    );
  };

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
      {renderCards()}
    </Container>
  );
};
