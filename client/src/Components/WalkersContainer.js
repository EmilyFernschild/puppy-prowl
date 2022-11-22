import WalkerCard from "./WalkerCard"

function WalkersContainer({walkers}){
   
    return (
        <div>
            {walkers?.map(walker => <WalkerCard key={walker.id} walker={walker} />)}
        </div>
    )
}
export default WalkersContainer;