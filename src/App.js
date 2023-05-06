import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import BonsaiDetails from "./components/BonsaiDetails";
import About from "./components/About";
import BonsaiCollection from "./components/BonsaiCollection";
import BonsaiForm from "./components/BonsaiForm"
import Home from "./components/Home";
import ContactMe from "./components/ContactMe"
import FAQs from "./components/FAQs"
import "./index.css"

function App() {
  const [bonsais, setBonsais] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bonsais")
      .then((r) => r.json())
      .then((data) => setBonsais(data));
  }, []);

  function addNewBonsai(newBonsai){
    setBonsais([...bonsais, newBonsai])
  }

  function handleBonsaiDelete(id) {
    const bonsaisToDisplay = bonsais.filter((bonsai) => (
      (id !== bonsai.id) 
    ))
    setBonsais(bonsaisToDisplay)
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route exact path="/bonsaicollection/" element={<BonsaiCollection bonsais={bonsais} />}>
          <Route path={"/bonsaicollection/:id"} element={<BonsaiDetails bonsais={bonsais} handleBonsaiDelete={handleBonsaiDelete}/>}/>
        </Route>
        <Route path="/about" element={<About />} >
          <Route path="/about/contactme" element={<ContactMe/>}/>
          <Route path="/about/FAQs" element={<FAQs/>}/>
        </Route>
        <Route path="/addbonsai" element={<BonsaiForm addNewBonsai={addNewBonsai}/>} />
        
      </Routes>
    </div>
  );
}

export default App;
