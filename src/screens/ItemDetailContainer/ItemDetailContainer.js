import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetailContainer/ItemDetail/ItemDetail';
import { LinearProgress } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { useParams, Redirect } from 'react-router-dom';
import { itemData } from '../Services/ItemData';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(1),
    },
}
}));

const myPromiseDetalleProducto = new Promise ((resolve, reject) => {
        setTimeout(() => resolve (itemData), 2000)
    })

export const ItemDetailContainer = () => {
    const [detalleProducto, setDetalleProducto] = useState([])
    const {id} = useParams();
    const classes = useStyle();

    useEffect(() => {
        myPromiseDetalleProducto.then((data) => {
            const dataFiltrada = data.filter(producto => producto.id === id);
            setDetalleProducto(dataFiltrada)
        }).catch(() => <Redirect to={'/*'} />)
    }, [id])

    return <>
    {detalleProducto.length === 0 ? (
        <div className={classes.root}>
            <LinearProgress/>
        </div>

    ) : (
        detalleProducto.map((detalleProducto, i) => {
            return <section key={i}>
                <ItemDetail producto={detalleProducto} />
            </section>
        })
    )}
</>
}