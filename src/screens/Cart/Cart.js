import React from 'react';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

export const Cart = () =>{
    const history = useHistory();

    return <section>
    <Grid 
            container 
            justify="center"
            alignItems="center" 
            item xs={12}>
            <h1>Productos en el Carrito:</h1>   
            </Grid>
    
    <Grid 
            container 
            justify="center"
            alignItems="center" 
            item xs={12}>
            <Button
                onClick={() => history.goBack()}
                variant="contained"
                color="primary"
                size="small"
            >
                Volver
            </Button>
    </Grid>

    </section>
} 