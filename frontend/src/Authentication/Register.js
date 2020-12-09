import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles'
import {blue} from '@material-ui/core/colors'
import {colors } from '@material-ui/core';


const theme = createMuiTheme({
    palette:{
      primary:{
        main: blue[800]
      },
      secondary: {
        main: colors.blue[50]
      },
      text: {
        primary: colors.blueGrey[900]
      }
    }
    }
  )

const Register = () => {
  
  return (
    <ThemeProvider theme = {theme}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
        padding = "4%"
      >
        <Container maxWidth="sm">
          <Box mb={3}>
            <Typography
              color="textPrimary"
              variant="h3"
              >
              Create new account
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Use your email to create new account
            </Typography>
          </Box>
            <TextField
              fullWidth
              label="First name"
              margin="normal"
              name="firstName"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Last name"
              margin="normal"
              name="lastName"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
            />
            <Box
              alignItems="center"
              display="flex"
              ml={-1}
            >
               <Checkbox name="policy"/>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  I have read the
                  {' '}
                  <Link>
                    Terms and Conditions
                  </Link>
                </Typography>
            </Box>
              <Box my={2}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up now
                </Button>
              </Box>
                <Typography color="textSecondary" variant="body1">
                  Have an account?
                  {' '}
                  <Link underline = 'none' component={RouterLink} to="/Login">
                    Sign in
                  </Link >
                </Typography>     
        </Container>
      </Box>
    </ThemeProvider>  
  );
};
export default Register;
