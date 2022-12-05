import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function ReviewForm({client, walkers, addNewReview}){
    const [reviewDate, setReviewDate] = useState(new Date())
    const [reviewComment, setReviewComment] = useState("")
    const [clientId, setClientId] = useState("")
    const [walkerId, setWalkerId] = useState("")
    const [errors, setErrors] = useState([]);
    
    let navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const newReviewObj = {
            client_id: parseInt(clientId),
            walker_id: parseInt(walkerId),
            date: reviewDate,
            comment: reviewComment
        }
        fetch(`/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newReviewObj)
        }).then((r)=> {
            if (r.ok){
                r.json().then((review)=> {
                    addNewReview(review)
                    navigate(`/WalkersContainer`)
                })
            } else {
                r.json().then((err)=> setErrors(err.errors))
            }
        })
    }

    return(
        <div className='review-container'>
            <h2>Add a Review</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <h4>Welcome <label type="text" name="client_id" value={clientId} onChange={(e)=>{setClientId(e.target.value)}} >{client.client_name}</label>!</h4>
                <label>Select Dog Walker: </label>
                <br />
                <select name="walker_id" value={walkerId} onChange={(e)=>{setWalkerId(e.target.value)}} >
                <option value="">Select...</option>
                {walkers?.map((walker)=>{
                    return <option key={walker.id} value={walker.id}>{walker.walker_name}</option>
                })}
                </select>
                <br />
                <label>Comment: </label>
                <br />
                <textarea name="comment" value={reviewComment} onChange={(e)=>{setReviewComment(e.target.value)}} /> 
                <br />
                <button className="primary-btn" type='submit' value='Add Review!'>Add Review!</button>
            </form>
            {errors? <div className='errors'>{errors} </div>:null}
        </div>
    )
}
export default ReviewForm;