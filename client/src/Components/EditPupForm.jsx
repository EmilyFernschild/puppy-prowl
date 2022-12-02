import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

function EditPupForm({ pupToEdit = {}, onUpdatePup, client }){
    const [formData, setFormData] = useState(pupToEdit);
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {newImg, newName, newGender, newAge, newSize } = formData;

    // useEffect(()=>{
    //   fetch(`/dogs/${pupToEdit.id}`)
    //     .then((res) => res.json())
    //     .then((pup) => setFormData(pup));
    // }, [pupToEdit.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
      };

      let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/dogs/${pupToEdit.id}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        })
          .then((r) => {
            setIsLoading(false)
            if(r.ok){
            r.json().then((updatedPup) => {
              onUpdatePup(updatedPup)
              navigate(`/client/${client.id}`)
            })
        } else {
            r.json().then((err) => setErrors(err.errors))
            }
        })
      };

    return(
    <div className='new-pup-form'>
    <form onSubmit={handleSubmit} className="form" >
      <h3>Edit Puppy Info</h3>
      <label>Dog Name: </label>
      <br/>
      <input
        type='text'
        name='dog_name'
        defaultValue={pupToEdit.dog_name}
        onChange={handleChange}
      />
      <br/>
      <label>Dog Image:</label>
      <br/>
      <input
        type='text'
        name='dog_image'
        defaultValue={pupToEdit.dog_image}
        onChange={handleChange}
      />
      <br/>
      <label>Gender:</label>
      <br/>
      <input
        type='text'
        name='gender'
        defaultValue={pupToEdit.gender}
        onChange={handleChange}
      />
      <br/>
      <label >Age:</label>
      <br/>
      <input
        type='text'
        name='age'
        defaultValue={pupToEdit.age}
        onChange={handleChange}
      />
      <br/>
      <label>Size:</label>
      <br/>
      <input
        type='text'
        name='size'
        defaultValue={pupToEdit.size}
        onChange={handleChange}
      />
      <br/>
      <button type="submit">Update Dog</button>
    </form>
      {errors? <div className='errors'>{errors}</div>:null} 
      <div>{isLoading ? "Loading..." : null }</div>
    </div>
    )
}
export default EditPupForm;