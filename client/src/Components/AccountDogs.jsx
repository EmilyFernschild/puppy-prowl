import { useNavigate } from "react-router-dom";

function AccountDogs({dog, deleteDog, EditPup, expand}){

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
        <div className="profile-li">
            {expand && 
                <h4 id="text">
                {dog.dog_name}{" "}
                <button className="secondary-btn" onClick={handleEdit}>Edit</button>
                <button className="secondary-btn" onClick={handleDelete}>x</button>
                </h4>
            }
        </div>
    )
}
export default AccountDogs;