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
        <h1 className="Title" onClick={navHome}>PuppyProwl</h1>
        </div>
        <Nav >
          <Menu >
          {!menu?
           <div onClick={() => setMenu(!menu)}>
             <GiHamburgerMenu size={40}/> 
           </div>:
           <ul >
              {client?<li><NavLink to = "/PupsContainer">Puppies</NavLink></li>:null}
              <br/>
              <li><NavLink to = "/WalkersContainer">Dog Walkers</NavLink></li>
              <br/>
              {client?<li><NavLink to = "/Appointments">Schedule a Walk!</NavLink></li>:null}
              <br/>
              {client?<li><NavLink to = {`/client/${client.id}`}>Account</NavLink></li>:null}
              <br/>
              {!client?<li><NavLink to = "/Login">Login</NavLink></li>:
              <li><NavLink to = "/" onClick={handleLogOut}>Logout</NavLink></li>}
              <br/>
              <li onClick={() => setMenu(!menu)}>^</li>
            </ul>}
            </Menu>
        </Nav>
        </div>
    )
}

export default NavBar;

// const Nav = styled.div`
//   position: relative;
//   display: inline-block;
//   justify-content:space-between;
//   align-content:right;
// `;

// const Menu = styled.div`
//   display: inline-block;
//   position: absolute;
//   align-items: right;
//   a{
//     text-decoration: none;
//     color:black;
//     font-family: monospace;
//     font-size: 16px;
//     display: block;
//     right: 0;
//   }
//   a:hover{
//     color:green;
//     display: block;
//   }
//   ul{
//     list-style:none;
//     background-color: white;
//   }
// `;

const Nav = styled.div`
  display: flex;
  justify-content:space-between;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color:black;
    font-family:Arial;
  }
  a:hover{
    color:green;
  }
  ul{
    list-style:none;
  }
  
`;