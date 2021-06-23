import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetailContainer/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const myPromiseDetalleProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
                    {
                        id: 1, 
                        title: 'Placa de Video Zotac GeForce RTX 3070', 
                        description: '8GB GDDR6 Twin Edge OC', 
                        price: '260.000',
                        picture: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22241_Placa_de_Video_Zotac_GeForce_RTX_3070_8GB_GDDR6_Twin_Edge_OC_cb8b31f6-grn.jpg',
                        alt: "Placa de Video Zotac GeForce RTX 3070",
                        freeShipping: true,
                        stock: true,
                        garantia: true,
                        available: true,
                        categoria: 'procesadores'
                    }
        ), 1000)
    })
}

export const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState([])
    const {productID} = useParams();

const ejecutarPromise = () => {
    myPromiseDetalleProducto().then((data) => {
      const dataFiltrada = data.filter(element => element.categoria === productID);
      setDetalleProducto(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarPromise();
  }, [productID]);

 return <>
    <ItemDetail detalleProducto={detalleProducto} />
    </>    
}