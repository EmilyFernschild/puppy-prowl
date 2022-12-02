import { compareAsc } from 'date-fns';
import moment from "moment";
import { useState } from "react";

function AccountAppoint({appointment, updateAppt, expand, deleteAppt}){
    
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
    
        const dates = [moment(appointment.appointment).utc('America/New_York').format('LLLL')] // need to convert to eastern standard time
        const fDates = dates.sort(compareAsc)
        
    return (
        <div className="profile-li">
            {expand && 
            <div id="text" >{fDates} <button className="secondary-btn" onClick={handleDelete}>x</button></div>
            }
            {/* <button onClick={handleUpdate}>Update</button> */}
        </div>
    )
}
export default AccountAppoint;