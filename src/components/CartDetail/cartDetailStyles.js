import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pageWrapper: {
        marginTop: '24px'
    },
    pageTitle: {
        fontWeight: 'bold',
        marginBottom: '16px'
    },
    table: {
        marginBottom: '16px'
    },
    productImage: {
        width: '50px',
        height: '50px',
        objectFit: 'cover'
    },
    totalPrice: {
        fontWeight: 'bold',
        fontSize: '18px'
    }
});

export default useStyles;