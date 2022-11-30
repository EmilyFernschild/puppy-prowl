
function Pups({pup}){
    return (
    <div className="pup-card" style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
        <img className="card-img" src={pup.dog_image} alt="Puppy" style={{ height: `400px` }}/>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title">{`My name is:  ${pup.dog_name}`}</div>
                </div>
            </div>
            <div className="e-card-content">
            {`Gender: ${pup.gender}`}
            <br/>
            {`I am ${pup.size} size for my breed!`}
            </div>
        </div>
    </div>
        // <div className="PupCard">
        //     <div>{`My name is:  ${pup.dog_name}`}</div>
        //     <img className="PupCardImg" alt="puppy" src={pup.dog_image} />
        //     <div>{`Gender: ${pup.gender}`}</div>
        //     <div>{`I am ${pup.size} size for my breed!`}</div>
        // </div>
    )
}
export default Pups;