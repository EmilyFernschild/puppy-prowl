

function AccountDogs({dog, deleteDog}){

    function handleDelete(){
        fetch(`/dogs/${dog.id}`, {
            method:"DELETE",
        })
        deleteDog(dog)
    }

    return (
        <div>
           <>{dog.dog_name} </> 
            <button onClick={handleDelete}>x</button>
        </div>
    )
}
export default AccountDogs;