import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const StyledBadge = withStyles((theme) => ({
    badge: {
      left: 10,
      top: -10,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '9px 9px',
      fontSize: '14px'
    },
  }))(Badge);

export default function CartWidget () {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <IconButton color="default" >
          <StyledBadge badgeContent={1} color="secondary" />
          <ShoppingCartIcon fontSize="large" style={{ color: "white" }}/>
        </IconButton>
        </div>
        );
}