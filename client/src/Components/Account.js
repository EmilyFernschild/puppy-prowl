import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AccountAppoint from "./AccountAppoint";
import { useNavigate } from "react-router-dom";
import AccountDogs from "./AccountDogs";
import AccountReview from "./AccountReview";

function Account({client, clientToEdit, reviews, onUpdateClient, setClient, updateAppt, deleteAppt, deleteReview, appointments, deleteDog, pups, deleteClient, EditPup}){
    const [accountFormData, setAccountFormData] = useState(clientToEdit)
    const [expandDog, setExpandDog] = useState(false)
    const [expandAppoint, setExpandAppoint] = useState(false)
    const [expandReview, setExpandReview] = useState(false)
    const [isForm, setIsForm] = useState(false)
    const [errors, setErrors] = useState([])

    function expandDogForm(){
        setExpandDog(prev => !prev)
    }
    function expandAppointForm(){
        setExpandAppoint(prev => !prev)
    }
    function expandReviewForm(){
        setExpandReview(prev => !prev)
    }

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
        fetch(`/clients/${client.id}`, {
            method:"DELETE",
        })
        deleteClient(client)
    }

    return (
        <div>
           <h3> Profile:</h3>
           {!isForm ?
            <div>
                <div>Name: {client.client_name}</div>
                <div>Email: {client.email}</div>
                <div>Address: {client.address}</div>
                <div>Phone Number: {client.phone_number}</div> 
                <div>Username: {client.username}</div>
            </div>:
            <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                    type="text" 
                    name="name" 
                    defaultValue={client.client_name} 
                    onChange={handleChange} 
                />
                <br/>
                <label>Email: </label>
                <input 
                    type="text" 
                    name="email" 
                    defaultValue={client.email} 
                    onChange={handleChange} 
                />
                <br/>
                <label>Address: </label>
                <input 
                    type="text" 
                    name="address" 
                    defaultValue={client.address} 
                    onChange={handleChange} 
                />
                <br/>
                <label>Phone Number: </label>
                <input 
                    type="text" 
                    name="phone_number" 
                    defaultValue={client.phone_number} 
                    onChange={handleChange} 
                />
                <br/>
                <label>Username: </label>
                <input 
                    type="text" 
                    name="username" 
                    defaultValue={client.username} 
                    onChange={handleChange} 
                />
                <br/>
                <label>Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    defaultValue={client.password} 
                    onChange={handleChange} 
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
            {errors? <div className='errors'>{errors}</div>:null}
            </div>
            }
           <br/>
            <button onClick={handleForm}>{!isForm? "Update Profile": "Close Update"}</button>
           <br/>
           <br/>
           <button className='btnPrimary' onClick = {onClick}> New Dog? </button>
           <br/>
           <br/>
           <button onClick={expandDogForm}>Dog(s)</button>
            {client.dogs?.map((dog) => {
               return <AccountDogs key={dog.id} dog={dog} expand={expandDog} deleteDog={deleteDog} EditPup={EditPup}/>
           })}
           <br/>
           <button onClick={expandAppointForm}>Appointments</button>
           {client.appointments?.map((appointment) => {
               return <AccountAppoint key={appointment.id}  expand={expandAppoint} appointment={appointment} updateAppt={updateAppt} deleteAppt={deleteAppt} appointments={appointments} />
           })}
           <br/>
           <button onClick={expandReviewForm}>Reviews</button>
           {client.reviews?.map((review) =>{
                return <AccountReview key={review.id} expand={expandReview} review={review} deleteReview={deleteReview} />
           })}
           <br/>
           <button onClick={handleDelete}>Delete Account</button>
        </div>
    )
}
export default Account;