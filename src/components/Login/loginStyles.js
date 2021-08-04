import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pageWrapper: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    authMargin: {
        marginBottom: '16px'
    },
    linkStyle: {
        textTransform: 'capitalize'
    }
});

export default useStyles;