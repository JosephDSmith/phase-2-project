import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function BonsaiCollection({ bonsais, setIsEditing }) {
  const [expandDetails, setExpandDetails] = useState(false);

  return (
    <div className="bonsai-container">
      <h2>My Bonsai Collection</h2>
      <ul className="bonsai-list">
        {bonsais.map((bonsai) => (
          <li key={bonsai.id}>
            <Link
              to={`/bonsaicollection/${bonsai.id}`}
              onClick={() => setIsEditing(false)}
            >
              <div className="bonsai-icon">
                <img src={bonsai.image} alt={bonsai.name} />
              </div>
            </Link>
            <h5>{bonsai.name}</h5>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default BonsaiCollection;
