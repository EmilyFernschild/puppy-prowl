import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AccountAppoint from "./AccountAppoint";
import { useNavigate } from "react-router-dom";
import AccountDogs from "./AccountDogs";
import AccountReview from "./AccountReview";
import { confirmAlert } from 'react-confirm-alert';
import Form from 'react-bootstrap/Form';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Account({client, clientToEdit, reviews, onUpdateClient, setClient, updateAppt, deleteAppt, deleteReview, appointments, deleteDog, pups, deleteClient, EditPup}){
    const [accountFormData, setAccountFormData] = useState(clientToEdit)
    const [expandDog, setExpandDog] = useState(false)
    const [expandAppoint, setExpandAppoint] = useState(false)
    const [expandReview, setExpandReview] = useState(false)
    const [isForm, setIsForm] = useState(false)
    const [errors, setErrors] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountFormData(accountFormData => ({ ...accountFormData, [name]: value }));
      };

    function handleForm(){
        setIsForm(prev => !prev)
      }

    const { id } = useParams();
    let navigate = useNavigate();
    
    useEffect(() =>{
        fetch(`/clients/${id}`)
        .then((r) => {
            if (r.ok){
                r.json().then(setClient)
            } else {
                r.json().then((err) => err.error)
            }
        })
    }, [id, appointments, pups, reviews])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/clients/${client.id}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(accountFormData),
        })
          .then((r) => {
            if(r.ok){
            r.json().then((updatedClient) => {
              onUpdateClient(updatedClient)
              setIsForm(false)
            })
        } else {
            r.json().then((err) => setErrors(err.errors))
            }
        })
      };


    function onClick(e){
        e.preventDefault()
        navigate(`/NewPupForm`)
    }

    function handleDelete(){
        confirmAlert({
            title: 'Delete Account',
            message: 'Are you sure you want to delete?',
            buttons: [
            {
            label: 'Yes',
            onClick: () => {
                fetch(`/clients/${client.id}`, {
                    method:"DELETE",
                });
                fetch('/logout', {
                    method: "DELETE"
                });
                deleteClient(client)
                navigate(`/login`)
            }},
            {
                label: 'No'
            }
          ]
        })
    }
    

    return (
        <div className="profile">
           <img className="logo" alt="profile logo" src="https://cdn-icons-png.flaticon.com/512/5494/5494947.png"/>
           <h2> Profile:</h2>
           {!isForm ?
            <div className='account-form-container'>
                <div className="account-nonform">
                <div>Name: 
                    <div className="profile-txt">{client.client_name}</div>
                </div>
                <div>Email: 
                    <div className="profile-txt">{client.email}</div>
                </div>
                <div>Address: 
                    <div className="profile-txt">{client.address}</div>
                </div>
                <div>Phone Number: 
                    <div className="profile-txt">{client.phone_number}</div>
                </div> 
                <div>Username: 
                    <div className="profile-txt">{client.username}</div>
                </div>
                </div>
            </div>:
            <div className='account-form-container'>
            <Form onSubmit={handleSubmit} className="account-form">
                <Form.Label>Name: </Form.Label>
                <Form.Control 
                    type="text" 
                    name="name" 
                    defaultValue={client.client_name} 
                    onChange={handleChange} 
                />
                <Form.Label>Email: </Form.Label>
                <Form.Control 
                    type="text" 
                    name="email" 
                    defaultValue={client.email} 
                    onChange={handleChange} 
                />
                <Form.Label>Address: </Form.Label>
                <Form.Control 
                    type="text" 
                    name="address" 
                    defaultValue={client.address} 
                    onChange={handleChange} 
                />
                <Form.Label>Phone Number: </Form.Label>
                <Form.Control
                    type="text" 
                    name="phone_number" 
                    defaultValue={client.phone_number} 
                    onChange={handleChange} 
                />
                <Form.Label>Username: </Form.Label>
                <Form.Control 
                    type="text" 
                    name="username" 
                    defaultValue={client.username} 
                    onChange={handleChange} 
                />
                <Form.Label>Password: </Form.Label>
                <Form.Control
                    type="password" 
                    name="password" 
                    defaultValue={client.password} 
                    onChange={handleChange} 
                />
                <button className="primary-btn" type="submit">Submit</button>
            </Form>
            {errors? <div className='errors'>{errors}</div>:null}
            </div>
            }
           <button className="primary-btn" onClick={handleForm}>{!isForm? "Update Profile": "Close Update"}</button>
           <br/>
           <button className="primary-btn" onClick = {onClick}> New Dog? </button>
           <br/>
           <div className="links-container">
                <div className="profile-btn-container">
                <button className="secondary-btn" onClick={()=> setExpandDog(!expandDog)}>Dogs</button>
                    <div className="profile-li">{client.dogs?.map((dog) => {
                        return <AccountDogs key={dog.id} dog={dog} expand={expandDog} deleteDog={deleteDog} EditPup={EditPup}/>
                    })}
                    </div>
                </div>
                <div className="profile-btn-container">
                <button className="secondary-btn" onClick={()=> setExpandAppoint(!expandAppoint)}>Appointments</button>
                    <div className="profile-li">{client.appointments?.map((appointment) => {
                        return <AccountAppoint key={appointment.id}  expand={expandAppoint} appointment={appointment} updateAppt={updateAppt} deleteAppt={deleteAppt} appointments={appointments} />
                    })}
                    </div>
                </div>
                <div className="profile-btn-container">
                <button className="secondary-btn" onClick={()=> setExpandReview(!expandReview)}>Reviews</button>
                    <div className="profile-li">{client.reviews?.map((review) =>{
                        return <AccountReview key={review.id} expand={expandReview} review={review} deleteReview={deleteReview} />
                    })}
                    </div>
                </div>
           </div>
           <button className="delete-btn" onClick={handleDelete}>Delete Account</button>
        </div>
    )
}
export default Account;