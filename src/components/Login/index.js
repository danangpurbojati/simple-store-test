import React, { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { googleProvider, githubProvider } from '../../contexts/socialProviders';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const { login, socialMediaAuth } = useContext(AuthContext);
    const history = useHistory();
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

    const submitLoginForm = async (event) => {
        event.preventDefault();
        try {
            const user = await login(input.email, input.password);
            if(user){
                setInput({
                    email: '',
                    password: ''
                });
                setErrorMessage('');
                history.push("/");
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

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
        <div>
           <h1>Login</h1>
           {
               errorMessage && <h1>{errorMessage}</h1>
           }
           <form onSubmit={submitLoginForm}>
               <div>
                    <label htmlFor="email">Email :</label>
                    <input 
                        onChange={changeInput} 
                        value={input.email} 
                        id="email" 
                        name="email" 
                        placeholder="enter email here . . ." 
                        type="text" 
                    />
               </div>
               <div>
                    <label htmlFor="password">Password :</label>
                    <input 
                        onChange={changeInput} 
                        value={input.password} 
                        id="password" 
                        name="password" 
                        placeholder="enter password here ..." 
                        type="password" 
                    />
               </div>
               <button type="submit">login</button>
           </form>
           <button onClick={() => socialAuth(googleProvider)}>google login</button> 
           <button onClick={() => socialAuth(githubProvider)}>github login</button> 
        </div>
    )
}

export default Login
