import WalkerCard from "./WalkerCard";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function WalkersContainer({walkers, client}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <img className="walker-img" alt="Us holding dogs!" src="https://images.unsplash.com/photo-1603682232379-f6d3cc557c11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
            {walkers?.map(walker => <WalkerCard key={walker.id} walker={walker} />)}
            {client? <button className="walker-btn" onClick={onReview}>Add a Review! </button>:<button onClick={handleShow} className="walker-btn">Add a Review! </button>}
            {client? <button className="walker-btn" onClick={onBook} >Book a Walk! </button>:<button className="walker-btn" onClick={handleShow} >Book a Walk! </button>}
            <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Not Logged In</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please sign up or login!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    )                       
}
export default WalkersContainer;