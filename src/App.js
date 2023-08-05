import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import BonsaiDetails from "./components/BonsaiDetails";
import About from "./components/About";
import BonsaiCollection from "./components/BonsaiCollection";
import BonsaiForm from "./components/BonsaiForm";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import FAQs from "./components/FAQs";
import "./index.css";

function App() {
  const [bonsais, setBonsais] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch("https://phase-2-project-db-qexg.onrender.com/bonsais")
      .then((r) => r.json())
      .then((data) => setBonsais(data));
  }, []);

  function addNewBonsai(newBonsai) {
    setBonsais([...bonsais, newBonsai]);
  }

  function handleBonsaiDelete(id) {
    const bonsaisToDisplay = bonsais.filter((bonsai) => id !== bonsai.id);
    setBonsais(bonsaisToDisplay);
  }

  function handleUpdateBonsai(updatedPlant) {
    const updatedBonsais = bonsais.map((bonsai) => {
      if (bonsai.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return bonsai;
      }
    });
    setBonsais(updatedBonsais);
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/bonsaicollection/"
          element={
            <BonsaiCollection
              bonsais={bonsais}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          }
        >
          <Route
            path={"/bonsaicollection/:id"}
            element={
              <BonsaiDetails
                bonsais={bonsais}
                handleBonsaiDelete={handleBonsaiDelete}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                handleUpdateBonsai={handleUpdateBonsai}
              />
            }
          />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="/about/contactme" element={<ContactMe />} />
          <Route path="/about/FAQs" element={<FAQs />} />
        </Route>
        <Route
          path="/addbonsai"
          element={<BonsaiForm addNewBonsai={addNewBonsai} />}
        />
      </Routes>
    </div>
  );
}

export default App;
