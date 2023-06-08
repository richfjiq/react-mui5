import { FC } from 'react';
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
import { useFormik } from 'formik';

type LoginType = {
  username: string;
  password: string;
};

const Login: FC = () => {
  const { getSuccess } = useNotification();
  const {
    handleSubmit,
    handleChange,
    values: { username, password },
    errors,
    touched,
  } = useFormik<LoginType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidate,
    onSubmit: (values) => {
      getSuccess(JSON.stringify(values));
    },
  });

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
                value={username}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <TextField
                margin="normal"
                type="password"
                name="password"
                fullWidth
                label="Password"
                sx={{ mt: 2, mb: 1.5 }}
                value={password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
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

export default Login;
