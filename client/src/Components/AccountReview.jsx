

function AccountReview({review, deleteReview, expand}){

    function handleDelete(){
        fetch(`/reviews/${review.id}`, {
            method:"DELETE",
        })
        deleteReview(review)
    }

    return(
        <div>
            {expand && 
            <li>{review.comment} <button onClick={handleDelete}>x</button> </li>
            }
        </div>
    )
}
export default AccountReview;