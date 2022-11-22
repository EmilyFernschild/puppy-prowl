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
           <button onClick = {onClick} >Book A Walk!</button>
           <br/>
        </div>
    )
}

export default Walker;