import { compareAsc } from 'date-fns';
import moment from "moment";
import ListGroup from 'react-bootstrap/ListGroup';

function Review({review}){
    const rdates = [moment(review.date).utc().format('MM/DD/YYYY h:mm a')]
    const reviewDates = rdates.sort(compareAsc)
   
    return (
        <div>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className='reviews'>{`"${review.comment}" -${reviewDates}`}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Review;