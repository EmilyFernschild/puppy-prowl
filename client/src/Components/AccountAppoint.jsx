import { compareAsc } from "date-fns";
import moment from "moment";

function AccountAppoint({ appointment, expand, deleteAppt }) {
  function handleDelete() {
    fetch(`/appointments/${appointment.id}`, {
      method: "DELETE",
    });
    deleteAppt(appointment);
  }

  const appt = [moment(appointment.appointment).utc("America/New_York").format("llll")];
  const fDates = appt.sort(compareAsc); // why not sorted ????

  return (
    <div className="profile-li">
      {expand && (
        <div className="profile-text">
          <div className="text">
            {fDates}
            <button className="secondary-btn" id="x-btn" onClick={handleDelete}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default AccountAppoint;
