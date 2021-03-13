import React from 'react';
import './MainNav.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  btn :{
    marginLeft :'auto',
},
link:{
    textDecoration: 'none', 
},
appbar:{
  background :'#8ADEFF',
},


}));



export default function PatientNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleopenmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} >
      <Toolbar>
          <Link to='/'>              
              <img src="../img/Logo.png" height="40" width="40" alt="logo"/>
          </Link>
          <div className={classes.btn}>
            <Link to='/components/LoginDoc'className={classes.link}>
              <Button  >Médecin ?</Button>
            </Link>
            <Button  onClick={handleopenmenu}>Patient  </Button>          
            <Menu
              id="Patients-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              
            >
              <Link to='/components/Login'className={classes.link}> 
              <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
              <Link to='/components/Signup'className={classes.link}>
              <MenuItem onClick={handleClose}>Sign Up</MenuItem>
              </Link>
            </Menu> 
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}