import React from 'react'

import { Typography, Grid, Button, TextField, Paper, Avatar  }  from '@material-ui/core/';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    doc: {
        backgroundColor:'#8ADEFF',
    },


}))

function Doctorprofile() {
    const classes = useStyles();

    return (
        <div className={classes.doc}>
            ffff
            <Grid container>
                <Grid item>
                    <Avatar className={classes.avatar} alt="img" src="../img/doctor_avatar.png"/>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Doctorprofile
