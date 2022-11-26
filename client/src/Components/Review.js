import { compareAsc } from 'date-fns';
import moment from "moment";
import { FixedSizeList as List } from "react-window";

function Review({review}){
    const rdates = [moment(review.date).utc().format('MM/DD/YYYY h:mm a')]
    const reviewDates = rdates.sort(compareAsc)
    // const allReviews = `"${review.comment}" -${reviewDates}`

    // const Row = ({ index, key, style }) => (
    //     <div>
    //      <div key={key} style={style} className="post">
    //        <h3>{allReviews}</h3>
    //      </div>
    //     </div>
    //    )

    return (
        <div>
            <ul>
                <li>{`"${review.comment}" -${reviewDates}`}</li>
            </ul>
            {/* <List
                width={1400}
                height={700}
                itemCount={data.length}
                itemSize={120}
                >
                {Row}
            </List> */}
             
        </div>
    )
}

export default Review;