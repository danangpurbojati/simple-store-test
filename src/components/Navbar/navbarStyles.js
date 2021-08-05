import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: 'black',
        marginBottom: '24px',
    },
    navWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    navLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    userWrapper: {
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
            '& $userDropdown' : {
                display: 'block'
            }
        }
    },
    userDropdown: {
        display: 'none',
        minWidth: '200px',
        backgroundColor: 'white',
        color: 'black',
        position: 'absolute',
        top: '100%',
        right: 0
    },
    userName: {
        padding: '10px'
    },
    logoutButton: {
        borderRadius: 0
    }
});

export default useStyles;