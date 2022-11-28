// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";

function NavBar({updateClient, client}){
    // const[isLoading, setIsLoading] = useState(false)
    const [menu, setMenu] = useState(false)

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
        <div>
          {!menu?
           <div onClick={() => setMenu(!menu)}>
             <GiHamburgerMenu size={40}/> 
           </div>:
           <nav className="navigation">
              <NavLink to = "/">Home</NavLink>
              <br/>
              {client?<NavLink to = "/PupsContainer">Puppies</NavLink>:null}
              <br/>
              <NavLink to = "/WalkersContainer">Dog Walkers</NavLink>
              <br/>
              {client?<NavLink to = "/Appointments">Schedule a Walk!</NavLink>:null}
              <br/>
              {client?<NavLink to = {`/client/${client.id}`}>Account</NavLink>:null}
              <br/>
              {!client?<NavLink to = "/Login">Login</NavLink>:
              <NavLink to = "/" onClick={handleLogOut}>Logout</NavLink>}
              <br/>
              <button onClick={() => setMenu(!menu)}>^</button>
            </nav>}
        </div>
    )
}

export default NavBar;