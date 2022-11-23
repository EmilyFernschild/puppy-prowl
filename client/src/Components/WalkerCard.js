import { useNavigate } from "react-router-dom";

function Walker({walker}){

    let navigate = useNavigate();

    function onClick(e){
        e.preventDefault()
        navigate(`/Appointments`)
    }

    return (
        <div>
           <div>{walker.walker_name}</div>
           <div>{walker.walker_email}</div>
           <div>{walker.services}</div>
           <div>{`$${walker.rates}/hour`}</div>
           <div>{walker.location}</div>
           <ul>{walker.reviews?.map((review) => <li key={review.id}>{review.date} {review.comment}</li>)}</ul>
           {/* need to have a button to go to review form to create new review */}
           <button onClick = {onClick} >Book A Walk!</button>
           <br/>
        </div>
    )
}

export default Walker;