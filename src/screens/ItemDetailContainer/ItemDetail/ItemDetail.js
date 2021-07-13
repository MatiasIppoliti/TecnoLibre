import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { ItemCount } from '../../ItemListContainer/components/ItemCount/ItemCount';
import { itemDetailContainerStyles } from '../ItemDetailContainerStyles';
import SecurityIcon from '@material-ui/icons/Security';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { FinalizarCompra } from '../../../components/FinalizarCompra/FinalizarCompra';
import { CartContext } from '../../../Context/CartContext';

const useStyle = makeStyles((theme) => itemDetailContainerStyles(theme));

export const ItemDetail = props => {

    const classes = useStyle();
    const { detalleProducto } = props;
    const [cantidadProducto, setCantidadProducto] = useState(0)
    const [click, setClick] = useState(false)
    const {addItem, removeItem} = useContext(CartContext)

    const onAdd = cantidad => {
        setCantidadProducto(cantidad); 
        setClick(true); 
        addItem({item: detalleProducto, quantity: cantidad}) 
    }

    const clickCancelar = cl =>{
        setClick(false);
        removeItem(detalleProducto.id);
    }

    return <>
        <Grid className={classes.container} container 
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}>
            <Grid item xs={12} lg={4}>
                <Card>
                    <CardMedia
                        component='img'
                        image= {detalleProducto.pictureUrl}
                        title= {detalleProducto.alt}  
                    />
                </Card>
            </Grid>
            <Grid item xs={12} lg={4}>      
                <Chip label={detalleProducto.category} color="secondary"></Chip>
                <Typography variant="h4" className={classes.titulo}>{detalleProducto.title}</Typography>
                <Typography color="textSecondary" component="p">{detalleProducto.description}</Typography>
                <Typography className={classes.precio}>${detalleProducto.price}</Typography>
                <Divider variant="middle" />
                <Tooltip title="GARANTIA POR 36 MESES" arrow><SecurityIcon style={{ color: green[500] }} className={classes.icons}></SecurityIcon></Tooltip>
                <Tooltip title="STOCK DISPONIBLE" arrow><CheckIcon style={{ color: green[500] }} className={classes.icons}></CheckIcon></Tooltip>
                <Tooltip title="ENVIOS GRATIS A TODO EL PAIS" arrow><LocalShippingIcon style={{ color: green[500] }} className={classes.icons}></LocalShippingIcon></Tooltip>
                {
                    click ? 
                    <FinalizarCompra clickCancelar={clickCancelar}/>
                    :
                    <ItemCount stock={detalleProducto.stock} valorInicial={1}  cantidadProducto={cantidadProducto} onAdd={onAdd}/>
                }

  
            </Grid>
        </Grid>
    </>
}