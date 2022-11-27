import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function AccountDogs({dog, deleteDog, EditPup}){

    let navigate = useNavigate();

    function handleDelete(){
        fetch(`/dogs/${dog.id}`, {
            method:"DELETE",
        })
        deleteDog(dog)
    }

    function handleEdit(e){
       e.preventDefault()
       EditPup(dog) 
       navigate(`/dogs/${dog.id}`)
    }

    return (
        <div>
           <>{dog.dog_name} </>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>x</button>
        </div>
    )
}
export default AccountDogs;