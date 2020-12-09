import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

const user = {
  avatar: './user.png',
  city: 'CHICO',
  country: 'USA',
  jobTitle: 'Software Engineer',
  name: 'ABC',
  timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
          {`${user.city} ${user.country}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    jobTitle: PropTypes.string,
    name: PropTypes.string,
    timezone: PropTypes.string
  })
};

Profile.defaultProps = {
    avatar: '',
    city: 'Chico',
    country: 'USA',
    jobTitle: '',
    name: '',
    timezone: 'GMT-7'
}
export default Profile;
