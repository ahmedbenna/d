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
    <div>
      <Container component="main" maxWidth="xs" style={{ height:"350px", backgroundColor: '#F0F0F0',borderRadius: "15px"}}>
        <CssBaseline  />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" > 
            Se connecter
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Address Email"
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
              label="Mote de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
        
          
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
              >
                  Se connecter
              </Button>
              <Link className={classes.link}>
                mote de passe oublié?
              </Link>
          </form>
        </div>
      </Container>
      <Container component="second" maxWidth="xs" style={{ marginTop:'20px', height:"80px", justifyContent:'center', alignContent:'center', backgroundColor: '#F0F0F0',borderRadius: "15px"}}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={3}>
          <Link to='/components/Signup'className={classes.link}>
                S'inscrire
            </Link>
          </Grid>   
        </Grid>   
      </Container>  
    </div>
  );
}