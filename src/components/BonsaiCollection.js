import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import BonsaiDetails from "./BonsaiDetails";

function BonsaiCollection({ bonsais, setIsEditing }) {
  

  return (
    <div>
      <h2>Click on a bonsai for more details</h2>
      <ul>
        {bonsais.map((bonsai) => (
          <li key={bonsai.id}>
            <Link
              to={`/bonsaicollection/${bonsai.id}`}
              onClick={() => setIsEditing(false)}
            >
              {bonsai.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet/>
        
   
    </div>
  );
}

export default BonsaiCollection;
