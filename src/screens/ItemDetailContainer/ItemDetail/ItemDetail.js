import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { ItemCount } from '../../../components/ItemCount/ItemCount';
import { itemDetailContainerStyles } from '../ItemDetailContainerStyles';
import SecurityIcon from '@material-ui/icons/Security';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import StarIcon from '@material-ui/icons/Star';

const useStyle = makeStyles((theme) => itemDetailContainerStyles(theme));

export const ItemDetail = props => {

    const classes = useStyle();
    const { detalleProducto } = props;

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
                        image= {detalleProducto.picture}
                        title= {detalleProducto.alt}  
                    />
                </Card>
            </Grid>
            <Grid item xs={12} lg={4}>      
                {(detalleProducto.stock) ? <Chip label="¡MAS VENDIDO!" color="secondary"></Chip> : null}
                {(detalleProducto.available) ? <Typography variant="h4" className={classes.titulo}>{detalleProducto.title}</Typography> : null}
                {(detalleProducto.available) ? <Typography color="textSecondary" component="p">{detalleProducto.description}</Typography> : null}
                {(detalleProducto.available) ? <Typography className={classes.precio}>${detalleProducto.price}</Typography> : null }
                <Divider variant="middle" />
                {(detalleProducto.garantia) ? <Tooltip title="GARANTIA POR 36 MESES" arrow><SecurityIcon style={{ color: green[500] }} className={classes.icons}></SecurityIcon></Tooltip> : null}
                {(detalleProducto.stock) ? <Tooltip title="STOCK DISPONIBLE" arrow><CheckIcon style={{ color: green[500] }} className={classes.icons}></CheckIcon></Tooltip> : null}
                {(detalleProducto.freeShipping) ? <Tooltip title="ENVIOS GRATIS A TODO EL PAIS" arrow><LocalShippingIcon style={{ color: green[500] }} className={classes.icons}></LocalShippingIcon></Tooltip> : null }
                {(detalleProducto.available) ? <ItemCount /> : null}
                
            </Grid>
        </Grid>
    </>
}