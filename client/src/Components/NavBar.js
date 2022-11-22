import { useState } from "react";
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
            {client?<NavLink to = "/PupsContainer">Puppies</NavLink>:null}
            <NavLink to = "/WalkersContainer">Dog Walkers</NavLink>
            {client?<NavLink to = "/Appointments">Schedule a Walk!</NavLink>:null}
            {client?<NavLink to = {`/client/${client.id}`}>Account</NavLink>:null}
            {!client?<NavLink to = "/Login">Login/Signup</NavLink>:
            <NavLink to = "/" onClick={handleLogOut}>Logout</NavLink>}
        </nav>
    )
}
export default NavBar;