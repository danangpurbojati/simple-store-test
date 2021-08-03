import React, {useState, useContext} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();
    const { signup } = useContext(AuthContext);
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

    return (
        <div>
            <h1>Sign up</h1>
            {
               errorMessage && <h1>{errorMessage}</h1>
            }
            <form onSubmit={submitSignupForm}>
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
               <button type="submit">sign up</button>
           </form>
        </div>
    )
}

export default SignUp
