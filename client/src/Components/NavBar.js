// import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({updateClient, client}){
    // const[isLoading, setIsLoading] = useState(false)

    const handleLogOut = () => {
    //   setIsLoading(true)
        fetch(`/logout`, {
          method:"DELETE"
        })
        .then(res =>{
        //   setIsLoading(false)
          if(res.ok){
            updateClient(false)
          }
        })
      }

    return (
        <nav className="navigation">
            <NavLink to = "/">Home</NavLink>
            <br/>
            {client?<NavLink to = "/PupsContainer">Puppies</NavLink>:null}
            <br/>
            <NavLink to = "/WalkersContainer">Dog Walkers</NavLink>
            <br/>
            {client?<NavLink to = "/Appointments">Schedule a Walk!</NavLink>:null}
            <br/>
            {client?<NavLink to = "/NewPupForm">New Pup Form</NavLink>:null}
            <br/>
            {client?<NavLink to = {`/client/${client.id}`}>Account</NavLink>:null}
            <br/>
            {!client?<NavLink to = "/Login">Login</NavLink>:
            <NavLink to = "/" onClick={handleLogOut}>Logout</NavLink>}
            <br/>
        </nav>
    )
}

export default NavBar;