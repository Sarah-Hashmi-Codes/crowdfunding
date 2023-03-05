import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
const [ credentials, setCredentials ] = useState({
    username: "",
    password: "",
});

const [ error, setErrors ] = useState();

const navigate = useNavigate();

const handleChange = (event) => {
    const {id, value } = event.target;    //deconstruction
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id] : value
    }));
    console.log(event)
};

// const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault(); 

    if (credentials.username && credentials.password) {
        postData().then((response) => {
            if (response.token) {

            window.localStorage.setItem("token", response.token);

            window.localStorage.setItem("username", credentials.username);

            navigate('/');
            
            
            } else {
                
                setErrors(Object.values(response) [0] [0]);
            }
        });
    }
};

const postData = async ()  => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`, {
        method: 'post',
        headers: {                                 
            'Content-Type': "application/json",            
        },
        body: JSON.stringify(credentials),
    });
    return response.json();
};

console.log(credentials)
    return(
        <div>
            {error && <h1>{error}</h1>}

         <form>

        <div>
            <label htmlFor='username'>Username:</label>
            <input onChange={handleChange} type="text" id='username' placeholder="Your username"></input>    
        </div>

        <div>
            <label htmlFor='password'>Password:</label>
            <input onChange={handleChange} type='password' id='password' placeholder='Your password'></input>
        </div>

        <div><button type='submit' onClick={handleSubmit}>Login</button></div>

        </form>

        </div>

    );
};

export default LoginForm;