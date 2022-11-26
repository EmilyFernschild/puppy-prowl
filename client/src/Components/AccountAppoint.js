import { compareAsc } from 'date-fns';
import moment from "moment";

function AccountAppoint({appointment, updateAppt, deleteAppt}){

    // function handleUpdate(){
    //     fetch(`/appointments/${appointment.id}`, {
    //         method: "PATCH",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             appointments: appointment.appointment
    //         })
    //     }).then((r) => r.json())
    //     .then((data) => {
    //         updateAppt(data)
    //     })
    // }

    function handleDelete(){
        fetch(`/appointments/${appointment.id}`, {
            method:"DELETE",
        })
        deleteAppt(appointment)
    }
    
        const dates = [moment(appointment.appointment).utc().format('LLLL')]
        const fDates = dates.sort(compareAsc)
        
    return (
        <div>
            <div>{fDates}</div>
            {/* <button onClick={handleUpdate}>Update</button> */}
            <button onClick={handleDelete}>x</button>
        </div>
    )
}
export default AccountAppoint;