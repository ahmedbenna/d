import React from 'react'

import DoctorProtectedRoute from './DoctorProtectedRoute';
import DoctorRendezVous from './DoctorRendezVous';
import EditDoctorProfile from './EditDoctorProfile';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    container: {
        padding: '20px',


    },
    
    link: {
        textDecoration: 'none',
        color: '#212121'
    },



}));
export default function DoctorRoute() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Router>
                <Switch>
                    <DoctorProtectedRoute path='/DoctorRendezVous' component={DoctorRendezVous} isAuth={localStorage.getItem('doctorInfo')} />
                    {/* <DoctorProtectedRoute path='/components/ProfileDoctor' component={ProfileDoctor} isAuth={localStorage.getItem('doctorInfo')} /> */}
                    <DoctorProtectedRoute path='/EditDoctorProfile' component={EditDoctorProfile} isAuth={localStorage.getItem('doctorInfo')} />
                </Switch>
            </Router>
        </div>
    )
}
