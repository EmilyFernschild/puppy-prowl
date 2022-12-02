import WalkerCard from "./WalkerCard";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function WalkersContainer({walkers}){
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
            <Card.Img className="walker-img" src="https://images.unsplash.com/photo-1603682232379-f6d3cc557c11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
            {walkers?.map(walker => <WalkerCard key={walker.id} walker={walker} />)}
            <Button className="walker-btn" onClick = {onReview} >Add a Review! </Button>
            <Button className="walker-btn" onClick = {onBook} >Book a Walk! </Button>
        </div>
    )
}
export default WalkersContainer;