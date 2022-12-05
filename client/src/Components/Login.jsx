import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function Login({updateClient}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();
    
    function onSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch(`/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(r => {
            setIsLoading(false)
            if(r.ok){
                r.json().then(client => {
                    navigate(`/`)
                    updateClient(client)
                })
            } else {
                r.json().then(json => setErrors(json.errors))
            }
        })
    }

    function onClick(e){
        e.preventDefault()
        navigate(`/signup`)
    }

    return (
        <div>
        <div className='form-container'>
            <Form 
                className='loginForm'
                onSubmit={onSubmit}>
                <Form.Label> Username </Form.Label>
                <Form.Control
                  className='form-container-input' 
                  type="text"
                  name="username" 
                  id="username" 
                  placeholder="Username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <Form.Label> Password </Form.Label>
                <Form.Control
                  className='form-container-input' 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <button className='primary-btn' type='submit' value='Log in!'>Log In!</button>
            </Form>
            </div>
            {errors? <div className='errors'>{errors}</div>:null} 
            <div>{isLoading ? "Loading..." : null }</div>
            <div> Are You a New user? 
                <br/>
                <button className='primary-btn' onClick = {onClick}> Sign up!</button>
            </div>
        </div>
    )
}
export default Login;