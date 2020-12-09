import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Drawer,
  Divider,
  Link,
  colors,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import {AccountCircle, Menu} from '@material-ui/icons'
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles'
import {green} from '@material-ui/core/colors'
import SearchIcon from '@material-ui/icons/Search';

const theme = createMuiTheme({
  palette:{
    primary:{
      main: green[500]
    },
    secondary: {
      main: colors.blue[50]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[200]
    },
  }
  }
)

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    color: 'white',
    fontWeight: 'bold',
  },
  style:{
    backgroundColor: 'SteelBlue'
  },
  text:{
    color: 'DodgerBlue',
    fontWeight: 'bold',
  }}));
const TopBar = () => {
  const classes = useStyles();
  const [open,setOpen] = useState(false)
  const [input,setInput] = useState("");
  const toolbarStyle = {
    minHeight: '65px',
  };
  const handleDrawer=()=>{
    setOpen(true)
  }

  const handle = e => {
    setInput(e.target.value);
  }


  return (
    <ThemeProvider theme = {theme}> 
    <div>
      <AppBar position='static' className={classes.style} >  
        <Toolbar style={toolbarStyle}>
          <IconButton onClick ={handleDrawer} color='inherit' edge='start' aria-label='Menu'>
            <Menu/>
          </IconButton>
          <Typography variant = 'h3' style={{flexGrow:1}}>
            <Link underline="none" className={classes.title} component = {RouterLink} to = "/">
              PLAYBUDDY
            </Link>  
          </Typography>
          <TextField
            medium
            placeholder='Search'
            variant='outlined'
            color ='secondary'
            onChange = {handle}
            value = {input}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                event.win1 = window.open("//" + "google.com/search?q=" + input, '_blank')
              }}}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Button onClick={(e) => { e.win1 = window.open("//" + "google.com/search?q=" + input, '_blank')}} >
                    <SvgIcon fontSize='large'>
                      <SearchIcon />
                    </SvgIcon>
                  </Button>
                </InputAdornment>
                )
              }}
            />
            &nbsp;
            &nbsp;
            <Button component={RouterLink} to="/Login" color='inherit' align ='right' variant = "contained">  
              LOGIN
            </Button>
            &nbsp; 
            &nbsp; 
            <Button  component={RouterLink} to="/Register" color='inherit' align = 'right' variant='contained'>
              REGISTER
             </Button>
            &nbsp;
            <IconButton component={RouterLink} to="/UserActivity" align = 'right'>
              <AccountCircle/> 
            </IconButton>
        </Toolbar>
      </AppBar>    
      <Drawer
       anchor ='left'
       open ={open}
       onClose ={() => setOpen(false)}
       >
        <div style={{height : '100%', width : '250px'}}>
          <MenuItem className = {classes.text} component={RouterLink} to="/Post">
            Post
          </MenuItem>
          <Divider/>
          <MenuItem className = {classes.text} component={RouterLink} to="/">
            Activity
          </MenuItem>
          <Divider/>
          <MenuItem className = {classes.text} component={RouterLink} to="/Create">
            Create Activity
          </MenuItem>
          <Divider/>
          <MenuItem className = {classes.text} component={RouterLink} to="/Group">  
            Group
          </MenuItem >
          <Divider/>
          <MenuItem className = {classes.text} >
            Chat
          </MenuItem>
          <Divider/>
          <MenuItem className = {classes.text} >
            About 
          </MenuItem>
          <Divider/>
        </div>
      </Drawer> 
    </div>
    &nbsp; 
  </ThemeProvider>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  minHeight: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  handleDrawer: PropTypes.func,
  setOpen:PropTypes.bool
};

TopBar.defaultProps = {
  text: '',
  title: 'undefined',
  minHeight: '65px',
  input: 'React',
  handleDrawer: () => {},
  setOpen:true
}
export default TopBar;