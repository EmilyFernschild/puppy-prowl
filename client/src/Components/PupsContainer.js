import PupCard from "./PupCard"

function PupsContainer({pups}){
    return (
        <div className="PupContainer">
            {pups?.map(pup => <PupCard key={pup.id} pup={pup} />)}
        </div>
    )
}
export default PupsContainer;