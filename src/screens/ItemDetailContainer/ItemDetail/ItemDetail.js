import React from 'react';
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
import { Button } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyle = makeStyles((theme) => itemDetailContainerStyles(theme));

export const ItemDetail = props => {

    const classes = useStyle();
    const { producto } = props;

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };

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
                        image= {producto.pictureUrl}
                        title= {producto.alt}  
                    />
                </Card>
            </Grid>
            <Grid item xs={12} lg={4}>      
                <Chip label={producto.category} color="secondary"></Chip>
                <Typography variant="h4" className={classes.titulo}>{producto.title}</Typography>
                <Typography color="textSecondary" component="p">{producto.description}</Typography>
                <Typography className={classes.precio}>${producto.price}</Typography>
                <Divider variant="middle" />
                <Tooltip title="GARANTIA POR 36 MESES" arrow><SecurityIcon style={{ color: green[500] }} className={classes.icons}></SecurityIcon></Tooltip>
                <Tooltip title="STOCK DISPONIBLE" arrow><CheckIcon style={{ color: green[500] }} className={classes.icons}></CheckIcon></Tooltip>
                <Tooltip title="ENVIOS GRATIS A TODO EL PAIS" arrow><LocalShippingIcon style={{ color: green[500] }} className={classes.icons}></LocalShippingIcon></Tooltip>
                <ItemCount />
                <Grid 
                container 
                justify="center"
                alignItems="center" 
                item xs={12}>
                    <Button
                    onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    endIcon={<ShoppingBasketIcon>send</ShoppingBasketIcon>}
                >
                    Añadir al carrito
                </Button>

                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    endIcon={<CheckCircleOutlineIcon/>}
                    message='¡Su producto ha sido añadido con exito!'
                    key={vertical + horizontal}
                />

                </Grid>    
            </Grid>
        </Grid>
    </>
}