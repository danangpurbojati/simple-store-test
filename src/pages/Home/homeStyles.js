import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    homeTitle: {
        margin: '24px 0',
        fontWeight: 'bold'
    },
    tableHead: {
        backgroundColor: 'black',
    },
    tableTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px'
    },
    productImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover'
    },
    productName: {
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    productLink: {
        textDecoration: 'none',
    }
});

export default useStyles;