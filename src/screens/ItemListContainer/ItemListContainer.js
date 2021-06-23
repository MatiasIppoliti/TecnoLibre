import React, {useEffect, useState} from 'react'
import {ItemList} from '../ItemListContainer/components/ItemList/ItemList'
import {useParams, Redirect} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import { itemData } from '../Services/ItemData';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(1),
    },
}
}));


const myPromise = new Promise ((resolve, reject) => {
        setTimeout(() => resolve (itemData), 1500)
    })

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();
    const classes = useStyle();

      useEffect(() => {
        myPromise.then(data => { setProductos(data) }).catch(() => <Redirect to={'/*'} />)
    }, [])

      const filterByCategory = listaProductos => { return category === undefined ? listaProductos : listaProductos.filter(producto => producto.category === category) }

      return <>
        {productos.length === 0 ? (
            <div className={classes.root}><LinearProgress/></div>
        ) : (
            <section>
                <ItemList productos={filterByCategory(productos)} />
            </section>
        )}
    </>
}




  