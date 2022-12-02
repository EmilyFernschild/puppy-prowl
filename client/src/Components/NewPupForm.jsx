import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const initialState = {
    newImg: "",
    newName: "",
    newGender: "",
    newAge: "",
    newSize: "",
  };

function NewPupForm({addNewPup, client}){
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        const newPupObj = {
            dog_image: formData.newImg,
            dog_name: formData.newName,
            gender: formData.newGender,
            age: formData.newAge,
            size: formData.newSize
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
        <div className='.new-pup-form'>
            <form onSubmit={handleSubmit}>
                <h3>Add Puppy Info</h3>
                <h5>If this is your first time signing in please add your dog(s)!</h5>
                <label>Dog Name: </label>
                <br/>
                <input 
                    type='text'
                    name='newName'
                    value={formData.newName}
                    onChange={handleChange}
                />
                <br/>
                <label>Dog Image:</label>
                <br/>
                <input
                    type='text'
                    name='newImg'
                    value={formData.newImg}
                    onChange={handleChange}
                />
                <br/>
                <label>Gender:</label>
                <br/>
                <input
                    type='text'
                    name='newGender'
                    value={formData.newGender}
                    onChange={handleChange}
                />
                <br/>
                <label>Age:</label>
                <br/>
                <input
                    type='text'
                    name='newAge'
                    value={formData.newAge}
                    onChange={handleChange}
                />
                <br/>
                <label>Size:</label>
                <br/>
                <input
                    type='text'
                    name='newSize'
                    value={formData.newSize}
                    onChange={handleChange}
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