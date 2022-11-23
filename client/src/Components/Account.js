import { useEffect } from "react";
import { useParams } from "react-router";

function Account({client, setClient}){

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
           <ul> Next appointment times:  {client.appointments?.map((appt) => {
               return <li key={appt.id}>{appt.appointment}</li>
           })}
           </ul>
        </div>
    )
}
export default Account;