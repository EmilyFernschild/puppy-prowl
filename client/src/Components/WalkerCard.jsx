
import Review from "./Review";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Walker({walker}){

    return(
         <div>
        <Card >
           <br />
           <Card.Body style={{ width: '90rem' }}>
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
            </Card.Body>
           <ListGroup className="list-group-flush">{walker.reviews?.map((review) => <Review key={review.id} review={review} />)}</ListGroup>
           
           <br/>
        </Card>
        </div>
    )
}

export default Walker;