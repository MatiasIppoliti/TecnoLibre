import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  icon: {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '40px',
    right: '40px',
    backgroundColor: '#25d366',
    color: '#FFF',
    borderRadius: '50px',
    textAlign: 'center',
    fontSize: '30px',
    boxShadow: '4px 4px 4px #999',
    zIndex: '100',
  },
}));

export const Whatsapp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab className={classes.icon} onClick={()=> window.open('https://wa.me/message/QLNWXI6BI6H7G1', '_blank')}>
        <WhatsAppIcon />
      </Fab>
    </div>
  );
}