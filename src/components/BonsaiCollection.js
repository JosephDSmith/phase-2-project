import React from "react";
import { Link, Outlet } from "react-router-dom";

function BonsaiCollection({ bonsais, setIsEditing, isEditing }) {
console.log(bonsais)
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
