import React from 'react'
import {CartWidget} from '../Cart/CartWidget'
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = withStyles(() => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
}));

export const NavBar = () => {
  const classes = styles;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            <a href="http://localhost:3000/" fontSize="large">TecnoLibre</a>
          </Typography>         
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </div>
  );
}