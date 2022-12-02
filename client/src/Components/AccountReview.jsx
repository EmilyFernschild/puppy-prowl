

function AccountReview({review, deleteReview, expand}){

    function handleDelete(){
        fetch(`/reviews/${review.id}`, {
            method:"DELETE",
        })
        deleteReview(review)
    }

    return(
        <div id="text">
            {expand && 
            <li>{review.comment} <button className="secondary-btn" onClick={handleDelete}>x</button> </li>
            }
        </div>
    )
}
export default AccountReview;