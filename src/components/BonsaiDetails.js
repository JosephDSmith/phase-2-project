import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";

function BonsaiDetails({
  bonsais,
  handleBonsaiDelete,
  isEditing,
  setIsEditing,
  handleUpdateBonsai,
}) {
  const { id } = useParams();
  const [bonsai, setBonsai] = useState(null); // Use null instead of an empty object

  const editNameRef = useRef("");
  const editImageRef = useRef("");
  const editFamilyRef = useRef("");
  const editGenusRef = useRef("");
  const editSizeRef = useRef("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const b = bonsais.find((b) => b.id === id);
    if (b) {
      setBonsai(b);
      setLoading(false);
    }
  }, [id, bonsais]);

  function handleClick() {
    fetch(`https://phase-2-project-db-qexg.onrender.com/${bonsai.id}`, {
      method: "DELETE",
    });

    handleBonsaiDelete(bonsai.id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const editedBonsai = {
      name: editNameRef.current.value,
      image: editImageRef.current.value,
      family: editFamilyRef.current.value,
      genus: editGenusRef.current.value,
      size: editSizeRef.current.value,
    };
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
              defaultValue={bonsai.name} // Use defaultValue instead of ref
              ref={editNameRef}
            />
            <input
              required
              type="text"
              name="image"
              defaultValue={bonsai.image} // Use defaultValue instead of ref
              ref={editImageRef}
            />
            <input
              type="text"
              name="family"
              defaultValue={bonsai.family} // Use defaultValue instead of ref
              ref={editFamilyRef}
            />
            <input
              type="text"
              name="genus"
              defaultValue={bonsai.genus} // Use defaultValue instead of ref
              ref={editGenusRef}
            />
            <input
              type="text"
              name="size"
              defaultValue={bonsai.size} // Use defaultValue instead of ref
              ref={editSizeRef}
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
