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
                <div className="profile-text">
                    <h4 className="text">
                    {dog.dog_name}{" "}
                    <button className="secondary-btn" id="edit-btn" onClick={handleEdit}>Edit</button>
                    <button className="secondary-btn" id="x-btn" onClick={handleDelete}>x</button>
                    </h4>
                </div>
            }
        </div>
    )
}
export default AccountDogs;