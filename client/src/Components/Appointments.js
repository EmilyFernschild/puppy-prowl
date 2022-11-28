import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'

function Appointments({walkers, client, addNewAppointment}){
    const [date, setDate] = useState("");
    // const timeSlotCacheRef = useRef(new Map());
    const [dogWalkerId, setDogWalkerId] = useState("");
    const [clientId, setClientId] = useState(client.id);
    const [numberOfDogs, setNumberOfDogs] = useState(0);
    const [groupWalks, setGroupWalks] = useState(false);
    const [errors, setErrors] = useState([]);

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
      };
      
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

    // function handleDateSelect(){

    // }

    return (
    <div> 
        <form onSubmit={handleSubmit}>
            <h3>Schedule a Walk!</h3>
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
            {/* <input type='date' name='date' value={date} onChange={(e)=>{setDate(e.target.value)}}/> */}
            <DatePicker
                placeholderText="Click to select a date"
                selected={date}
                // onSelect={handleDateSelect}
                onChange={(date)=>{setDate(date)}}
                name='date'
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm"
                isClearable={true}
                minDate={new Date()}
                maxDate={addDays(new Date(), 14)}
                withPortal
                showMonthDropdown
                minTime={setHours(setMinutes(new Date(), 0), 8)}
                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                filterTime={filterPassedTime}
            />
            <br/>
            <button type="submit">Submit Dog Walk Appointment!</button>
        </form>
        {errors? <div className='errors'>{errors} </div>:null}
    </div>
    )
}

export default Appointments;