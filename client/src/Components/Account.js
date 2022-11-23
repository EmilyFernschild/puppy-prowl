import { useEffect } from "react";
import { useParams } from "react-router";
import AccountAppoint from "./AccountAppoint";

function Account({client, setClient, updateAppt, deleteAppt, appointments}){

    const { id } = useParams();
    
    useEffect(() =>{
        fetch(`/clients/${id}`)
        .then((r) => {
            if (r.ok){
                r.json().then(setClient)
            } else {
                r.json().then((err) => err.error)
            }
        })
    }, [id])
    

    return (
        <div>
            Account!
           <div>{client.client_name}</div>
           <div>{client.username}</div>
           <div>{client.email}</div>
           <div>{client.address}</div>
           <div>{client.phone_number}</div>
           <ul>Dog(s): {client.dogs?.map((dog) => {
               return <li key={dog.id}>{dog.dog_name}</li>
           })}
           </ul>
           <div>Appointments: </div>
           {client.appointments?.map((appointment) => {
               return <AccountAppoint key={appointment.id} appointment={appointment} updateAppt={updateAppt} deleteAppt={deleteAppt} appointments={appointments} />
           })}
        </div>
    )
}
export default Account;