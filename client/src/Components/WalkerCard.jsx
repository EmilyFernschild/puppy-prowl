import Review from "./Review";
import Card from 'react-bootstrap/Card';

function Walker({walker}){
    return(
         <div className="walkercards">
         <Card className="walker-card">
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
            <Card.Text className="list-group-flush">{walker.reviews?.map((review) => <Review key={review.id} review={review} />)}</Card.Text>
           </Card.Body>
           <br/>
        </Card>
        </div>
    )
}

export default Walker;