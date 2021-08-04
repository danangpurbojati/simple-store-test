import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { AppBar, Button, Container, Toolbar, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import useStyles from './navbarStyles';

const Navbar = () => {
    const classes = useStyles();
    const { logout, activeUser } = useContext(AuthContext);

    const clickLogout = async () => {
        await logout()
    }
    return (
        <AppBar position="static">
            <Container>
                <Toolbar className={classes.navWrapper}>
                    <Link className={classes.navLink} to="/">
                        <Typography variant="h5">
                            Tokoku
                        </Typography>
                    </Link>
                    <div className={classes.userWrapper}>
                        <Avatar>{activeUser.email.charAt(0)}</Avatar>
                        <div className={classes.userDropdown}>
                            <Typography className={classes.userName}>{activeUser.email}</Typography>
                            <Button onClick={clickLogout} className={classes.logoutButton} variant="contained" fullWidth size="small" color="primary">logout</Button>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
