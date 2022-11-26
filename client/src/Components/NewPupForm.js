import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function NewPupForm({addNewPup, client}){
    const [newImg, setNewImg] = useState("")
    const [newName, setNewName] = useState("")
    const [newGender, setNewGender] = useState("")
    const [newAge, setNewAge] = useState("")
    const [newSize, setNewSize] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        const newPupObj = {
            dog_image: newImg,
            dog_name: newName,
            gender: newGender,
            age: newAge,
            size: newSize
        }
        fetch(`/dogs`,{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPupObj)
        }).then((r) => {
            setIsLoading(false)
            if(r.ok){
                r.json().then((data) =>{
                    addNewPup(data)
                    navigate(`/client/${client.id}`)
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>Dog Name: </label>
                <br/>
                <input 
                    type='text'
                    name='newName'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <br/>
                <label>Dog Image:</label>
                <br/>
                <input
                    type='text'
                    name='newImg'
                    value={newImg}
                    onChange={(e) => setNewImg(e.target.value)}
                />
                <br/>
                <label>Gender:</label>
                <br/>
                <input
                    type='text'
                    name='newGender'
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value)}
                />
                <br/>
                <label>Age:</label>
                <br/>
                <input
                    type='text'
                    name='newAge'
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                />
                <br/>
                <label>Size:</label>
                <br/>
                <input
                    type='text'
                    name='newSize'
                    value={newSize}
                    onChange={(e) => setNewSize(e.target.value)}
                />
                <br/>
                <button className='btnPrimary' type='submit' value='Add New Dog!'>Add New Dog!</button>
                <br/>
            </form>
            {errors? <div className='errors'>{errors}</div>:null} 
            <div>{isLoading ? "Loading..." : null }</div>
        </div>
    )
}
export default NewPupForm;