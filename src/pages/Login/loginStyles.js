import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pageWrapper: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    authMargin: {
        marginBottom: '16px'
    },
    authLink: {
        textTransform: 'capitalize',
    }
});

export default useStyles;