import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ItemCount } from '../ItemCount/ItemCount';

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
            fontSize: '40px'
        },
        titulo:{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '5px'
        }
    })
})

export const Item = props => {
    const classes = useStyle();

    const {id, title, description, price, pictureUrl, alt} = props;
    return<>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    image= {pictureUrl}
                    width="200"
                    title= {alt}
                />
                <CardContent>
                    <Typography  component="h2" className={classes.titulo}>{title}</Typography>
                    <Typography  color="textSecondary" component="p">{description}</Typography>
                    <Typography  className={classes.precio}>${price}</Typography>
                    <Typography  variant="h6" component="p">ID: {id}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                <ItemCount/>
            </CardActions>
        </Card>
    </>
}