

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
            <div className="profile-text">
                <div className="text">
                    {review.comment} 
                    <button className="secondary-btn" id="x-btn" onClick={handleDelete}>x</button> 
                </div>
            </div>
            }
        </div>
    )
}
export default AccountReview;