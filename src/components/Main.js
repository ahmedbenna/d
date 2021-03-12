import React from 'react'
import './Main.css'
import { makeStyles } from '@material-ui/core/styles';
import {Search} from '@material-ui/icons';

import { Typography, Grid, Button, TextField, Paper  }  from '@material-ui/core/';
import { Link } from 'react-router-dom'
import MainCard from './MainCard';






const useStyles = makeStyles((theme) => ({
    searchdiv :{
        
        backgroundImage:" url(../img/main-doc-search.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'noRepeat',   
        height :'800px',
    },
    searchinput:{
        alignContent:'center',
    },
    form:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textsearch:{
        display: 'flex',
        justifyContent: 'start',
        color: 'rgb(0 35 75)', 
        font:'roboto', 
        fontWeight:'700',
        marginLeft:'50px',

    },
    text2search:{
        display: 'flex',
        justifyContent: 'start',
        color: 'rgb(0 35 75)', 
        font:'roboto', 
        fontWeight:'500',
        marginTop:'10px',
        marginLeft:'50px',
        

    },
    gridcenter:{
        display:'flex',
        justifyContent: 'center',
        marginTop: '40px',
        
    },
    search: {
        
    },
    searchbutton: {
        height: '56px',
        width: '56px',
        backgroundColor :'#8ADEFF',
    },
    searchfield:{
        backgroundColor: '#FFFFFF',
       
        justifyContent: 'center',
        width: 'calc(400px - 5px)',
        
    },
    searchtext:{
        marginTop: '120px',

        
    },
    text3:{
        color :'#1a237e',
        justifyContent: 'center',
    },
    paper:{
        
        display:'flex',
        justifyContent: 'center',
        marginTop: '40px',

        
    }

}));

function Main() {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.form}>
                <div className={classes.searchdiv}> 
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <div className={classes.searchtext}>
                                <Typography variant="h2" className={classes.textsearch}>
                                    Chercher un médecin local par:
                                </Typography>
                                <Typography variant="h5" className={classes.text2search}>
                                    nom, address, spécialté ou disponibilité
                                </Typography>
                            </div>
                        </Grid>                       
                        <Grid item xs={12} className={classes.gridcenter}>
                            <div className={classes.search}>
                            
                                <TextField  id="search" label="Recherche" variant="filled" className={classes.searchfield} /> 
                                <Link to='/components/DoctorResult'>                         
                                    <Button variant="contained" className={classes.searchbutton} ><Search fontSize="large"/></Button>
                                </Link>
                            </div>
                        </Grid>
                    </Grid> 
                </div> 
            </form>
            <div >
                <Grid container item  xs={12} spacing={3}>
                    <Grid item xs={12} spacing={3} className={classes.gridcenter}>
                        <Typography variant="h5" className={classes.text3}>
                            Pourquoi prendre rendez-vous online ?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.paper} >
                        <MainCard 
                            imgURL=""
                            name="24/7" 
                            discription="texte"
                        />                                  
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.paper} >
                        <MainCard 
                            imgURL=""
                            name="Gratuit" 
                            discription=" texte"
                        /> 
                    </Grid>
                    <Grid item  xs={12} sm={4} className={classes.paper} >
                        <MainCard 
                            imgURL=""
                            name="Rapide" 
                            discription="texte"
                        />
                    </Grid>
                </Grid>
            </div>
        </div>  
    )
}

export default Main
