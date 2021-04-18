import React, { Component } from 'react'

import { Container, CssBaseline, Grid,   }  from '@material-ui/core/';

import { withStyles } from '@material-ui/core/styles';


const styles = {
    container:{

    }
};

class Calendar extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            //day= today.getDay();
            //month= today.getMonth();
            //hour= today.getHours();
        this.state = {
            date: date
            
            
        };
       
    }
      
    render() {
        const {classes} = this.props;
        return (
            <div>
                <CssBaseline>
                    <Container className={classes.container}>
                        <div>
                            <Grid container>
                                <Grid item>
                                    {this.state.date} 
                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                        </div>      
                    </Container>
                </CssBaseline>
            </div>
        )
    }
}
export default  withStyles(styles)(Calendar)
