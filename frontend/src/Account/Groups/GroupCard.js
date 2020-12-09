import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const GroupCard = ({groups}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="center" mb={3}>
          <Avatar
            alt="Groups"
            variant="square"
          />
        </Box>
          <Typography align="center" color="textPrimary" gutterBottom variant="h4">
            {groups.title}
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            {groups.description}
          </Typography>
      </CardContent>
      <Box display="flex" justifyContent="flex-end">
        <Button color="primary" variant="contained">
          Add Player
        </Button>
      </Box>
      <Box flexGrow={1} />
        <Divider />
          <Box p={2}>
            <Grid container justify="space-between" spacing={2}>
              <Grid className={classes.statsItem} item >
                <AccessTimeIcon className={classes.statsIcon} color="action"/>
                  <Typography color="textSecondary" display="inline" variant="body2">
                    Updated 2hr ago
                 </Typography>
              </Grid>
              <Grid className={classes.statsItem} item>
                <Typography color="textSecondary" display="inline" variant="body2">
                  {groups.GroupSize}
                  {' '}
                  Group size
                </Typography>
              </Grid>
            </Grid>
          </Box>
    </Card>
  );
};

GroupCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  GroupSize: PropTypes.string,
};

GroupCard.defaultProps = {
  description:'',
  GroupSize:'0'
}

export default GroupCard;
