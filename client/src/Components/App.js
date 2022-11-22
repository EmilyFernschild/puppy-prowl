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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/PupsContainer" element = {<PupsContainer />}/>
        <Route path="/WalkersContainer" element = {<WalkersContainer />}/>
        <Route path="/Login" element = {<Login />}/>
        <Route path="/Signup" element = {<Signup />}/>
        <Route path="/Appointments" element = {<Appointments />}/>
        <Route path="/Account" element = {<Account />}/>
      </Routes>
    </div>
  );
}

export default App;
