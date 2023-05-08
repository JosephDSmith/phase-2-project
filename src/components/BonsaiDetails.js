import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function BonsaiDetails({
  bonsais,
  handleBonsaiDelete,
  isEditing,
  setIsEditing,
  handleUpdateBonsai,
}) {
  const { id } = useParams();

  const bonsai = bonsais.find((b) => b.id == id);

  const [editName, setEditName] = useState(bonsai.name);
  const [editImage, setEditImage] = useState(bonsai.image);
  const [editFamily, setEditFamily] = useState(bonsai.family);
  const [editGenus, setEditGenus] = useState(bonsai.genus);
  const [editSize, setEditSize] = useState(bonsai.size);

  function handleClick() {
    fetch(`http://localhost:3000/bonsais/${bonsai.id}`, {
      method: "DELETE",
    });

    handleBonsaiDelete(bonsai.id);
  }

  const editedBonsai = {
    name: editName,
    image: editImage,
    family: editFamily,
    genus: editGenus,
    size: editSize,
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/bonsais/${bonsai.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedBonsai),
    })
      .then((r) => r.json())
      .then((updatedBonsai) => handleUpdateBonsai(updatedBonsai));
    setIsEditing((prevState) => !prevState);
  }

  return (
    <div className="details">
      {isEditing ? (
        <div className="editMenu">
          <button
            className="collapse"
            onClick={() => setIsEditing((prevState) => !prevState)}
          >
            <h5>
              Cancel Edit <i className="fa-solid fa-circle-xmark"></i>
            </h5>
          </button>
          <img src={bonsai.image} />
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              required
              type="text"
              name="image"
              value={editImage}
              onChange={(e) => setEditImage(e.target.value)}
            />
            <input
              type="text"
              name="family"
              value={editFamily}
              onChange={(e) => setEditFamily(e.target.value)}
            />
            <input
              type="text"
              name="genus"
              value={editGenus}
              onChange={(e) => setEditGenus(e.target.value)}
            />
            <input
              type="text"
              name="size"
              value={editSize}
              onChange={(e) => setEditSize(e.target.value)}
            />
            <button className="edit-submit" type="submit">Save</button>
          </form>
        </div>
      ) : (
        <div className="bonsaiCard">
          <Link to="/bonsaicollection/">
            <h5>
              Collapse Details <i className="fa-solid fa-circle-xmark"></i>
            </h5>
          </Link>
          <div className="details-image">
            <img src={bonsai.image} />
            <div className="button-wrapper">
              <button
                className="edit-button"
                onClick={() => setIsEditing((prevState) => !prevState)}
              >
                Edit
              </button>
              <button className="delete-button" onClick={handleClick}>
                <Link to="/bonsaicollection/">Delete</Link>
              </button>
            </div>
          </div>
          <div className="about-info">
            <h3>{bonsai.name}</h3>
            <p>Family : {bonsai.family}</p>
            <p>Genus-Species : {bonsai.genus}</p>
            <p>Mature Size : {bonsai.size}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BonsaiDetails;
