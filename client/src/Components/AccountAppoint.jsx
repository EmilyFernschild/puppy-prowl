import { compareAsc } from 'date-fns';
import moment from "moment";

function AccountAppoint({appointment, expand, deleteAppt}){

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
            <div className="profile-text">
                <div className="text">
                    {fDates} 
                    <button className="secondary-btn" id="x-btn" onClick={handleDelete}>x</button>
                </div>
            </div>
            }
        </div>
    )
}
export default AccountAppoint;