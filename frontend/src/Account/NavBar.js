import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import GroupIcon from '@material-ui/icons/Group';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NavItem from './NavItem';

const user = {
  avatar: './user.png',
  jobTitle: 'Software Engineer',
  name: 'ABC',
};

const items = [
  {
    href: '/UserActivity',
    icon: TrackChangesIcon,
    title: 'Activity'
  },
  {
    href: '/Group',
    icon: GroupIcon,
    title: 'Groups'
  },
  {
    href: '/UpdateProfile',
    icon: AccountBoxIcon,
    title: 'Account'
  },
  {
    href: '/Setting',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/Login',
    icon: LockOpenIcon,
    title: 'Login'
  },
  {
    href: '/Register',
    icon: PersonAddIcon,
    title: 'Register'
  },

];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 'calc(100 - 90px)',
    top: 64,
    height: 'calc(100% - 64px)'
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  });

  const content = (
    <>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          p={2}
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
            component={RouterLink}
            to='/UpdateProfile'
          />
          <Typography
            className={classes.name}
            color="textPrimary"
            variant="h5"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.jobTitle}
          </Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <List>
            {items.map((item) => (
              <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </List>
          <Divider variant = 'fullWidth'/>
        </Box>
      </Box>
    </>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          open={openMobile}
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  className:PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
  user:PropTypes.shape({
    avatar: PropTypes.string,
    jobTitle: PropTypes.string,
    name: PropTypes.string,
  }),
  items: PropTypes.shape({
    href: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string
  }),
  DrawerProps:PropTypes.shape
  ({variant: PropTypes.string
  }) 
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: true,
    avatar: './',
    jobTitle: '',
    name: '',
    href: './',
    icon: undefined,
    title: '',
    variant: 'persistent'
};

export default NavBar;
