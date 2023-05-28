import { FC } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { HorizontalCardComponent } from '../components';
import { useCart } from '../store';

interface CartComponentProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

export const Cart: FC<CartComponentProps> = ({
  open,
  handleStateViewDrawer,
}) => {
  const { cart } = useCart();
  cart;
  return (
    <Drawer anchor={'right'} open={open}>
      <Box sx={{ width: '25em', p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Cart</Typography>
          <IconButton color="primary" onClick={() => handleStateViewDrawer()}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        {cart.length > 0
          ? cart.map(({ id, image, name, info }) => (
              <HorizontalCardComponent
                key={id}
                id={id}
                image={image}
                name={name}
                info={info}
              />
            ))
          : 'Nothing to show.'}
      </Box>
    </Drawer>
  );
};
