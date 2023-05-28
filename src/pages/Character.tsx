import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { characters } from '../api';
import { Character } from '../types';
import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

export const CharacterPage: FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    characters
      .getById({ id })
      .then((res) => {
        setCharacter(res.data);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const renderData = () => {
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
      <Grid sx={{ mt: 2 }} container columnSpacing={2}>
        <Grid item xs={6}>
          <Typography variant="h1">{character?.name}</Typography>
          <Divider />
          <Typography variant="h6">{character?.origin.name}</Typography>
          <Box sx={{ mt: 2 }}>
            <Chip
              color="primary"
              variant="outlined"
              label={character?.status}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src={character?.image}
            style={{ width: '100%', borderRadius: '0.5rem' }}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <Box>
      <Container>{renderData()}</Container>
    </Box>
  );
};
