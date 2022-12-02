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
import Button from 'react-bootstrap/Button';

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

    const excludedTimes = appointments.map((appt)=> moment(appt.appointment)._d.getTime())
        
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
        <Form onSubmit={handleSubmit}>
            <h3>Schedule a Walk!</h3>
            Welcome <Form.Label type="text" name="client_id" value={clientId} onChange={(e)=>{setClientId(e.target.value)}} >{client.client_name}</Form.Label>!
            <FloatingLabel controlId="floatingSelect" label="Please pick which dog walker you prefer:">
                <Form.Select aria-label="Floating label select example" name="walker_id" value={dogWalkerId} onChange={(e)=>{setDogWalkerId(e.target.value)}}>
                <option value="">Select...</option>
                {walkers.map((walker)=>{
                    return <option key={walker.id} value={walker.id}>{walker.walker_name}</option>
                })}
                </Form.Select>
            </FloatingLabel>
            <Form.Group className="mb-3">
                <Form.Label>How many dogs do you have?</Form.Label>
                <Form.Control type='integer' name='numberOfDogs' value={numberOfDogs} onChange={(e)=>{setNumberOfDogs(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Are you okay with group walks?</Form.Label>
                <Form.Check type='switch' id="custom-switch" label="Check this switch!" name='groupWalks' value={groupWalks} onChange={(e)=>{setGroupWalks(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Please select a date and time: </Form.Label>
            <DatePicker
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
            <Button variant="primary" type="submit">Submit Dog Walk Appointment!</Button>
        </Form>
        {errors? <div className='errors'>{errors} </div>:null}
    </div>
    )
}

export default Appointments;