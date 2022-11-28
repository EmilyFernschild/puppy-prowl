import { useNavigate } from "react-router-dom";
import Review from "./Review";

function Walker({walker}){

    let navigate = useNavigate();

    function onBook(e){
        e.preventDefault()
        navigate(`/Appointments`)
    }
    function onReview(e){
        e.preventDefault()
        navigate(`/ReviewForm`)
    }

    return (
        <div>
           <br />
           <div>{walker.walker_name}</div>
           <div>{walker.walker_email}</div>
           <div>{walker.services}</div>
           <div>{`$${walker.rates}/hour`}</div>
           <div>{walker.location}</div>
           <ul>{walker.reviews?.map((review) => <Review key={review.id} review={review} />)}</ul>
           <button onClick = {onReview} >Add a Review! </button> 
           <button onClick = {onBook} >Book a Walk! </button>
           <br/>
        </div>
    )
}

export default Walker;