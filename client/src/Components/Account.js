import { useEffect } from "react";
import { useParams } from "react-router";
import AccountAppoint from "./AccountAppoint";
import { useNavigate } from "react-router-dom";
import AccountDogs from "./AccountDogs";

function Account({client, setClient, updateAppt, deleteAppt, appointments, deleteDog, pups, deleteClient, EditPup}){

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
    }, [id, appointments, pups])

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
            Account!
           <div>{client.client_name}</div>
           <div>{client.username}</div>
           <div>{client.email}</div>
           <div>{client.address}</div>
           <div>{client.phone_number}</div>
           <ul>Dog(s): {client.dogs?.map((dog) => {
               return <AccountDogs key={dog.id} dog={dog} deleteDog={deleteDog} EditPup={EditPup}/>
           })}
           </ul>
           <button className='btnPrimary' onClick = {onClick}> New Dog? </button>
           <div>Appointments: </div>
           {client.appointments?.map((appointment) => {
               return <AccountAppoint key={appointment.id} appointment={appointment} updateAppt={updateAppt} deleteAppt={deleteAppt} appointments={appointments} />
           })}
           <br/>
           <button onClick={handleDelete}>Delete Account</button>
        </div>
    )
}
export default Account;