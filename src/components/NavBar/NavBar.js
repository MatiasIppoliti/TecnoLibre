import React from 'react'
import {CartWidget} from './components/Cart/CartWidget'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const procesadores = "Procesadores";
  const gabinetes = "Gabinetes";
  const mouses = "Mouses";
  const fuentes = "Fuentes"; 

  return (
  <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="title" className={classes.title} color="inherit">
            <Link aria-current="page" to={'/'}>TecnoLibre</Link>
          </Typography>
        
        <div className={classes.title}>
          <Button 
           aria-describedby={id} 
           variant="contained" 
           color="primary" 
           onClick={handleClick}
          >
            Categorías
          </Button>


          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            className={classes.typography}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: -50,
              horizontal: 'center',
            }}
            >

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
            
              <MenuItem onClick={handleClose}>
                <Link to={`/category/${procesadores}`}>Procesadores</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={`/category/${gabinetes}`}>Gabinetes</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={`/category/${mouses}`}>Mouses</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={`/category/${fuentes}`}>Fuentes</Link>
              </MenuItem>

            </Popover> 
          </Menu>
        </div>        
          
          <CartWidget/>        
        </Toolbar>
      </AppBar>
    </div>
    
  );
}