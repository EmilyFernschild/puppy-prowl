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
import EditPupForm from "./EditPupForm";
import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import NotFound from "./NotFound";

function App() {
  const [pups, setPups] = useState([]);
  const [pupToEdit, setPupToEdit] = useState([]);
  const [walkers, setWalkers] = useState([]);
  const [client, setClient] = useState(false);
  const [clientToEdit, setClientToEdit] = useState([])
  const [appointments, setAppointments] = useState([]);
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("/dogs")
    .then((res) => res.json())
    .then((data) => setPups(data))
  },[pupToEdit])

  useEffect(() => {
    fetch("/walkers")
    .then((res) => res.json())
    .then((data) => setWalkers(data))
  },[reviews])

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

  function onUpdateAppt(updatedApptObj){
    const newApptObj = appointments?.map((appt)=> {
      if(appt.id === updatedApptObj.id){
        return (updatedApptObj)
      } else
      return appt
    })
    setAppointments(newApptObj)
  }
  
  function onUpdatePup (updatedPup){
    setPups(pups => pups?.map(pup => {
      if (pup.id === updatedPup.id) {
        return updatedPup;
      } else {
        return pup;
      }
    }))
    setPupToEdit([]);
  };

  function onUpdateClient (updatedClient){
    setClient(client => {
      if (client.id === updatedClient.id) {
        return updatedClient;
      } else {
        return client;
      }
    })
    setPupToEdit([])
  };

  const onEditPup = (pupToEdit) => {
    setPupToEdit(pupToEdit);
  };

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
  function deleteReview(deletedReview){
    const updatedReviews = reviews.filter((review)=> review.id !== deletedReview.id)
    setReviews(updatedReviews)
  }

  function addNewPup(newPupObj){
    setPups( prev => [...prev, newPupObj])
  }

  function addNewReview(newReviewObj){
    setReviews( prev => [...prev, newReviewObj])
  }

  return (
    <div className="App">
      <NavBar client={client} updateClient={updateClient} />
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/PupsContainer" element = {<PupsContainer pups={pups} setPups={setPups} client={client}/>}/>
        <Route path="/NewPupForm" element = {<NewPupForm addNewPup={addNewPup} client={client} />}/> 
        <Route path="/dogs/:id" element = {<EditPupForm pupToEdit={pupToEdit} onUpdatePup={onUpdatePup} client={client} pups={pups} />}/>
        <Route path="/WalkersContainer" element = {<WalkersContainer walkers={walkers} client={client} />}/>
        <Route path="/ReviewForm" element = {<ReviewForm client={client} walkers={walkers} addNewReview={addNewReview} />}/>
        <Route path="/Login" element = {<Login updateClient={updateClient} />}/>
        <Route path="/Signup" element = {<Signup updateClient={updateClient} />}/>
        <Route path="/Appointments" element = {<Appointments walkers={walkers} client={client} addNewAppointment={addNewAppointment} appointments={appointments} />}/>
        <Route path="/client/:id" element = {<Account pups={pups} EditPup={onEditPup} appointments={appointments} updateAppt={onUpdateAppt} deleteAppt={deleteAppt} deleteClient={deleteClient} deleteDog={deleteDog} deleteReview={deleteReview} client={client} setClient={setClient} clientToEdit={clientToEdit} reviews={reviews} onUpdateClient={onUpdateClient} />}/>
        <Route path="*" element={<NotFound />} />  
     </Routes>
    </div>
  )
}

export default App;
