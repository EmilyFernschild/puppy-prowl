import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div className='form-container'>
            <form 
                className='loginForm'
                onSubmit={onSubmit}>
                <label> UserName </label>
                <input
                  className='form-container-input' 
                  type="text"
                  name="username" 
                  id="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <label> Password </label>
                <input
                  className='form-container-input' 
                  type="password" 
                  name="password" 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <button className='btnPrimary' type='submit' value='Log in!'>Log In!</button>
                
            </form>
            {errors? <div className='errors'>{errors}</div>:null} 
            <div>{isLoading ? "Loading..." : null }</div>
            <div> Are You a New user? </div>
                <button className='btnPrimary' onClick = {onClick}> Sign up!</button>
        </div>
    )
}
export default Login;