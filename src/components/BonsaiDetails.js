import React from "react";
import { useParams } from "react-router-dom";

function BonsaiDetails({ bonsais }) {
  const { id } = useParams();

  const bonsai = bonsais.find((b) => b.id == id);

  console.log(bonsai);

  return (
    <div className="bonsaiCard">
      <h3>{bonsai.name}</h3>
      <p>Family : {bonsai.family}</p>
      <p>Genus-Species : {bonsai.genus}</p>
      <p>Mature Size : {bonsai.size}</p>
      <img src={bonsai.image}/>
    </div>
  );
}

export default BonsaiDetails;
