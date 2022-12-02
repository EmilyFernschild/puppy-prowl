

function AccountReview({review, deleteReview, expand}){

    function handleDelete(){
        fetch(`/reviews/${review.id}`, {
            method:"DELETE",
        })
        deleteReview(review)
    }

    return(
        <div className="profile-li" >
            {expand && 
            <div id="text">{review.comment} <button className="secondary-btn" onClick={handleDelete}>x</button> </div>
            }
        </div>
    )
}
export default AccountReview;