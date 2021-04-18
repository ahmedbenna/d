import React, { Component } from 'react'

import {TextField, Button } from '@material-ui/core'
import axios from 'axios'

export default class AjouterSpecialite extends Component {
    constructor(){
        super()
        this.state={
            specialite:'',
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value},()=>{
            console.log(this.state);
        })
        }
    
    handleSubmit = e => {
        e.preventDefault();
        const data={
            libelle: this.state.specialite
        }
        axios.post('http://localhost:8080/api/specialites',data)
        .then(res=>{
            console.log(res)
            localStorage.removeItem('specialites')
        })
    }
    render() {
        
        return (
            <div>
                <TextField 
                    name='specialite'
                    label='Ajouter Specialite'
                    value={this.state.specialite}
                    onChange={this.handleChange}
                />
                <Button onClick={this.handleSubmit}>Ajouter</Button>
                
            </div>
        )
    }
}
