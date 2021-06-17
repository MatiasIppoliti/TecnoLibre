import { Item } from '../Item/Item.js'
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

export const ItemList = props => {
    const classes = useStyle();
    const {productos} = props;


    return<>
        {
            productos.length === 0 ? (<div className={classes.root}><LinearProgress/></div>) : (<Grid container>
                <Grid className={classes.grilla} item xs={12} >
                    <Grid container justify="center" >
                        {productos.map((producto) => <Item 
                            key={producto.id} 
                        id={producto.id}
                        producto={producto}
                        />)}
                    </Grid>
                </Grid>
            </Grid>)
        }
    </>
}