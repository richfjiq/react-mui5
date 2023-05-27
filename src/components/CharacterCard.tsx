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
import { useNavigate } from 'react-router-dom';

type CardProps = {
  image: string;
  name: string;
  species: string;
  status: string;
  id: string;
};

export const CharacterCard: FC<CardProps> = ({
  image,
  name,
  species,
  status,
  id,
}) => {
  const navigate = useNavigate();

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
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/character/${id}`)}
        >
          Learn More
        </Button>
        <Button fullWidth variant="outlined" size="small">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
