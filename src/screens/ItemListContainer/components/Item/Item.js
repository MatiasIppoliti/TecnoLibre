import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Snackbar from '@material-ui/core/Snackbar';

const useStyle = makeStyles(() => {
    return({
        root: {
            maxWidth: 345,
            margin: '10px',
        },
        cardAction:{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px'
        },
        precio:{
            fontSize: '40px',
            paddingTop: '15px'
        },
        titulo:{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '5px'
        },
        Snackbar:{
            textAlign: 'center',
        }
    })
})



export const Item = props => {
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

    return<>
        <Card className={classes.root}>
        
            <CardActionArea>
                <Link to={`/item/${producto.id}`}>
                <CardMedia
                    component='img'
                    image= {producto.data.pictureUrl}
                    width="200"
                    title= {producto.data.alt}
                />
                </Link>
            </CardActionArea>
                <CardContent>
                    <Typography  component="h2" className={classes.titulo}>{producto.data.title}</Typography>
                    <Typography  color="textSecondary" component="p">{producto.data.description}</Typography>
                    <Typography  className={classes.precio}>{`$ ${producto.data.price}`}</Typography>
                </CardContent>
            <CardActions className={classes.cardAction}>
            <Button
                onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
                variant="contained"
                color="primary"
                endIcon={<ShoppingBasketIcon>send</ShoppingBasketIcon>}
            >
                Añadir al carrito
            </Button>
            </CardActions>

            <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="¡Su producto ha sido añadido con exito!"
        key={vertical + horizontal}
      />
        </Card>
    </>
}