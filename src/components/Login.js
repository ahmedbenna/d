import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#FFFFFF',
    backgroundColor :'#2196F3',
  },
  link:{
    textDecoration: 'none', 
    color: '#616161',
  }
}));



export default function SignIn() {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs" style={{ height:"360px", backgroundColor: '#F0F0F0',borderRadius: "15px"}}>
      <CssBaseline  />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" > 
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
            <FormControlLabel
            control={<Checkbox value="remember"  color="primary" />}
           label="remember me"
           />
           
         
            <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
            >
                Sign In
            </Button>
            
          <Grid container>
            <Grid item xs>
              <Link className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/components/Signup'className={classes.link}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
          
        </form>
      </div>
      
    </Container>
  );
}