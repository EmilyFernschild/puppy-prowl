import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import moment from "moment";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Appointments({walkers, client, addNewAppointment, appointments}){
    const [date, setDate] = useState("");
    const [dogWalkerId, setDogWalkerId] = useState("");
    const [clientId, setClientId] = useState(client.id);
    const [numberOfDogs, setNumberOfDogs] = useState(0);
    const [groupWalks, setGroupWalks] = useState(false);
    const [errors, setErrors] = useState([]);
    
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const availableDate = new Date(time);
        const availableHours = currentDate.getTime() < availableDate.getTime() 
        return availableHours
      };

    const walkerAppts = appointments.filter((appt) => appt.walker_id === parseInt(dogWalkerId))
    const excludedTimes = walkerAppts.map((appt)=> moment(appt.appointment)._d.getTime())
        
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
    <div className="form-container"> 
        <div className="form-border">
        <div className="form-pic">
            <img alt="form decor" src="https://images.unsplash.com/photo-1621942399851-cdcbdd190d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img>
        </div>
        <div className="form">
        <Form onSubmit={handleSubmit}>
            <h2>Schedule a Walk!</h2>
            <h3>Welcome <Form.Label type="text" name="client_id" value={clientId} onChange={(e)=>{setClientId(e.target.value)}} >{client.client_name}</Form.Label>!</h3>
            <FloatingLabel controlId="floatingSelect" label="Please pick a Dog Walker:">
                <Form.Select aria-label="Floating label select example" name="walker_id" value={dogWalkerId} onChange={(e)=>{setDogWalkerId(e.target.value)}}>
                <option value="">Select...</option>
                {walkers.map((walker)=>{
                    return <option key={walker.id} value={walker.id}>{walker.walker_name}</option>
                })}
                </Form.Select>
            </FloatingLabel>
            <Form.Group className="mb-3">
                <Form.Label>How many dogs do you have?</Form.Label>
                <Form.Control type='number' name='numberOfDogs' value={numberOfDogs} onChange={(e)=>{setNumberOfDogs(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Are you okay with group walks?</Form.Label>
                <Form.Check type='switch' id="custom-switch" label="Check this switch!" name='groupWalks' value={groupWalks} onChange={(e)=>{setGroupWalks(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Please select a date and time: </Form.Label>
            <DatePicker
                className="datepicker"
                placeholderText="Click to select a date"
                selected={date}
                onChange={(date)=>{setDate(date)}}
                name='date'
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                isClearable={true}
                minDate={new Date()}
                maxDate={addDays(new Date(), 91)}
                withPortal
                showMonthDropdown
                minTime={setHours(setMinutes(new Date(), 0), 8)}
                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                filterTime={filterPassedTime}
                excludeTimes={excludedTimes}
            />
            </Form.Group>
            <button variant="primary" className="primary-btn" type="submit">Submit Appointment!</button>
        </Form>
            {errors? <div className='errors'>{errors} </div>:null}
        </div>
        </div>
    </div>
    )
}

export default Appointments;