
function Pups({pup}){
    return (
        <div className="PupCard">
            <div>{`My name is:  ${pup.dog_name}`}</div>
            <img className="PupCardImg" alt="puppy" src={pup.dog_image} />
            <div>{`Gender: ${pup.gender}`}</div>
            <div>{`I am ${pup.size} size for my breed!`}</div>
        </div>
    )
}
export default Pups;