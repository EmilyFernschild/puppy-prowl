import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appointments({walkers, client, addNewAppointment}){
    const [date, setDate] = useState(new Date());
    // const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    // const [bookingTimes, setBookingTimes] = useState([]);
    // const timeSlotCacheRef = useRef(new Map());
    const [dogWalkerId, setDogWalkerId] = useState("");
    const [clientId, setClientId] = useState(client.id);
    const [numberOfDogs, setNumberOfDogs] = useState(0);
    const [groupWalks, setGroupWalks] = useState(false);
    const [errors, setErrors] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    
    // const times = [
    //     "09:00 - 10:00",
    //     "10:00 - 11:00",
    //     "11:00 - 12:00",
    //     "12:00 - 13:00",
    //     "13:00 - 14:00",
    //     "14:00 - 15:00",
    //     "15:00 - 16:00",
    //     "16:00 - 17:00"
    //   ];
      
    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/appointments`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                number_of_dogs: numberOfDogs,
                group_walks: groupWalks,
                appointment: date,
                walker_id: parseInt(dogWalkerId),
                client_id: parseInt(clientId) 
            })
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => {
                    navigate(`/client/${client.id}`)
                    addNewAppointment(data)
                })
            } else {
                r.json().then(json => setErrors(json.errors))
            }
        })
    }

    return (
    <div> 
        <form onSubmit={handleSubmit}>
            <br/>
            Welcome <label type="text" name="client_id" value={clientId} onChange={(e)=>{setClientId(e.target.value)}} >{client.client_name}</label>!
            <br/>
            <label>Dog Walker: </label>
                <select name="walker_id" value={dogWalkerId} onChange={(e)=>{setDogWalkerId(e.target.value)}} >
                <option value="">Select...</option>
                {walkers.map((walker)=>{
                    return <option key={walker.id} value={walker.id}>{walker.walker_name}</option>
                })}
                </select>
            <br/>
            <label>How many dogs do you have?</label>
            <input type='integer' name='numberOfDogs' value={numberOfDogs} onChange={(e)=>{setNumberOfDogs(e.target.value)}}/>
            <br/>
            <label>Are you okay with group walks?</label>
            <input type='checkbox' name='groupWalks' value={groupWalks} onChange={(e)=>{setGroupWalks(e.target.value)}}/>
            <br/>
            <label>Please Select Date and Time: </label>
            <input type='date' name='date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            <br/>
            <button type="submit">Submit Dog Walk Appointment!</button>
        </form>
    </div>
    )
}

export default Appointments;