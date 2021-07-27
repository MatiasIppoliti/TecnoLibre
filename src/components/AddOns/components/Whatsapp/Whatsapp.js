import React from 'react';

//Styles
import { WhatsappStyles } from './WhatsappStyles';

//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => WhatsappStyles(theme));

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