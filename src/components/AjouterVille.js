import React, { Component } from 'react'

import {TextField, Button } from '@material-ui/core'
import axios from 'axios'

export default class AjouterVille extends Component {
    constructor(){
        super()
        this.state={
            ville:'',
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
            ville: this.state.ville
        }
        axios.post('http://localhost:8080/api/villes',data)
        .then(res=>{
            console.log(res)
            localStorage.removeItem('villes')
        })
    }
    render() {
        
        return (
            <div>
                <TextField 
                    name='ville'
                    label='Ajouter ville'
                    value={this.state.ville}
                    onChange={this.handleChange}
                />
                <Button onClick={this.handleSubmit}>Ajouter</Button>
                
            </div>
        )
    }
}
