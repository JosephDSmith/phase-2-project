import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function BonsaiDetails({
  bonsais,
  handleBonsaiDelete,
  isEditing,
  setIsEditing,
  handleUpdateBonsai,
}) {
  const { id } = useParams();
  const [bonsai, setBonsai] = useState({
    name: "",
    image: "",
    family: "",
    genus: "",
    size: "",
  });

  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editFamily, setEditFamily] = useState("");
  const [editGenus, setEditGenus] = useState("");
  const [editSize, setEditSize] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const b = bonsais.find((b) => b.id === id);
    if (b) {
      setBonsai(b);
      setEditName(bonsai.name);
      setEditImage(bonsai.image);
      setEditFamily(bonsai.family);
      setEditGenus(bonsai.genus);
      setEditSize(bonsai.size);
      setLoading(false);
    }
    return () => {
      setLoading(true);
    };
  }, [
    id,
    bonsais,
    bonsai.family,
    bonsai.genus,
    bonsai.image,
    bonsai.name,
    bonsai.size,
  ]);

  function handleClick() {
    fetch(`https://phase-2-project-db-qexg.onrender.com/${bonsai.id}`, {
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
    fetch(`https://phase-2-project-db-qexg.onrender.com/${bonsai.id}`, {
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

  if (loading) {
    return <h2>Loading...</h2>;
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
          <img src={bonsai.image} alt="bonsai" />
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
            <button className="edit-submit" type="submit">
              Save
            </button>
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
            <img src={bonsai?.image} alt="bonsai" />
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
            <h3>{bonsai?.name}</h3>
            <p>Family : {bonsai?.family}</p>
            <p>Genus-Species : {bonsai?.genus}</p>
            <p>Mature Size : {bonsai?.size}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BonsaiDetails;
