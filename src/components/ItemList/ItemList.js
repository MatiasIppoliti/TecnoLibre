import React, {useState, useEffect} from 'react';
import { Item } from './Item.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyle = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& > * + *': {
              marginTop: theme.spacing(1),
        },
    },
        grilla: {
            paddingTop: theme.spacing(10),
        }
}));

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 10, 
                    title: 'Procesador Intel Core i7 9700F', 
                    description: '4.7GHz Turbo 1151 Coffee Lake', 
                    price: 40.525,
                    picture:{
                        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16200_Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-grn.jpg',
                        alt: "Procesador Intel Core i7"
                    },
                    stock: 10
                },
                {
                    id: 11, 
                    title: 'Gabinete Kolink Void', 
                    description: 'ARGB ATX Vidrio Templado', 
                    price: 6.569,
                    picture:{
                        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20250_Gabinete_Kolink_Void_ARGB_ATX_Vidrio_Templado_f962dc11-grn.jpg',
                        alt: "Gabinete Kolink Void"
                    },
                    stock: 10
                },
                {
                    id: 12, 
                    title: 'Mouse Glorious Model D', 
                    description: 'Minus - Matte Black', 
                    price: 4.523,
                    picture:{
                        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21233_Mouse_Glorious_Model_D_Minus_-_Matte_Black_ad043ce3-grn.jpg',
                        alt: "Mouse Glorious Model D"
                    },
                    stock: 10
                },
                {
                    id: 13, 
                    title: 'Fuente ASUS ROG STRIX 750G', 
                    description: '80 Plus Gold 750W Full Modular', 
                    price: 39.321,
                    picture:{
                        pictureUrl: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22432_Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular_38c61d29-grn.jpg',
                        alt: "Fuente ASUS ROG STRIX 750G"
                    },
                    stock: 10
                }
            ]
        ), 2000)
    })
}

export const ItemList = () => {
    const classes = useStyle();
    const [data, setData] = useState([]);

    const ejecutarItemList = () => {
        myPromise().then(dataProductos => {
            setData(dataProductos)
        })
    }

    useEffect(() => {
        ejecutarItemList()
    }, [])

    return<>
        {
            data.length === 0 ? (<div className={classes.root}><LinearProgress/></div>) : (<Grid container>
                <Grid className={classes.grilla} item xs={12} >
                    <Grid container justify="center" >
                        {data.map((element)=><Item key={element.id} 
                        id={element.id} 
                        title={element.title} 
                        description={element.description}
                        price={element.price}
                        pictureUrl={element.picture.pictureUrl}  
                        alt={element.picture.alt}
                        stock={element.stock}
                        />)}
                    </Grid>
                </Grid>
            </Grid>)
        }
    </>
}