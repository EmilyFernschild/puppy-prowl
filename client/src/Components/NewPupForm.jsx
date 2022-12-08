import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

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
        <div className='new-pup-form'>
            <div className='form-container'>
            <Form onSubmit={handleSubmit} className='edit-pup-form' id="new-pup">
                <h2>Add Puppy Info</h2>
                <div>First time signing in?</div>
                <div>Please add your dog's information!</div>
                <Form.Label>Dog Name: </Form.Label>
                <Form.Control 
                    type='text'
                    name='newName'
                    value={formData.newName}
                    placeholder="e.g. Bailey"
                    onChange={handleChange}
                />
                <Form.Label>Dog Image:</Form.Label>
                <Form.Control
                    type='text'
                    name='newImg'
                    value={formData.newImg}
                    placeholder="e.g. https://image"
                    onChange={handleChange}
                />
                <Form.Label>Gender:</Form.Label>
                <Form.Control
                    type='text'
                    name='newGender'
                    value={formData.newGender}
                    placeholder="e.g. Female"
                    onChange={handleChange}
                />
                <Form.Label>Age:</Form.Label>
                <Form.Control
                    type='text'
                    name='newAge'
                    value={formData.newAge}
                    placeholder="e.g. Puppy"
                    onChange={handleChange}
                />
                <Form.Label>Size:</Form.Label>
                <Form.Control
                    type='text'
                    name='newSize'
                    value={formData.newSize}
                    placeholder="e.g. Small"
                    onChange={handleChange}
                />
                <button className="primary-btn" type='submit' value='Add New Dog!'>Add New Dog!</button>
            </Form>
            </div>
            {errors? <div className='errors'>{errors}</div>:null} 
            <div>{isLoading ? "Loading..." : null }</div>
        </div>
    )
}
export default NewPupForm;