import Review from "./Review";
import Card from 'react-bootstrap/Card';

function Walker({walker}){
    return(
         <div className="walkercards">
         <div className="walker-card">
           <br />
           <Card.Body className='card-body' style={{ width: '90rem' }}>
           <Card.Title className='card-text' id="card-title">{walker.walker_name}</Card.Title>
           <Card.Text className='card-text'>
            {walker.walker_email}
            <br />
            {walker.services}
            <br />
            {`$${walker.rates}/hour`}
            <br />
            {walker.location}
            </Card.Text>
            <div className='review-card'><div className="review-title">Reviews:</div>{walker.reviews?.map((review) => <Review key={review.id} review={review} />)}</div>
           </Card.Body>
           <br/>
        </div>
        </div>
    )
}

export default Walker;