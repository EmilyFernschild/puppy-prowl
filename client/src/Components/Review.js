import { compareAsc } from 'date-fns';
import moment from "moment";

function Review({review}){
    const rdates = [moment(review.date).utc().format('MM/DD/YYYY h:mm a')]
    const reviewDates = rdates.sort(compareAsc)
   
    return (
        <div>
            <ul>
                <li>{`"${review.comment}" -${reviewDates}`}</li>
            </ul>
        </div>
    )
}

export default Review;