import React from 'react';

import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles'
import {blue} from '@material-ui/core/colors'
import {colors } from '@material-ui/core';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette:{
    primary:{
      main: blue[800]
    },
    secondary: {
      main: colors.blue[50]
    },
    text: {
      primary: colors.blueGrey[900],
  }
}})

const Login = () => {
  return (
    <>
    <ThemeProvider theme = {theme}> 
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        padding = '5%'
      >
        <Container maxWidth="sm">
          <Box mb={3}>
            <Typography
              color="textPrimary"
              variant="h3"
              align = 'center'
            >
              Sign in
            </Typography>
            </Box>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                >
                </Grid>
                </Grid>
                <Box
                  mt={3}
                  mb={1}
                >
                </Box>
                <TextField
                  fullWidth
                  helperText={'Enter Username'}
                  label="Username"
                  margin="normal"
                  name="Username"
                  type="Username"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  helperText={'Password must be 8 letter'}
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link underline = 'none' component={RouterLink} to="/Register">
                    Sign up
                  </Link>
                </Typography>
        </Container>
      </Box>
    </ThemeProvider>
    </>
  );
};

export default Login;
