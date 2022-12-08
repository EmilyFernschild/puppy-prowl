import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function EditPupForm({ pupToEdit = {}, onUpdatePup, client }){
    const [formData, setFormData] = useState(pupToEdit);
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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
    <Form onSubmit={handleSubmit} className='edit-pup-form' >
      <h3>Edit Puppy Info</h3>
      <Form.Label>Dog Name: </Form.Label>
      <Form.Control
        type='text'
        name='dog_name'
        defaultValue={pupToEdit.dog_name}
        onChange={handleChange}
      />
      <Form.Label>Dog Image:</Form.Label>
      <Form.Control
        type='text'
        name='dog_image'
        defaultValue={pupToEdit.dog_image}
        onChange={handleChange}
      />
      <Form.Label>Gender:</Form.Label>
      <Form.Control
        type='text'
        name='gender'
        defaultValue={pupToEdit.gender}
        onChange={handleChange}
      />
      <Form.Label >Age:</Form.Label>
      <Form.Control
        type='text'
        name='age'
        defaultValue={pupToEdit.age}
        onChange={handleChange}
      />
      <Form.Label>Size:</Form.Label>
      <Form.Control
        type='text'
        name='size'
        defaultValue={pupToEdit.size}
        onChange={handleChange}
      />
      <button className="primary-btn" type="submit">Update Dog</button>
    </Form>
      {errors? <div className='errors'>{errors}</div>:null} 
      <div>{isLoading ? "Loading..." : null }</div>
    </div>
    )
}
export default EditPupForm;