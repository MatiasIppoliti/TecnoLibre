import React from 'react'
import CartWidget from '../Cart/CartWidget'
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function NavBar(props) {
  const { classes } = props;
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
          <Typography variant="title" color="inherit" className={classes.flex}>
            <a href="http://localhost:3000/" fontSize="large">TecnoLibre</a>
          </Typography>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);


{/* <ul>
<li><a href="http://localhost:3000/" className="App-link">Monitores</a></li>
<li><a href="http://localhost:3000/" className="App-link">Teclados</a></li>
<li><a href="http://localhost:3000/" className="App-link">Mouses</a></li>
<li><a href="http://localhost:3000/" className="App-link">Auriculares</a></li>
<li><a href="http://localhost:3000/" className="App-link">Gabinetes</a></li>
</ul>
<CartWidget></CartWidget>  */}