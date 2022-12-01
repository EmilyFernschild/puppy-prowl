import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({updateClient}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    let navigate = useNavigate();
    
  function onSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_name: name, 
        email: email,
        address: address,
        phone_number: parseInt(phoneNumber),
        username: username,
        password: password
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((client) => {
         updateClient(client)
         navigate(`/NewPupForm`)
    });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function onClick(e){
    e.preventDefault()
    navigate(`/login`)
  }

    return (
        <div className='form-container'>
        <form
          className='submitForm'
          onSubmit={onSubmit}>
            <label> Name:* </label>
            <input
              className='form-container-input' 
              type="text" 
              name="name" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <label> Email:* </label>
            <input
              className='form-container-input' 
              type="email" 
              name="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label> Address:* </label>
            <input
              className='form-container-input' 
              type="text" 
              name="address" 
              id="address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
            />
            <label> Phone Number: </label>
            <input
              className='form-container-input' 
              type="tel" 
              name="phoneNumber" 
              id="phoneNumber" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <label> UserName:* </label>
            <input 
              className='form-container-input'
              type="text"
              name="username" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <label> Password:* </label>
            <input
              className='form-container-input' 
              type="password" 
              name="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button className='bntPrimary' type='submit' value='Sign up!'> Sign Up!</button>

        </form>
        {errors? <div className='errors'>{errors} </div>:null}
        <div> Already have an account? </div>
            <label>{isLoading ? "Loading..." : null }</label>
            <button className='bntPrimary' onClick={onClick}> Log in! </button>
    </div>
    )
}
export default Signup;