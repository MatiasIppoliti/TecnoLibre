export const WhatsappStyles = ((theme) => ({
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