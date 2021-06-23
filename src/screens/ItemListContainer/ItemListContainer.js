import React, {useEffect, useState} from 'react'
import {ItemList} from '../ItemListContainer/components/ItemList/ItemList'
import {useParams} from 'react-router-dom'

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 1, 
                    title: 'Procesador Intel Core i7 9700F', 
                    description: '4.7GHz Turbo 1151 Coffee Lake', 
                    price: "40.525",
                    picture:{
                        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16200_Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-grn.jpg',
                        alt: "Procesador Intel Core i7"
                    },
                    stock: 10,
                    categoria: 'procesadores'
                },
                {
                    id: 2, 
                    title: 'Gabinete Kolink Void', 
                    description: 'ARGB ATX Vidrio Templado', 
                    price: "6.569",
                    picture:{
                        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20250_Gabinete_Kolink_Void_ARGB_ATX_Vidrio_Templado_f962dc11-grn.jpg',
                        alt: "Gabinete Kolink Void"
                    },
                    stock: 10,
                    categoria: 'gabinetes'
                },
                {
                    id: 3, 
                    title: 'Mouse Glorious Model D', 
                    description: 'Minus - Matte Black', 
                    price: "4.523",
                    picture:{
                        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21233_Mouse_Glorious_Model_D_Minus_-_Matte_Black_ad043ce3-grn.jpg',
                        alt: "Mouse Glorious Model D"
                    },
                    stock: 10,
                    categoria: 'mouses'
                },
                {
                    id: 4, 
                    title: 'Fuente ASUS ROG STRIX 750G', 
                    description: '80 Plus Gold 750W Full Modular', 
                    price: "39.321",
                    picture:{
                        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22432_Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular_38c61d29-grn.jpg',
                        alt: "Fuente ASUS ROG STRIX 750G"
                    },
                    stock: 10,
                    categoria: 'fuentes'
                }
            ]
        ), 1000)
    })
}

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoryID} = useParams();

    const ejecutarPromise = () => {
        myPromise().then((data) => {
          const dataFiltrada = data.filter(element => element.categoria === categoryID);
          setProductos(dataFiltrada);
        });
      };

      useEffect(() => {
        ejecutarPromise();
      }, [categoryID]);

     return <>
        <ItemList productos={productos} />
        </>    
}



  