import { FC } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

export const NavBar: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Company</Typography>
              </Grid>
              <Grid item>
                <Stack spacing={2} direction="row">
                  <IconButton
                    color="primary"
                    // onClick={() => handleStateViewDrawer()}
                  >
                    <Badge color="error">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <Button variant="contained" onClick={() => navigate('login')}>
                    Login
                  </Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
