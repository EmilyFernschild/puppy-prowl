import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navigation">
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/PupsContainer">Puppies</NavLink>
            <NavLink to = "/WalkersContainer">Dog Walkers</NavLink>
            <NavLink to = "/Login">Login/Signup</NavLink>
            <NavLink to = "/Appointments">Schedule a Walk!</NavLink>
            <NavLink to = "/Account">Account</NavLink>
        </nav>
    )
}
export default NavBar;