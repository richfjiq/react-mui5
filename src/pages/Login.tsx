import { ChangeEvent, FC, FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useNotification } from '../context';
import { loginValidate } from '../utils';

type LoginType = {
  username: string;
  password: string;
};

export const Login: FC = () => {
  const { getError, getSuccess } = useNotification();
  const [loginData, setLoginData] = useState<LoginType>({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
    loginValidate
      .validate(loginData)
      .then(() => {
        getSuccess(JSON.stringify(loginData));
      })
      .catch((error) => {
        getError(error.message);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '100vh',
        }}
      >
        <Grid item>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Log In
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                type="text"
                name="username"
                fullWidth
                label="Username"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                type="password"
                name="password"
                fullWidth
                label="Password"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
                fullWidth
              >
                Log In
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
