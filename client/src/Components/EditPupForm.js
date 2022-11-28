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
        const updatedPupObj = {
          dog_image: newImg,
          dog_name: newName,
          gender: newGender,
          age: newAge,
          size: newSize
      }
        fetch(`/dogs/${pupToEdit.id}`,{
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedPupObj),
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
    <div>
    <form onSubmit={handleSubmit} className="form" >
      <h3>Edit Puppy Info</h3>
      <label>Dog Name: </label>
      <br/>
      <input
        type='text'
        name='newName'
        defaultValue={pupToEdit.dog_name}
        onChange={handleChange}
      />
      <br/>
      <label>Dog Image:</label>
      <br/>
      <input
        type='text'
        name='newImg'
        defaultValue={pupToEdit.dog_image}
        onChange={handleChange}
      />
      <br/>
      <label>Gender:</label>
      <br/>
      <input
        type='text'
        name='newGender'
        defaultValue={pupToEdit.gender}
        onChange={handleChange}
      />
      <br/>
      <label >Age:</label>
      <br/>
      <input
        type='text'
        name='newAge'
        defaultValue={pupToEdit.age}
        onChange={handleChange}
      />
      <br/>
      <label>Size:</label>
      <br/>
      <input
        type='text'
        name='newSize'
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