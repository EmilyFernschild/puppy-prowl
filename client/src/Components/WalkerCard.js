
function Walker({walker}){
    return (
        <div>
           <div>{walker.walker_name}</div>
           <div>{walker.walker_email}</div>
           <div>{walker.services}</div>
           <div>{`$${walker.rates}/hour`}</div>
           <div>{walker.location}</div>
           <br/>
        </div>
    )
}

export default Walker;