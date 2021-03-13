import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';



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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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

export default function Signup() {
  const classes = useStyles();



  return (
    <div>
      <Container component="main" maxWidth="xs" style={{ backgroundColor: '#F0F0F0', borderRadius: "15px"}}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            S'inscrire
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="prenom"
                  name="prenom"
                  variant="outlined"
                  required
                  fullWidth
                  id="prenom"
                  label="Prenom"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nom"
                  label="Nom"
                  name="nom"
                  autoComplete="nom"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Address Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="mote-de-passe"
                  label="Mote-de-passe"
                  type="mote-de-passe"
                  id="mote-de-passe"
                  autoComplete="mote-de-passe"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="telephone"
                  label="Telephone"
                  type="number"
                  id="telephone"
                  autoComplete="telephone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="date-de-naissance" 
                  type="date"
                  id="date-de-naissance"
                  autoComplete="date-de-naissance"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              S'inscrire
            </Button>
          </form>
        </div>
      </Container>
      <Container component="second" maxWidth="xs" style={{marginTop:'20px', height:"80px",  backgroundColor: '#F0F0F0',borderRadius: "15px"}}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={3}>
            <Link to='/components/Login' className={classes.link} >
                    Se connecter
            </Link>
          </Grid>   
        </Grid>   
      </Container>
    </div>
  );
}