import React from 'react'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    doctorcard:{
        hight:'8000px',
        backgroundColor: 'blue',
    },
}));

function Result() {

    
    const classes = useStyles();
    return (
        <div className={classes.doctorcard}>
            

        </div>
    )
}

export default Result
