import React, { useState } from 'react';
import moment from 'moment';
import { Container } from '@material-ui/core';
import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import NavBar from '../NavBar';
import PropTypes from 'prop-types';

const data = [
  {
    ref: 'Soccer',
    username: { name: 'ABC'},
    status: 'ATeam'
  },
];//temp data for testing

const UserActivity = ({}) => {
  const [groups] = useState(data);

  return (
    <>
      <Container maxWidth="md" paddingTop="10px">
      <NavBar/>
        <Card > 
          <Divider/>
            <Box Width='200'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Recent Activity
                    </TableCell>
                    <TableCell>
                      Player
                    </TableCell>
                    <TableCell sortDirection="desc">
                      <Tooltip enterDelay={300} title="Sort">
                        <TableSortLabel active direction="desc">
                          Date
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      Group Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {groups.map((group) => (
                    <TableRow>
                      <TableCell>
                        {group.ref}
                      </TableCell>
                      <TableCell>
                        {group.username.name}
                      </TableCell>
                      <TableCell>
                        {moment(group.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        <Chip color="secondary" label={group.status} size="small"/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
              <Box display="flex" justifyContent="flex-end" p={2}>
              <Button color="primary" endIcon={<ArrowRightIcon />} size="small" variant="text">
                View all
              </Button>
            </Box>
        </Card>
      </Container>
    </>
  );
};


UserActivity.propTypes = {
  data: PropTypes.shape({
    ref: PropTypes.string,
    username: PropTypes.string,
    status: PropTypes.string,
    name: PropTypes.string,
  })
};

UserActivity.defaultProps = {
  ref: '',
  username: '',
  status: '',
  name: '',
}
export default UserActivity;
