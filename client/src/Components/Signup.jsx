import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

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
      <div >
        <div className='form-container'>
        <Form
          className='submitForm'
          onSubmit={onSubmit}>
            <Form.Label> Name:* </Form.Label>
            <Form.Control
              className='form-container-input' 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Full Name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <Form.Label> Email:* </Form.Label>
            <Form.Control
              className='form-container-input' 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter Email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Form.Label> Address:* </Form.Label>
            <Form.Control
              className='form-container-input' 
              type="text" 
              name="address" 
              id="address" 
              placeholder="Full address"
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
            />
            <Form.Label> Phone Number: </Form.Label>
            <Form.Control
              className='form-container-input' 
              type="tel" 
              name="phoneNumber" 
              id="phoneNumber" 
              value={phoneNumber} 
              placeholder="e.g. xxxxxxxxxx"
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <Form.Text className="text-muted"></Form.Text>
            <Form.Label> Username:* </Form.Label>
            <Form.Control
              className='form-container-input'
              type="text"
              name="username" 
              id="username" 
              placeholder="Username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <Form.Label> Password:* </Form.Label>
            <Form.Control
              className='form-container-input' 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <Form.Text className="text-muted">We'll never share your information with anyone.</Form.Text>
            <br/>
            <button className='primary-btn' type='submit' value='Sign up!'> Sign Up!</button>
        </Form>
        </div>
        {errors? <div className='errors'>{errors} </div>:null}
        <div> Already have an account? </div>
            <label>{isLoading ? "Loading..." : null }</label>
            <button className='primary-btn' onClick={onClick}> Log in! </button>
    </div>
    )
}
export default Signup;