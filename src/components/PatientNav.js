import React from 'react';
import './MainNav.css'


import { makeStyles } from '@material-ui/core/styles';

import {Menu, MenuItem, Button, Toolbar, AppBar, CssBaseline} from '@material-ui/core/';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';


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



export default function PatientNav(props) {
  const classes = useStyles();
  const { nom, prenom} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleopenmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handledeconnecter = () => {
    setAnchorEl(null);
    window.location.reload(false)
    localStorage.removeItem('patientInfo')
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="static" className={classes.appbar} >
      <Toolbar>
          <Link to='/'>              
              <img src="../img/Logo.png" height="40" width="40" alt="logo"/>
          </Link>
          <div  className={classes.btn}>
            <Link to='/components/Famille'className={classes.link}> 
              <Button>Famille</Button>
            </Link>
            <Button onClick={handleopenmenu} ><AccountCircleIcon />{props.nom} {props.prenom}</Button> 
            <Menu
              id="Patients-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to='/components/PatientProfile'className={classes.link}> 
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              
              <MenuItem onClick={handledeconnecter}>Se deconnecter</MenuItem>
              
            </Menu> 

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}