import React from 'react'


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    doc: {
        backgroundColor:'#8ADEFF',
        backgroundImage: " url(../img/main-doc-search.jpg)",
    }

}));
function DoctorResult() {
    const classes = useStyles();

    return (
        <div className={classes.doc}>
            
        </div>
    )
}

export default DoctorResult
