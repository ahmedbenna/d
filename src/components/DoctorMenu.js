import React,{useState} from 'react'

import {  Avatar, Typography,   List, ListItem, ListItemIcon, ListItemText, Divider, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { Settings, EventNote, Alarm } from '@material-ui/icons';
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    image: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    paper: {
        width: '300px',
        display: 'flex',
        justifyContent: 'center',
    },
    nom: {
        display: 'flex',
        justifyContent: 'start',
        color: 'rgb(0 35 75)',
        font: 'roboto',
        fontWeight: '500',
        marginTop: '10px'


    },
    specialite: {
        display: 'flex',
        
        justifyContent: 'start',
        color: 'rgb(0 35 75)', 
        font:'roboto', 
        paddingLeft :'20px',
        
    },
    container: {
        padding: '20px',


    },
    info:{

    },
    link: {
        textDecoration: 'none',
        color: '#212121'
    },



}));

export default function DoctorMenu() {
    const classes = useStyles();
    const doctor = JSON.parse(localStorage.getItem('doctorInfo'))
    const [ cmp ,setCmp ]= useState()
    
    

    return (

        <div className={classes.container}>
            <div className={classes.info}>
                <Avatar className={classes.image} />
                <Typography className={classes.nom}>
                    Dr. {doctor.nom} {doctor.prenom}
                </Typography>
                <Typography className={classes.specialite}>
                    {doctor.specialite.libelle}
                </Typography>
            </div>
            <Divider />
            <List component="nav" >
                <ListItem button >
                    <ListItemIcon>
                        <EventNote />
                    </ListItemIcon>
                    <ListItemText primary="Mes rendez-vous" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" >
                <ListItem button>
                    <ListItemIcon>
                        <Alarm />
                    </ListItemIcon>
                    <ListItemText primary='Modifier disponibilite' />
                </ListItem>
                <Link to='/components/EditDoctorProfile' className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Modifier profile" />
                    </ListItem>
                </Link>

            </List>


        </div>

    )
}
