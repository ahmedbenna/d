import React from 'react'

import PatientNav from './PatientNav'
import DoctorNav from './DoctorNav'
import MainNav from './MainNav'

export default function Nav() {
    const patient=  JSON.parse(localStorage.getItem('patientInfo'))
    console.log('ppppppp',patient)
    const doctor=  JSON.parse(localStorage.getItem('doctorInfo'))
    return (
        <div>
            { 
                localStorage.getItem('patientInfo') ?
                <>
                    <PatientNav
                        nom={patient.patientPrincipal.nom}
                        prenom={patient.patientPrincipal.prenom}
                    />
                </>
                : localStorage.getItem('doctorInfo') ?
                <>
                    <DoctorNav
                        nom={doctor.nom}
                        prenom={doctor.prenom}
                    />
                </>
                :
                <>
                    <MainNav/>
                </>

            }
        </div>
    )
}
