import { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';

type CardProps = {
  image: string;
  name: string;
  species: string;
  status: string;
};

export const CharacterCard: FC<CardProps> = ({
  image,
  name,
  species,
  status,
}) => {
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt="logo vite" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 2 }}>Specie: {species}</Typography>
        <Typography sx={{ mt: 2 }}>Status: {status}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
