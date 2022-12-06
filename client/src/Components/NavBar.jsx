// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

function NavBar({updateClient, client}){
    // const[isLoading, setIsLoading] = useState(false)
    const [menu, setMenu] = useState(false)
    let navigate = useNavigate();

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
      
      function navHome(e){
        e.preventDefault()
        navigate(`/`)
    }

    return (
      <div>
        <div>
        <h1 className="Title" onClick={navHome}>{`Puppy🐾Prowl `}</h1>
        </div>
        <Nav >
          <Menu >
          {!menu?
           <div onClick={() => setMenu(!menu)}>
             <GiHamburgerMenu size={40}/> 
           </div>:
           <ul className="nav-dropdown">
              <li id="up" onClick={() => setMenu(!menu)}>^</li>
              {client?<li><NavLink to = "/PupsContainer">Puppies</NavLink></li>:null}
              <li><NavLink to = "/WalkersContainer">Dog Walkers</NavLink></li>
              {client?<li><NavLink to = "/Appointments">Schedule a Walk!</NavLink></li>:null}
              {client?<li><NavLink to = {`/client/${client.id}`}>Account</NavLink></li>:null}
              {!client?<li><NavLink to = "/Login">Login</NavLink></li>:
              <li><NavLink to = "/" onClick={handleLogOut}>Logout</NavLink></li>}
            </ul>}
            </Menu>
        </Nav>
      </div>
    )
}

export default NavBar;

const Nav = styled.div`
  display: flex;
  justify-content:space-between;
  float: right;
  margin-right: 210px;
  margin-top: 60px;
`;

const Menu = styled.div`
  display: flex;
  align-items:center;
  a{
    text-decoration: none;
    color: #7DE186;
    font-family: monospace;
    font-size: 18px;
    line-height: 1.8em;
  }
  a:hover{
    color: orange;
  }
  div,
  ul{
    position: absolute;
    list-style:none;
    text-align: left;
    border: 0.5px solid;
    padding: 0.5em;
    padding-bottom: 1em;
    padding-inline: 1em;
  }
  div{
    border: none;
    margin-left: 110px;
    margin-top: -140px;
  }
  li{
    position: relative;
  }
  #up{
    text-align: right;
    font-size: 18px;
    font-weight: bold;
  }
`;