import { compareAsc } from 'date-fns';
import moment from "moment";

function Review({review}){
    const rdates = [moment(review.date).utc().format('MM/DD/YYYY h:mm a')]
    const reviewDates = rdates.sort(compareAsc)
   
    return (
        <div>
            <div className='card-text'>{`"${review.comment}" -${reviewDates}`}</div>
        </div>
    )
}

export default Review;