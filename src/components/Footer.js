import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function Footer() {
    return (
        <div className="">
            <Box mt={8}>
                <Grid Container>
                    <Grid item>
                        <nav >                          
                            <ul>
                                About Us
                            </ul>
                            <ul>
                                FAQs
                            </ul>
                            <ul>
                                Contact Us
                            </ul>                      
                        </nav>   
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Grid>
                   
                </Grid>
            </Box>
        </div>
    )
}
