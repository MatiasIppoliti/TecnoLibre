import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 200,
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
        marginTop: -10,
    },
    texto: {
        textAlign: 'center', 
        marginTop: 10,
        },
    contador: {
        textAlign: 'bottom',
        },    
    }));
    
export default function ItemCount() {
    const [contador, setContador] = useState(0);
    const clases = useStyles();
    
    return (
        <Grid container className={clases.root}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Grid align='center' item>
                <Paper elevation={5} className={clases.paper}>
                    <h5 className={clases.texto}>Cantidad</h5>
                    <ButtonGroup className={clases.buttongroup} size="large" aria-label="small outlined button group" >
                        <Button onClick={() => {setContador(contador + 1)}}>+</Button>
                        <Paper ClassName={clases.contador}>{contador}</Paper>
                        <Button onClick={() => {setContador(contador - 1)}}>-</Button>
                    </ButtonGroup>
                    <Button className={clases.envio} variant="contained" color="primary">Agregar</Button>
                </Paper>                     
                </Grid>
            
            </Grid>
        </Grid>
        </Grid>
    )}
