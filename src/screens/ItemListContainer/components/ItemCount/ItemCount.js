import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 300,
        marginTop: 50,
        justifyContent: 'center',
    },
    control: {
        padding: theme.spacing(2),
    },
    envio: {   
        marginTop: 10,
    },
    buttongroup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10,
    },

    button: {
        borderRightColor: '#C4C4C4 !important',
    },

    texto: {
        textAlign: 'center', 
        paddingTop: 5,
        },
    contador: {
        textAlign: 'start',
        },    
    }));
    
export const ItemCount = stock => {
    const [contador, setContador] = useState(1);
    const clases = useStyles();
    stock = 10;
    
    return (
        <Grid container className={clases.root}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid align='center' item>
                <Paper elevation={5} className={clases.paper}>
                    <h5 className={clases.texto}>Cantidad ({stock - contador} disponibles)</h5>
                    <ButtonGroup className={clases.buttongroup} size="large" aria-label="small outlined button group" >
                        <Button className={clases.button} disabled={contador <= 0} onClick={() => {setContador(contador - 1)}}>-</Button>
                        <Typography variant="h6" gutterBottom>
                            {contador}
                        </Typography>
                        <Button disabled={contador >= stock} onClick={() => {setContador(contador + 1)}}>+</Button>
                    </ButtonGroup>
                    <Button className={clases.envio} variant="contained" color="primary" disabled={contador < 1} >Agregar</Button>
                </Paper>                     
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    )}
