import React from 'react';
import {
  Box,
  Container
} from '@material-ui/core';
import Notifications from './Notifications';
import Password from './Password';
import NavBar from '../NavBar';

const SettingsView = () => {
  return (
    <>
        <Container maxWidth="md">
          <NavBar/>
          <Notifications />
          <Box mt={3}>
            <Password />
          </Box>
        </Container>
    </>
  );
};

export default SettingsView;
