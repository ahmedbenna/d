import React from "react";
import './DocCard.css';

function Doctors() {
  return (
    <DoctorCard
      drNomPrenom="Dr NOM PRENOM"
      specialit="Specialité"
      address="Address"
      prenderRendezVous="Prender rendez-vous"
    />
  );
}

export default Doctors;

function DoctorCard(props) {
  const { drNomPrenom, specialit, address, prenderRendezVous } = props;

  return (
    <div className="doctor-card">
      <div className="dr-nom-prenom valign-text-middle roboto-bold-black-18px">{drNomPrenom}</div>
      <div className="specialit valign-text-middle roboto-bold-shark-18px">{specialit}</div>
      <div className="address valign-text-middle roboto-normal-black-14px">{address}</div>
      <div className="rendezvou-button smart-layers-pointers ">
        <div className="prender-rendez-vous valign-text-middle roboto-medium-white-14px">{prenderRendezVous}</div>
      </div>
    </div>
  );
}
