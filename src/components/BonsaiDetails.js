import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function BonsaiDetails({ bonsais, handleBonsaiDelete }) {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false)

  console.log(isEditing)

  const bonsai = bonsais.find((b) => b.id == id);

  function handleClick(){
    fetch(`http://localhost:3000/bonsais/${bonsai.id}`, {
      method: "DELETE"
    })
    
    handleBonsaiDelete(bonsai.id)
  }

  return (

    <div>
            {isEditing ? (
      
              <div>Editing</div>
      ) : (
        <div className="bonsaiCard">
        <h3>{bonsai.name}</h3>
        <p>Family : {bonsai.family}</p>
        <p>Genus-Species : {bonsai.genus}</p>
        <p>Mature Size : {bonsai.size}</p>
        <button onClick={() => setIsEditing((prevState) =>!prevState)}>Edit this Bonsai</button>
        <button onClick={handleClick}>
          <Link to="/bonsaicollection/">Delete this Bonsai</Link>
        </button>
        <img src={bonsai.image}/>
        
      </div>
      )}


    </div>

  );
}

export default BonsaiDetails;
