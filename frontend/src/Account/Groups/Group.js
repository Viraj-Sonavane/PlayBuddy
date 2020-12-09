import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Toolbar from './Toolbar';
import GroupCard from './GroupCard';
import NavBar from '../NavBar';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  groupcard: {
    height: '100%'
  }
}));

const data = [
    {
      title: 'SoccerTeam',
      GroupSize: '15'
    },
     
    {
      title: 'PaintballSquad',
      GroupSize: '20'
    }
];//This is test data 

const GroupList = () => {
  const classes = useStyles();
  const [groups] = useState(data);

  return (
    <>
        <Container maxWidth='md'>
        <NavBar/>
          <Toolbar />
          <Box mt={3}>
            <Grid
              container
              spacing={3}
            >
              {groups.map((group) => (
                <Grid
                  item
                  lg={6}
                  md={6}
                  xs={12}
                >
                  <GroupCard
                    className={classes.groupcard}
                    groups={group}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
    </>
  );
};

GroupList.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  title: PropTypes.string,
  GroupSize: PropTypes.string,
};

GroupList.defaultProps = {
  height: '100px',
  minHeight: '100px',
  title:'',
  GroupSize:'0'
}
export default GroupList;
