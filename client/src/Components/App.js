// import { useState, useEffect } from "react";
import "../App.css"
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import PupsContainer from "./PupsContainer";
import WalkersContainer from "./WalkersContainer";
import Login from "./Login";
import Signup from "./Signup";
import Appointments from "./Appointments";
import Account from "./Account";
import NewPupForm from "./NewPupForm";
import { useState, useEffect } from "react";

function App() {
  const [pups, setPups] = useState([])
  const [walkers, setWalkers] = useState([])
  const [client, setClient] = useState(false)
  const [appointments, setAppointments] = useState([])

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

  useEffect(() => {
    fetch("/appointments")
    .then((res) => res.json())
    .then((data) => setAppointments(data))
  },[])

  useEffect(() => {
    fetch("/user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setClient(user));
      }
    })
  }, [])

  const updateClient = (client) => setClient(client)

  function addNewAppointment(newApptObj){
    setAppointments(prev => [...prev, newApptObj])
  }

  function updateAppt(updatedApptObj){
    const newApptObj = appointments?.map((appt)=> {
      if(appt.id === updatedApptObj.id){
        return (updatedApptObj)
      } else
      return appt
    })
    setAppointments(newApptObj)
  }

  function deleteAppt(deletedAppt){
    const updatedAppts = appointments.filter((appt)=> appt.id !== deletedAppt.id)
    setAppointments(updatedAppts)
  }

  function deleteDog(deletedDog){
    const updatedDogs = pups.filter((dog)=> dog.id !== deletedDog.id)
    setAppointments(updatedDogs)
  }

  function deleteClient(deletedClient){
    const updatedClients = client.id !== deletedClient.id
    setClient(updatedClients)
  }

  function addNewPup(newPupObj){
    setPups( prev => [...prev, newPupObj])
  }

  return (
    <div className="App">
      <NavBar client={client} updateClient={updateClient} />
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/PupsContainer" element = {<PupsContainer pups={pups} />}/>
        <Route path="/NewPupForm" element = {<NewPupForm addNewPup={addNewPup} client={client} />}/>
        <Route path="/WalkersContainer" element = {<WalkersContainer walkers={walkers} />}/>
        <Route path="/Login" element = {<Login updateClient={updateClient} />}/>
        <Route path="/Signup" element = {<Signup updateClient={updateClient} />}/>
        <Route path="/Appointments" element = {<Appointments walkers={walkers} client={client} addNewAppointment={addNewAppointment} />}/>
        <Route path="/client/:id" element = {<Account pups={pups} appointments={appointments} updateAppt={updateAppt} deleteAppt={deleteAppt} deleteClient={deleteClient} deleteDog={deleteDog} client={client} setClient={setClient} />}/>
     </Routes>
    </div>
  );
}

export default App;
