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
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    characters
      .getById({ id })
      .then((res) => {
        setLoading(false);
        setCharacter(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  console.log(character);

  const renderData = () => {
    if (!loading) {
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

    const { image, name, origin, status } = character as Character;

    return (
      <Grid sx={{ mt: 2 }} container columnSpacing={2}>
        <Grid item xs={6}>
          <Typography variant="h1">{name}</Typography>
          <Divider />
          <Typography variant="h6">{origin.name}</Typography>
          <Box sx={{ mt: 2 }}>
            <Chip color="primary" variant="outlined" label={status} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={image} style={{ width: '100%', borderRadius: '0.5rem' }} />
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
