import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const Password = () => {
  const [values,setValues] = useState({
    password: '',
    confirm: ''
  });

  const onPasswordChange = (event) => setValues({ ...values, password: event.target.value });
  const onConfirmChange = (event) => setValues({ ...values, confirm: event.target.value });

  const Login = (e) =>{
    alert("Login with new password")
  }

  return (
    <form >
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            type="password"
            value={values.password}
            onChange = {onPasswordChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            type="password"
            value={values.confirm}
            onChange = {onConfirmChange}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button component={RouterLink} to="/Login" onClick={Login} color="primary" variant="contained">
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Password.propTypes = {
  password: PropTypes.string,
  confirm: PropTypes.string,
};

Password.defaultProps = {
  password:'',
  confirm:''
}
export default Password;
