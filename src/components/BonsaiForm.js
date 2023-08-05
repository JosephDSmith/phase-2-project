import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BonsaiForm({ addNewBonsai }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [family, setFamily] = useState("");
  const [genus, setGenus] = useState("");
  const [size, setSize] = useState("");

  const newBonsai = {
    name: name,
    image: image,
    family: family,
    genus: genus,
    size: size,
  };

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://phase-2-project-db-qexg.onrender.com/bonsais", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBonsai),
    })
      .then((r) => r.json())
      .then((newItem) => {
        addNewBonsai(newItem);
        setName("");
        setImage("");
        setFamily("");
        setGenus("");
        setSize("");
        navigate("/bonsaicollection")
      });
      
  }

  return (
    <div className="bonsai-form">
      <h2>Add a new Bonsai to my collection!</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          value={name}
          placeholder="Bonsai name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="text"
          name="image"
          value={image}
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="family"
          value={family}
          placeholder="Family"
          onChange={(e) => setFamily(e.target.value)}
        />
        <input
          type="text"
          name="genus"
          value={genus}
          placeholder="Genus + Species"
          onChange={(e) => setGenus(e.target.value)}
        />
        <input
          type="text"
          name="size"
          value={size}
          placeholder="Mature size"
          onChange={(e) => setSize(e.target.value)}
        />
        <button type="submit">Add Bonsai</button>
      </form>
    </div>
  );
}

export default BonsaiForm;
