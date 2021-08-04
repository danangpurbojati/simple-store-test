import React, {useState, useContext} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { googleProvider, githubProvider } from '../../contexts/socialProviders';
import { useHistory } from 'react-router-dom';

import { Button, Card, CardContent, Container, TextField, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import useStyles from '../Login/loginStyles';

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();
    const { signup, socialMediaAuth } = useContext(AuthContext);
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const changeInput = event => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    };

    const submitSignupForm = async (event) => {
        event.preventDefault();
        try {
            const user = await signup(input.email, input.password);
            if(user){
                setInput({
                    email: '',
                    password: ''
                });
                setErrorMessage('');
                history.push("/")
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    const socialAuth = async (provider) => {
        try {
            const user = await socialMediaAuth(provider);
            if(user){
                setErrorMessage('');
                history.push("/");
            }
        } catch (error) {
            setErrorMessage(error);
        }
    };

    return (
        <Container className={classes.pageWrapper} maxWidth="xs">
            <Card>
                <CardContent>
                    <Typography className={classes.authMargin} variant="h5">Daftar Akun Baru</Typography>
                    {
                        errorMessage && <Alert className={classes.authMargin} severity="error">{errorMessage}</Alert>
                    }
                    <form className={classes.authMargin} onSubmit={submitSignupForm}>
                        <TextField
                            className={classes.authMargin} 
                            variant="outlined"
                            size="small"
                            type="email"
                            label="Email"
                            name="email"
                            fullWidth
                            value={input.email}
                            onChange={changeInput}
                        />
                        <TextField
                            className={classes.authMargin} 
                            variant="outlined"
                            size="small"
                            type="password"
                            label="Password"
                            name="password"
                            fullWidth
                            value={input.password}
                            onChange={changeInput}
                        />
                        <Button variant="contained" fullWidth type="submit">daftar</Button>
                    </form>

                    <Typography className={classes.authMargin}>Daftar dengan akun lain</Typography>
                    <Button
                        className={classes.authMargin}
                        startIcon={<EmailIcon />} 
                        fullWidth 
                        onClick={() => socialAuth(googleProvider)}
                    >
                        daftar dengan google
                    </Button> 
                    <Button
                        className={classes.authMargin}
                        startIcon={<GitHubIcon />} 
                        fullWidth 
                        onClick={() => socialAuth(githubProvider)}
                    >
                        daftar dengan github
                    </Button>

                </CardContent>
            </Card>
        </Container>
    )
}

export default SignUp
