import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetailContainer/ItemDetail/ItemDetail'

const myPromiseDetalleProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
                    {
                        id: 22, 
                        title: 'Placa de Video Zotac GeForce RTX 3070', 
                        description: '8GB GDDR6 Twin Edge OC', 
                        price: '260.000',
                        picture: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22241_Placa_de_Video_Zotac_GeForce_RTX_3070_8GB_GDDR6_Twin_Edge_OC_cb8b31f6-grn.jpg',
                        alt: "Placa de Video Zotac GeForce RTX 3070",
                        freeShipping: true,
                        stock: true,
                        garantia: true,
                        available: true,
                    }
        ), 2000)
    })
}

export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])

    useEffect( () => {
        myPromiseDetalleProducto()
        .then(response => setDetalleProducto(response))
        .catch(error => console.log(error))
    }, []);

    return<>
        <ItemDetail detalleProducto={detalleProducto}/>
    </>
}