// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import PupsContainer from "./PupsContainer";
import WalkersContainer from "./WalkersContainer";
import Login from "./Login";
import Signup from "./Signup";
import Appointments from "./Appointments";
import Account from "./Account";
import { useState, useEffect } from "react";

function App() {
  const [pups, setPups] = useState([])
  const [walkers, setWalkers] = useState([])
  const [client, setClient] = useState(false)

  useEffect(() => {
    fetch("/dogs")
    .then((res) => res.json())
    .then((data) => setPups(data))
  },[])

  useEffect(() => {
    fetch("/walkers")
    .then((res) => res.json())
    .then((data) => setWalkers(data))
  },[])

  const updateClient = (client) => setClient(client)

  return (
    <div className="App">
      <NavBar client={client} updateClient={updateClient} />
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/PupsContainer" element = {<PupsContainer pups={pups} />}/>
        <Route path="/WalkersContainer" element = {<WalkersContainer walkers={walkers} />}/>
        <Route path="/Login" element = {<Login updateClient={updateClient} />}/>
        <Route path="/Signup" element = {<Signup updateClient={updateClient} />}/>
        <Route path="/Appointments" element = {<Appointments />}/>
        <Route path="/client/:id" element = {<Account client={client} setClient={setClient} />}/>
      </Routes>
    </div>
  );
}

export default App;
